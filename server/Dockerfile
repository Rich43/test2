FROM node
WORKDIR /app
COPY api.json /app
COPY package.json /app
COPY src /app/src
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]
