const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public', '_headers');
if (fs.existsSync(src)) {
  const targets = [
    path.join(__dirname, '..', '.vercel', 'output', 'static', '_headers'),
    path.join(__dirname, '..', '.next', 'static', '_headers'),
    path.join(__dirname, '..', '.next', '_headers')
  ];
  for (const t of targets) {
    try {
      const dir = path.dirname(t);
      if (fs.existsSync(dir)) {
        fs.copyFileSync(src, t);
        console.log(`Copied _headers to ${t}`);
      }
    } catch (e) {
      console.warn(`Could not copy _headers to ${t}:`, e.message);
    }
  }
}
