# Lab-Todo-Lists

[![Swagger](https://img.shields.io/badge/Swagger-3.0.3-green)](https://swagger.io/)
[![NestJS](https://img.shields.io/badge/NestJS-7.6.15-red)](https://nestjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.2.32-blue)](https://typeorm.io/#/)
[![MariaDB](https://img.shields.io/badge/MariaDB-10.5.8-blue)](https://mariadb.org/)
[![Docker](https://img.shields.io/badge/Docker-20.10.5-blue)](https://www.docker.com/)
[![NPM](https://img.shields.io/badge/NPM-6.14.11-green)](https://www.npmjs.com/)


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

| Name                     | Value           |
|--------------------------|-----------------|
| Port (on local machine): | `3301`          |
| Port (on container):     | `3306`          |
| User:                    | `user`          |
| Password:                | `1234`          |
| Database:                | `todo_database` |


## Backend container

| Name                     | Value           |
|--------------------------|-----------------|
| Port (on local machine): | `8080`          |
| Port (on container):     | `8080`          |


Backend Swagger Documentation available at:

## <img src="static/swagger.svg" width="20" alt="Swagger"> [http://localhost:8080/api](http://localhost:8080/api)