# FROM node:14

# WORKDIR /backend-todo-daniel-enrique

# COPY package*.json ./backend-todo-daniel-enrique/

# RUN npm install

# COPY . .

# RUN npm run build


# CMD ["npm", "run"]



FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]