# EFinances
## Sobre o projeto
  Esse projeto é um back-end open-source de um site de finanças utilizando as seguintes técnologias:
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

## Como executar o projeto

### 1 - Configurar Variáveis de ambiente
Para executar o projeto, primeiro é preciso configurar o .env

Renomeie o arquivo .env.example para .env e logo em seguida, coloque as informações necessarias que são:
    
    1- DATABASE_URL     -> url que o prisma orm utiliza como referência database
    2- JWT_USER_SECRET  -> Pode ser qualquer palavra como por exemplo "supersecret", é apenas para servir de referência pro JWT
    3- PORT             -> Porta em que o projeto está rodando ( ex: 3000, 3001...)
    4- ENVIROMENT       -> Informa se está em produção ou desenvolvimento.

    
### 2 - Baixar dependências
Nesse Projeto eu utilizei o yarn, então:
```ts
yarn // Baixar dependências  
```

### 3 - Subir containers (Precisa do Docker Compose)
Utilizei docker no projeto, então precisamos realizar os seguintes comandos:

```bash
docker-compose up # Starta o servidor 

# Logo depois, abra um outro terminal e rode as migrations através do container:

docker exec -it efinances /bin/bash

yarn prisma migrate dev
```

Pronto, o projeto está rodando! Agora é só iniciar o client-side que se encontra aqui:https://github.com/GuilhermeBarroso-sys/EFinances-FRONT/blob/master/README.md <br>
 
    
Atenciosamente <br>
Guilherme
