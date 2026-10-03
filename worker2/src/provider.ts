import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { pipeline } from 'stream/promises';

export interface MediaProvider {
  downloadMedia(url: string, outputDir: string): Promise<string>;
}

export class RapidApiProvider implements MediaProvider {
  private apiKeys: string[];
  private host: string;
  private currentKeyIndex: number = 0;

  constructor() {
    this.host = 'cobalt-social-media-downloader.p.rapidapi.com';
    // User can add more keys here
    this.apiKeys = [
      'ef3cb10848mshdaa839ca0aa0a7bp10bc97jsnd19912a59ca4'
    ];
  }

  // Smart function to find the video URL anywhere in the RapidAPI JSON response
  private findVideoUrl(obj: any): string | null {
    if (typeof obj === 'string') {
      if ((obj.includes('.mp4') || obj.includes('.jpg') || obj.includes('.png') || obj.includes('video') || obj.includes('tunnel')) && obj.startsWith('http')) {
        return obj;
      }
      return null;
    }
    if (typeof obj === 'object' && obj !== null) {
      // Prioritize keys that sound like video URLs
      for (const key of Object.keys(obj)) {
        if (typeof obj[key] === 'string' && obj[key].startsWith('http') && (key.toLowerCase().includes('media') || key.toLowerCase().includes('url') || key.toLowerCase().includes('video') || obj[key].includes('.mp4') || obj[key].includes('.jpg'))) {
          return obj[key];
        }
      }
      // Recursively search
      for (const key of Object.keys(obj)) {
        const found = this.findVideoUrl(obj[key]);
        if (found) return found;
      }
    }
    return null;
  }

  async downloadMedia(url: string, outputDir: string): Promise<string> {
    const filename = `${randomUUID()}.mp4`;
    const outputPath = path.join(outputDir, filename);
    let attempts = 0;

    while (attempts < this.apiKeys.length) {
      const apiKey = this.apiKeys[this.currentKeyIndex];
      const apiUrl = `https://${this.host}/cobalt-download/`;
      
      console.log(`[RapidAPI] Trying key index ${this.currentKeyIndex}...`);
      try {
        const response = await axios.post(apiUrl, 
          {
            downloadMode: "auto",
            filenameStyle: "basic",
            url: url,
            videoQuality: "1080"
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-rapidapi-host': this.host,
              'x-rapidapi-key': apiKey
            },
            timeout: 15000
          }
        );

        console.log(`[RapidAPI] Raw Response:`, JSON.stringify(response.data).substring(0, 500));

        const videoUrl = this.findVideoUrl(response.data);
        if (!videoUrl) {
          throw new Error("Could not find video URL in the API response.");
        }

        console.log(`[RapidAPI] Found video URL. Downloading to ${outputPath}...`);
        
        // Download the actual MP4 file
        const videoResponse = await axios.get(videoUrl, { 
          responseType: 'stream',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'Referer': 'https://www.instagram.com/'
          },
          timeout: 20000
        });
        await pipeline(videoResponse.data, fs.createWriteStream(outputPath));
        
        return outputPath;

      } catch (error: any) {
        console.error(`[RapidAPI] Error with key index ${this.currentKeyIndex}:`, error?.response?.status || error.message);
        
        // If Rate Limited or Forbidden, switch to the next key
        if (error?.response?.status === 429 || error?.response?.status === 403) {
          console.log(`[RapidAPI] Limit reached for key index ${this.currentKeyIndex}. Switching...`);
          this.currentKeyIndex = (this.currentKeyIndex + 1) % this.apiKeys.length;
          attempts++;
        } else {
          // Unknown error, still try the next key just in case
          this.currentKeyIndex = (this.currentKeyIndex + 1) % this.apiKeys.length;
          attempts++;
        }
      }
    }

    throw new Error('All API keys failed or limits reached.');
  }
}

export class MockMediaProvider implements MediaProvider {
  async downloadMedia(url: string, outputDir: string): Promise<string> {
    const filename = `mock-${randomUUID()}.mp4`;
    const outputPath = path.join(outputDir, filename);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await fs.promises.writeFile(outputPath, 'mock-video-content');
    return outputPath;
  }
}
