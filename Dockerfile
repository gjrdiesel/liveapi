FROM mcr.microsoft.com/playwright:focal

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "npm", "start" ]