# ── ICA Server – Dockerfile ───────────────────────────────────────────
FROM node:20-alpine

WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package*.json ./

RUN npm ci --omit=dev

# Copy the rest of the source
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
