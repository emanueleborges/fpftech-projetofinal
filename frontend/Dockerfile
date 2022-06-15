FROM node:14.15 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli@12.2.0
RUN npm run build --prod

FROM nginx:1.21
COPY --from=node /app/dist/frontend /usr/share/nginx/html

EXPOSE 80
