# Stage 1: Build frontend
FROM node:14 as frontend
WORKDIR /app/frontend

# Copy package.json and install dependencies
COPY ./frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend code and build the application
COPY ./frontend .
RUN npm run build

# Stage 2: Final image
FROM node:14
WORKDIR /app

# Install pm2 globally
RUN npm install -g pm2

# Copy built frontend files from the previous stage
COPY --from=frontend /app/frontend/dist ./frontend

# Expose port 3000
EXPOSE 3000

# Start frontend server with pm2
CMD ["pm2-runtime", "serve", "./frontend", "--name", "frontend"]
