# npm install
# npm run start:dev


# # Base image
# FROM node:18
# # Create app directory
# WORKDIR /usr/src/app
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./
# # Install app dependencies
# RUN npm install
# # Bundle app source
# COPY . .
# # Creates a "dist" folder with the production build
# RUN npm run build
# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]


# --------------------------------------------------------

FROM node:19-alpine
WORKDIR /app
COPY tsconfig*.json ./
COPY package*.json ./
# Install dependencies from package-lock.json, see https://docs.npmjs.com/cli/v7/commands/npm-ci
RUN npm ci
# Copy application sources (.ts, .tsx, js)
COPY src/ src/
# Build application (produces dist/ folder)
RUN npm run build
# Expose application ports
EXPOSE 8080
EXPOSE 3001
EXPOSE 3306
# Start application
CMD [ "node", "dist/main.js" ]

# --------------------------------------------------------


# FROM node:14

# WORKDIR /backend-todo-daniel-enrique

# COPY package*.json ./backend-todo-daniel-enrique/

# RUN npm install

# COPY . .

# RUN npm run build


# CMD ["npm", "run", "start:dev"]



# --------------------------------------------------------



# FROM node:12.19.0-alpine3.9 AS development

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install glob rimraf

# RUN npm install --only=development

# COPY . .

# RUN npm run build

# FROM node:12.19.0-alpine3.9 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# # COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]