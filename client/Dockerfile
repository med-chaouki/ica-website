# ── ICA Client – Dockerfile (multi-stage) ────────────────────────────
# Stage 1: build the Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build args are baked into the static bundle at build time
ARG VITE_API_URL
ARG VITE_WHATSAPP_NUMBER

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER

RUN npm run build

# Stage 2: serve via nginx
FROM nginx:1.25-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback: all routes → index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
