# Use a Node.js image matching your workspace's Node.js version
FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY ./packages/be ./packages/be
COPY ./packages/utils ./packages/utils

RUN npm install 

RUN npm run build 

# Add any additional setup or configuration specific to this workspace
CMD [ "npm", "run", "start", "--workspace=@compose-test/be" ]