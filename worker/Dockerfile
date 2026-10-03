FROM node:18-alpine

# Install Python and FFmpeg for yt-dlp
RUN apk add --no-cache python3 ffmpeg

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build TS
RUN npm run build

# Create temp dir
RUN mkdir temp

EXPOSE 8080

CMD ["npm", "start"]
