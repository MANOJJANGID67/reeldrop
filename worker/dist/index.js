"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const provider_1 = require("./provider");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const workerSecret = process.env.WORKER_SECRET;
const isMock = process.env.MOCK_MEDIA_PROVIDER === 'true';
const provider = isMock ? new provider_1.MockMediaProvider() : new provider_1.YtDlpProvider();
const tempDir = path_1.default.join(__dirname, '..', 'temp');
if (!fs_1.default.existsSync(tempDir)) {
    fs_1.default.mkdirSync(tempDir, { recursive: true });
}
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rate Limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
// Authentication Middleware
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!workerSecret) {
        return next(); // if no secret configured, allow (not recommended for production)
    }
    if (!authHeader || authHeader !== `Bearer ${workerSecret}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};
const utils_1 = require("./utils");
app.post('/api/download', authenticate, async (req, res) => {
    const { url } = req.body;
    if (!url || !(0, utils_1.isValidInstagramUrl)(url)) {
        return res.status(400).json({ error: 'Invalid or unsupported Instagram URL' });
    }
    try {
        const outputPath = await provider.downloadMedia(url, tempDir);
        // Send file and then delete it
        res.download(outputPath, (err) => {
            if (err) {
                console.error('Download error:', err);
            }
            fs_1.default.unlink(outputPath, (unlinkErr) => {
                if (unlinkErr)
                    console.error('Error deleting temp file:', unlinkErr);
            });
        });
    }
    catch (error) {
        console.error('Error processing media:', error);
        res.status(500).json({ error: 'Failed to process media' });
    }
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok', mock: isMock });
});
app.listen(port, () => {
    console.log(`Worker listening on port ${port}, Mock mode: ${isMock}`);
});
