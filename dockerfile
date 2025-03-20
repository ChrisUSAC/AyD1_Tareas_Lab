FROM node:20.17-alpine AS dist

WORKDIR /react-front

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx AS prod-stage

COPY --from=dist /react-front/dist /usr/share/nginx/html
COPY --from=dist /react-front/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]