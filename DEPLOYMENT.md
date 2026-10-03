# DEPLOYMENT DOCUMENTATION

## 1. Frontend (Next.js)

The frontend is designed to be deployed on platforms like Vercel, Netlify, or any Node.js environment.

### Vercel Deployment

1. Connect your GitHub repository to Vercel.
2. In the Vercel dashboard, set the Framework Preset to Next.js.
3. Configure the following Environment Variables in Vercel:
   - `WORKER_URL`: `https://worker.yourdomain.com/api/download`
   - `WORKER_SECRET`: Generate a strong random string (e.g., `openssl rand -hex 32`)

4. Click Deploy. Vercel will handle building and serving the Next.js app on `www.yourdomain.com`.

## 2. Worker

The worker should be deployed on a VPS (e.g., DigitalOcean, AWS EC2, Linode) to give it dedicated resources and static IPs, which is crucial for handling video downloads and potential IP blocks from Instagram.

### VPS Setup with Docker, HTTPS, and Reverse Proxy

1. **Provision a VPS:** Create a Linux instance (e.g., Ubuntu 22.04).
2. **Install Docker & Docker Compose:**
   ```bash
   sudo apt update
   sudo apt install docker.io docker-compose -y
   ```
3. **Clone the repository to the VPS:**
   ```bash
   git clone <your-repo-url> /opt/reeldrop
   cd /opt/reeldrop
   ```
4. **Configure Worker Environment Variables:**
   Create `/opt/reeldrop/worker/.env`:
   ```
   PORT=8080
   WORKER_SECRET=your_super_strong_secret_matching_vercel
   MOCK_MEDIA_PROVIDER=false
   ```
   *Note: NEVER expose the worker without authentication. Keep the secret secure.*
5. **Start the Worker Container:**
   ```bash
   docker-compose up -d --build
   ```

### Reverse Proxy and HTTPS (Nginx & Certbot)

1. **Install Nginx and Certbot:**
   ```bash
   sudo apt install nginx certbot python3-certbot-nginx -y
   ```
2. **Configure Nginx:**
   Create `/etc/nginx/sites-available/worker`:
   ```nginx
   server {
       server_name worker.yourdomain.com;

       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_addrs;
       }
   }
   ```
3. **Enable Site and Obtain SSL:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/worker /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   sudo certbot --nginx -d worker.yourdomain.com
   ```

### Firewall Configuration

To ensure security, configure UFW to only allow HTTP, HTTPS, and SSH. The worker port (8080) should NOT be exposed directly to the internet.

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### Domain Configuration

- Set an A record for `www.yourdomain.com` pointing to Vercel (or CNAME if preferred).
- Set an A record for `worker.yourdomain.com` pointing to the VPS IP address.
