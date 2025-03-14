# --- Node base ---
FROM node:16-alpine3.16 AS base
# copy source code into working directory
WORKDIR /usr/local/src/app
COPY ./package.json ./webpack.config.js ./webpack.config.prod.js ./.babelrc ./
COPY ./public/ ./public/
COPY ./src/ ./src/

# --- Node dependencies ---
# Install react, react-scripts
FROM base AS dependencies
RUN npm install --legacy-peer-deps

# --- npm build ---
FROM dependencies AS builder
RUN npm run-script build

# change image to nginx
FROM nginx:1.17.7 AS deployer

# copy react-application into nginxs working directory
RUN rm -r /usr/share/nginx/html
COPY --from=builder /usr/local/src/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./public/config.js /usr/share/nginx/html/public/config.js
COPY ./public/favicon.ico /usr/share/nginx/html

# expose port used by nginx
EXPOSE 8082
