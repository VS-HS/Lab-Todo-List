FROM node:14

WORKDIR /backend-todo-daniel-enrique

COPY package*.json ./backend-todo-daniel-enrique/

RUN npm install

COPY . .

RUN npm run build


CMD ["npm", "run"]
