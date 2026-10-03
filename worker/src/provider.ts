import ytDlp from 'yt-dlp-exec';
import { randomUUID } from 'crypto';
import fs from 'fs/promises';
import path from 'path';

export interface MediaProvider {
  downloadMedia(url: string, outputDir: string): Promise<string>;
}

export class YtDlpProvider implements MediaProvider {
  async downloadMedia(url: string, outputDir: string): Promise<string> {
    const filename = `${randomUUID()}.mp4`;
    const outputPath = path.join(outputDir, filename);

    // Instagram URL is validated before this method is called.
    await ytDlp(url, {
      output: outputPath,
      format: 'best',
      noPlaylist: true,
      // Provide some common headers to help yt-dlp avoid blocks
      addHeader: 'referer:https://www.instagram.com/'
    });

    return outputPath;
  }
}

export class MockMediaProvider implements MediaProvider {
  async downloadMedia(url: string, outputDir: string): Promise<string> {
    const filename = `mock-${randomUUID()}.mp4`;
    const outputPath = path.join(outputDir, filename);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create a dummy file
    await fs.writeFile(outputPath, 'mock-video-content');
    
    return outputPath;
  }
}
