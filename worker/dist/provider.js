"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMediaProvider = exports.YtDlpProvider = void 0;
const yt_dlp_exec_1 = __importDefault(require("yt-dlp-exec"));
const crypto_1 = require("crypto");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class YtDlpProvider {
    async downloadMedia(url, outputDir) {
        const filename = `${(0, crypto_1.randomUUID)()}.mp4`;
        const outputPath = path_1.default.join(outputDir, filename);
        // Instagram URL is validated before this method is called.
        await (0, yt_dlp_exec_1.default)(url, {
            output: outputPath,
            format: 'best',
            noPlaylist: true,
            // Provide some common headers to help yt-dlp avoid blocks
            addHeader: [
                'referer:https://www.instagram.com/',
                'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
            ]
        });
        return outputPath;
    }
}
exports.YtDlpProvider = YtDlpProvider;
class MockMediaProvider {
    async downloadMedia(url, outputDir) {
        const filename = `mock-${(0, crypto_1.randomUUID)()}.mp4`;
        const outputPath = path_1.default.join(outputDir, filename);
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Create a dummy file
        await promises_1.default.writeFile(outputPath, 'mock-video-content');
        return outputPath;
    }
}
exports.MockMediaProvider = MockMediaProvider;
