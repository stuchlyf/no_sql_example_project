### STEP 1: Dependencies ###
FROM node:14-alpine as dependencies
RUN mkdir -p /dependencies
WORKDIR /dependencies
COPY package.json yarn.lock ./
RUN ["yarn", "install", "--pure-lockfile"]

### STEP 2: Build ###
FROM dependencies as build
RUN mkdir -p /build
WORKDIR /build
COPY src ./src
COPY --from=dependencies /dependencies/package.json /dependencies/yarn.lock ./
COPY --from=dependencies /dependencies/node_modules ./node_modules
COPY tsconfig.json ./
RUN ["yarn", "build"]

### STEP 3: Run ###
FROM node:14-alpine as RUN
RUN mkdir -p /app
WORKDIR /app
COPY --from=build /build/build .
EXPOSE 8080
ENTRYPOINT ['yarn', 'start']