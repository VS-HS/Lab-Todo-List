# npm install
# npm run start:dev

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
