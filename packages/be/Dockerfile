# Use the official Node.js image as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

RUN npm run build --verbose

# Expose the port your Express app is running on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]


