FROM node:10.15.3-alpine as web

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=web /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"] 
