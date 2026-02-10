FROM node:20-alpine AS build
WORKDIR /app

COPY ARQUITECTURA-LANDING/package*.json ./
RUN npm install

COPY ARQUITECTURA-LANDING/ ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
