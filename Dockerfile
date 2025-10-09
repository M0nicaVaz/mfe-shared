FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Shared não precisa rodar servidor, apenas build
CMD ["npm", "install"]
