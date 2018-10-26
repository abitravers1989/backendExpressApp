FROM node:8-alpine
# LABEL backendApp


WORKDIR /build

COPY package.json .

RUN npm install

# Copy the rest of the app's files
COPY . .

# EXPOSE 3000

# # Command to run when starting the app
# CMD ["npm", "start"]