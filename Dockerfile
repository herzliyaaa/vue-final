FROM node:slim
WORKDIR /usr/src/app
COPY package*.json ./

# proxy for local server deployment
#ENV http_proxy "http://172.16.1.6:3128"
#ENV https_proxy "http://172.16.1.6:3128"
RUN npm config set registry https://registry.npmjs.org
RUN npm config set http-proxy http://192.168.36.35:3128
RUN npm config set https-proxy http://192.168.36.35:3128
RUN npm config set proxy http://192.168.36.35:3128

RUN npm install
COPY . .
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "serve"]