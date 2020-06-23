# Going from App Engine to Cloud Run

## Create `Dockerfile`
```
FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
```


## (Optional) `app.yaml` for App Engine.
