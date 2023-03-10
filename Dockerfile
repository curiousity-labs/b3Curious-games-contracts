FROM node:16.18.1-alpine

# Copies a hardhat.package.json and renames
COPY package.json /blockchain-node/package.json 

# Copies a hardhat.config.js
COPY . /blockchain-node/

WORKDIR /blockchain-node/

# install needed dependencies
# These dependencies are needed so that the the node will run correctly
# --no-cache and --virtual flags added to speed build time
# caching isn't needed since this will be rebuild and ran fresh each time a test is ran
RUN apk --no-cache --virtual build-dependencies add python3 make g++

RUN npm -g pnpm

RUN pnpm install

# keeps server running
CMD ["pnpm", "run", "test"]
