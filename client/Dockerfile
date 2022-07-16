FROM node:alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json /app
RUN npm install

# Copying source files
COPY . .


# Running the app
CMD ["npm", "run", "dev"]