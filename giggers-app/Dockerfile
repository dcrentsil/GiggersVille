# Create image based on the official Node 6 image from dockerhub
FROM node:latest

# Proxy settings
ENV http_proxy "http://proxy.tcs.com:8080"
ENV https_proxy "http://proxy.tcs.com:8080"

# Create a directory where our app will be placed
# RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
# COPY package.json /usr/src/app
COPY package.json .

RUN npm cache verify

# Install dependecies
RUN yarn install --ignore-scripts --unsafe-perm

# Get all the code needed to run the app
# COPY . /usr/src/app
COPY . .

ENV http_proxy=""
ENV https_proxy=""


# Expose the port the app runs in
EXPOSE 4200

# Serve the app
# ENTRYPOINT ["yarn", "start", "-H", "0.0.0.0"]
ENTRYPOINT ["yarn", "start"]
# CMD ["ng", "serve"]
