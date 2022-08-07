# EFinances
## About this project
  This finances control project is an open source backend, I used these technologies:
  - Node.js
  - Typescript
  - Prisma Orm
  - Mysql
  - Express
  - Heroku
  - Axios
  - jsonwebtoken 
  - Eslint
  - Jest

## How to execute this project

### 1 - The first step is to configure the file .env


Rename the .env.example file to .env and put this requires information:
    
    1- DATABASE_URL     -> Database url in these format: mysql://USER:PASSWORD@HOST:PORT/DATABASE
    2- JWT_USER_SECRET  -> any "secret" word to JWT (example: supersecret)
    3- PORT             -> Port to server run (example: 3000)
    4- ENVIROMENT       -> Indicates if this project is a development or production environment.

    
### 2 - Download dependencies
The project use yarn, then:
```ts
yarn // Download the dependencies  
```

### 3 - up containers (need Docker Compose)

```bash
docker-compose up # Start the server

# Then open a new terminal and run the migrations inside of container:

docker exec -it efinances /bin/bash

yarn prisma migrate dev
```

Done, the project is running! Now, start the client-side here: https://github.com/GuilhermeBarroso-sys/EFinances-FRONT/blob/master/README.md <br>
 
    

