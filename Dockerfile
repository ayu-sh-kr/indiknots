# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Post install nuxt app
RUN pnpm run postinstall

# Copy the rest of the application code
COPY . .

# Build the Nuxt app
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Nuxt app in production mode
CMD ["node", ".output/server/index.mjs"]