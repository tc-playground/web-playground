# Create Auth Controller

## Introduction

This document details how to create a basic NodeJS auth server from scratch.

---

## Instructions

npm run dev

docker logs -f --tail all mongodb

docker exec -it mongodb mongo

    show dbs;
    use auth;
    show collections;
    db.users.find();

curl -v  -X POST localhost:3090/signup -d '{ "email": "test@exmaple.com", "password": "wibble" }'