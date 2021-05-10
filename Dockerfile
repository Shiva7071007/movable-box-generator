FROM node:12.8.1 AS compile-image

RUN npm install -g yarn

WORKDIR /opt/ng
COPY package.json  ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

FROM nginx
COPY --from=compile-image /opt/ng/dist/movable-box-generator /usr/share/nginx/html
