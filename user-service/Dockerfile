# Use an official Node.js image as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port that the service will run on
EXPOSE 3001

# Start the service
CMD ["npm", "run", "start:prod"]
