"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockMediaProvider = exports.YtDlpProvider = void 0;
const yt_dlp_exec_1 = __importStar(require("yt-dlp-exec"));
const crypto_1 = require("crypto");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
// In this specific Windows testing environment, the npm postinstall failed, 
// so we fall back to the globally installed pip binary if on Windows. 
// In Docker/Linux (production), yt-dlp-exec's native binary will work out-of-the-box.
const ytDlp = process.platform === 'win32'
    ? (0, yt_dlp_exec_1.create)('C:\\Users\\admin\\AppData\\Roaming\\Python\\Python314\\Scripts\\yt-dlp.exe')
    : yt_dlp_exec_1.default;
class YtDlpProvider {
    async downloadMedia(url, outputDir) {
        const filename = `${(0, crypto_1.randomUUID)()}.mp4`;
        const outputPath = path_1.default.join(outputDir, filename);
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
