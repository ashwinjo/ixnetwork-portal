# Build stage
FROM node:20-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Custom nginx config to listen on the PORT variable provided by Cloud Run
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
EXPOSE 8080
CMD ["/bin/sh", "-c", "sed -i \"s/8080/$PORT/g\" /etc/nginx/conf.d/default.conf.template && cp /etc/nginx/conf.d/default.conf.template /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

