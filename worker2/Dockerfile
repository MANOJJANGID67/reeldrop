FROM node:18-alpine

WORKDIR /app

# Install Python, FFmpeg, wget, and ca-certificates
RUN apk add --no-cache python3 ffmpeg wget ca-certificates

# Install latest yt-dlp binary
RUN wget -qO /usr/local/bin/yt-dlp https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp && chmod a+rx /usr/local/bin/yt-dlp

# Install ScraperAPI Proxy CA into system certificate store and build trusted CA bundle
RUN mkdir -p /usr/local/share/ca-certificates /app/certs && \
    wget -qO /usr/local/share/ca-certificates/scraperapi_proxyca.crt https://api.scraperapi.com/proxyca.pem && \
    cp /usr/local/share/ca-certificates/scraperapi_proxyca.crt /app/certs/proxyca.pem && \
    update-ca-certificates && \
    cat /etc/ssl/certs/ca-certificates.crt /app/certs/proxyca.pem > /app/certs/ca_bundle.pem

ENV SSL_CERT_FILE=/app/certs/ca_bundle.pem

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
