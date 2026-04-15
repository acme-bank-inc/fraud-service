FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

# SECURITY FIX: Upgrade tar to resolve GHSA-83g3-92jg-28cx vulnerability
# The base node:20-alpine image includes tar@6.2.1 which has a vulnerability.
# Upgrading to tar@7.5.8 which contains the fix.
RUN npm install -g tar@7.5.8

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]