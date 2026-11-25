# 1. Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

# 2. Build
FROM node:20-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .
RUN npm run build && npm prune --omit=dev

# 3. Serve
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/content ./content
# Sin este archivo, next start ignora la configuración (images.unoptimized, poweredByHeader)
COPY --from=build --chown=node:node /app/next.config.mjs ./

# No ejecutar la web como root
USER node

EXPOSE 3000

CMD ["npm", "run", "start"]
