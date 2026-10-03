"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../src/utils");
describe('isValidInstagramUrl', () => {
    it('should allow valid instagram reel urls', () => {
        expect((0, utils_1.isValidInstagramUrl)('https://www.instagram.com/reel/C123456789/')).toBe(true);
        expect((0, utils_1.isValidInstagramUrl)('http://instagram.com/p/C123456789/')).toBe(true);
    });
    it('should reject non-instagram urls', () => {
        expect((0, utils_1.isValidInstagramUrl)('https://www.youtube.com/watch?v=123')).toBe(false);
        expect((0, utils_1.isValidInstagramUrl)('https://evil.com/reel/123')).toBe(false);
        expect((0, utils_1.isValidInstagramUrl)('http://169.254.169.254/latest/meta-data/')).toBe(false);
    });
    it('should reject invalid paths on instagram', () => {
        expect((0, utils_1.isValidInstagramUrl)('https://www.instagram.com/about/')).toBe(false);
        expect((0, utils_1.isValidInstagramUrl)('https://www.instagram.com/developer/')).toBe(false);
    });
});
