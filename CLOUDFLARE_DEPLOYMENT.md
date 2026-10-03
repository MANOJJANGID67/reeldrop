# 🚀 Cloudflare Deployment Guide for REELDROP

REELDROP consists of two separate applications:
1. **The Next.js Frontend**: Can be hosted on Cloudflare Pages.
2. **The Worker API (`worker2/`)**: MUST be hosted on a Linux VPS (DigitalOcean, AWS, Hetzner) using Docker.

> **CRITICAL ARCHITECTURAL RULE**
> You **cannot** deploy the backend worker to Cloudflare Workers. Cloudflare Workers do not support heavy binaries like `yt-dlp` or FFmpeg, nor do they support arbitrary file system execution required for video processing. The worker must run on a traditional server via Docker.

---

## Part 1: Deploying the Frontend to Cloudflare Pages

Cloudflare Pages natively supports Next.js App Router and API routes via their `@cloudflare/next-on-pages` adapter.

### 1. Update your project
Because your project uses Next.js, you must build it specifically for Cloudflare's Edge network.

Run this locally:
```bash
npm install -D @cloudflare/next-on-pages --legacy-peer-deps
```

Update your `package.json` scripts:
```json
"scripts": {
  "pages:build": "npx @cloudflare/next-on-pages"
}
```

### 2. Connect to Cloudflare
1. Log in to your Cloudflare Dashboard.
2. Go to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository.

### 3. Configure the Build Settings
In the Cloudflare Pages deployment setup, enter the following exact settings:

* **Framework preset**: `Next.js`
* **Build command**: `npm run pages:build`
* **Build output directory**: `.vercel/output/static`

### 4. Set Environment Variables
In the Cloudflare settings (under **Settings** -> **Environment variables**), add your production variables:
* `NODE_VERSION`: `20` (or `18`)
* `WORKER_URL`: `https://worker.yourdomain.com/api/download`
* `WORKER_SECRET`: `<YOUR_SECURE_RANDOM_STRING>`

Click **Deploy**. Your frontend is now globally distributed on Cloudflare!

---

## Part 2: Deploying the Backend Worker (VPS + Docker)

Since the worker needs `yt-dlp` and `ffmpeg`, you must deploy it to a Virtual Private Server (VPS).

### 1. Provision a Server
1. Rent a cheap VPS (e.g., $5/mo DigitalOcean Droplet, Hetzner, or AWS EC2).
2. Install Docker and Docker Compose on the server.

### 2. Prepare the Worker
Copy the `worker2/` folder to your server, or clone your repository there.

Create a `.env` file inside the `worker2/` directory on your server:
```env
PORT=8080
WORKER_SECRET=<YOUR_SECURE_RANDOM_STRING>
MOCK_MEDIA_PROVIDER=false
```

*(Ensure `WORKER_SECRET` exactly matches the one you put in Cloudflare).*

### 3. Build and Run via Docker
Inside the `worker2/` directory on your server, run:
```bash
docker-compose up -d --build
```
This will compile the TypeScript, install Python, FFmpeg, yt-dlp, and start the API on port `8080`.

### 4. Set Up HTTPS and Reverse Proxy (Cloudflare Tunnels)
The easiest and most secure way to connect your VPS worker to the internet without exposing ports is using **Cloudflare Tunnels** (Zero Trust).

1. In Cloudflare, go to **Zero Trust** -> **Networks** -> **Tunnels**.
2. Create a new tunnel (e.g., `reeldrop-worker`).
3. Follow the instructions to install the `cloudflared` daemon on your VPS.
4. Route the public hostname (e.g., `worker.yourdomain.com`) to `http://localhost:8080`.

By using Cloudflare Tunnels:
* You get automatic HTTPS/SSL.
* You don't need to open port 80 or 443 on your VPS firewall.
* Your server IP remains hidden and protected by Cloudflare.
