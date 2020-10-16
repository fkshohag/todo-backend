FROM node:12.13-alpine As development
# Create app directory
RUN mkdir -p /var/www/awesomebackend

# Install app dependencies
COPY package.json /var/www/awesomebackend/package.json

RUN npm install 

# Bundle app source
COPY . /var/www/awesomebackend

WORKDIR /var/www/awesomebackend


ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3001
CMD [ "npm", "start" ]