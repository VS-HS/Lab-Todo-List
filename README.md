# Lab-Todo-Lists

[![Swagger](https://img.shields.io/badge/Swagger-3.0.3-green)](https://swagger.io/)
[![NestJS](https://img.shields.io/badge/NestJS-7.6.15-red)](https://nestjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.2.32-blue)](https://typeorm.io/#/)
[![MariaDB](https://img.shields.io/badge/MariaDB-10.5.8-blue)](https://mariadb.org/)
[![Docker](https://img.shields.io/badge/Docker-20.10.5-blue)](https://www.docker.com/)
[![NPM](https://img.shields.io/badge/NPM-6.14.11-green)](https://www.npmjs.com/)
[![Docker Image CI](https://github.com/VS-HS/Lab-Todo-List/actions/workflows/docker-image.yml/badge.svg)](https://github.com/VS-HS/Lab-Todo-List/actions/workflows/docker-image.yml)


# Description

Todo list backend with **NestJS** and **MariaDB**

by **Daniel Lastanao** and **Enrique Subías**


# Installation

1. Clone the repository to your local machine

```bash
git clone https://github.com/VS-HS/Lab-Todo-List.git
```

2. Compose up the docker container with the database

```bash
docker compose -f "docker-compose.yml" up -d --build
```

There are 2 docker containers, one for the database and another for the backend.

## Database container

| Name                     | Value           |
|--------------------------|-----------------|
| Port (on local machine): | `3301`          |
| Port (on container):     | `3306`          |
| User:                    | `user`          |
| Password:                | `1234`          |
| Database:                | `todo_database` |

This characteristics We can see them in the "docker-compose.yml" as we see below:

We map the ports (This links the port 3001 of your local machine with the 3306 of the container):
```yaml
    ports:
    - 3001:3306
```
Here We define the user and password with which We can enter in the database:
```yaml
    MARIADB_USER: 'user'
    MARIADB_PASSWORD: '1234'
```
We specify the name of the database:
```yaml
  MARIADB_DATABASE: 'todo_database'
```
The image that We use and volume Where is being mounted is in the mariadb-data directory of the container with path '/var/lib/mysql' :
```yaml
database:
    image: mariadb:10.9
    volumes:
        - ./mariadb-data:/var/lib/mysql
```


## Backend container

| Name                     | Value  |
|--------------------------|--------|
| Port (on local machine): | `8080` |
| Port (on container):     | `8080` |

We map the ports (This links the port 3001 of your local machine with the 3306 of the container):
```yaml
    ports:
    - 8080:8080
```
All this TYPEORM_*** are variables of a "app.module.ts" file. This "ORM" it is a library that allows for 
the manipulation of a database. It also allows for the injection of a database connection through the use of "InjectRepository"
Here are the definitions of the variables like Hostname, port, URL of where is the database connection, username and password of the database:
```yaml
- TYPEORM_HOST=database
- TYPEORM_PORT=3306
- TYPEORM_URL=jdbc:mariadb://database:3306/todo_database
- TYPEORM_USERNAME=user
- TYPEORM_PASSWORD=1234
```
It ensures that the database service is up and running before starting the current service:
```yaml
depends_on:
- database
```

And finally we have the lines where We define the path to the directory on the host machine that contains the files that will be used to build the image 
and the name of the Dockerfile to use, that should be in context.
```yaml
- build:
  context: ./backend-todo-daniel-enrique
  dockerfile: Dockerfile
```

Backend Swagger Documentation available at:

## <img src="static/swagger.svg" width="20" alt="Swagger"> [http://localhost:8080/api](http://localhost:8080/api)