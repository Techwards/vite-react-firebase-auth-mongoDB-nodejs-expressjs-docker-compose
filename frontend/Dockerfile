FROM node

# RUN addgroup productMarketFitProjectBE && adduser -S -G productMarketFitProjectBE productMarketFitProjectBE
# USER productMarketFitProjectBE

WORKDIR /usr/vite-react-firebase-auth-mongodb-nodejs-expressjs-docker-compose-fe

COPY package*.json ./
ENV NODE_ENV=development
RUN npm install 
COPY ./ ./

# EXPOSE 3000

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN chmod +x /wait

# there are two stype of 
# CMD npm start // shell form 
# CMD ["npm", "start"] // exec form
# ENTRYPOINT // both shell and exec form

CMD ["npm", "run", "dev"]