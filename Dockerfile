# Multi-stage build for Angular SSR
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build for production
COPY . .
RUN npm run build

# Final stage: Serve the SSR app using Node
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the necessary files for serving (the output of ng build)
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 4000

# Entry point for Angular SSR based on your package.json
CMD ["node", "dist/jsojo-portfolio/server/server.mjs"]
