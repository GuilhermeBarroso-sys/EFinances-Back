FROM node:16


WORKDIR /usr/app
COPY package.json ./
# install npm
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]