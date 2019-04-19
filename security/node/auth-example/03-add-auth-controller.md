# Create Auth Controller

## Introduction

This document details how to create a basic NodeJS auth server from scratch.

---

## Instructions

```
npm run dev
```

```
docker logs -f --tail all mongodb

```

```
docker exec -it mongodb mongo
    show dbs;
    use auth;
    show collections;
    db.users.find();
    db.users.remove({ "_id" : ObjectId("5cad231be31f022ca1b659c9")});
```

```
curl -v  -X POST localhost:3090/signup -d '{ "email": "test@exmaple.com", "password": "wibble" }'
```

```
npm install --save bcrypt-nodejs
```

---

## Encrypt password with `bcrypt-nodejs`

```
npm install --save jwt-simple
```

* Create a `salt`.

* Create a password.


---

## `JWT Token`

* Create a `JWT Token` and return it on successful login.


```
npm install --save jwt-simple
```

```
npm install --save passport passport-jwt
```


https://jwt.io/

https://auth0.com/blog/authentication-in-golang/


---

## Passport

* `passport`

* `passport strategies` provide various ways if performing authentication: `http-basic`, `cookie`, `jwt`, `google oauth`, etc.


---

## Example

```bash

$> curl -v  -X POST localhost:3090/signup -d '{ "email": "test6@exmaple.com", "password": "wibble" }'
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3090 (#0)
> POST /signup HTTP/1.1
> Host: localhost:3090
> User-Agent: curl/7.61.0
> Accept: */*
> Content-Length: 54
> Content-Type: application/x-www-form-urlencoded
> 
* upload completely sent off: 54 out of 54 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 165
< ETag: W/"a5-pBaH566gsx6obbKX1GXwivtWI14"
< Date: Wed, 10 Apr 2019 06:49:44 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ4Nzg5ODQ2Mjd9.3zVFURW5XWxV6PBZ-Z33tflq2EfZtieJbaeXw3TGCe8"}509 temple@occam:~/Work/dev/tc-playground/web-playground
$> curl -v get localhost:3090/
* Rebuilt URL to: get/
* Could not resolve host: get
* Closing connection 0
curl: (6) Could not resolve host: get
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3090 (#1)
> GET / HTTP/1.1
> Host: localhost:3090
> User-Agent: curl/7.61.0
> Accept: */*
> 
< HTTP/1.1 401 Unauthorized
< X-Powered-By: Express
< Date: Wed, 10 Apr 2019 07:51:04 GMT
< Connection: keep-alive
< Content-Length: 12
< 
* Connection #1 to host localhost left intact
Unauthorized


$> curl -v get localhost:3090/ -H "authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ4Nzg5ODQ2Mjd9.3zVFURW5XWxV6PBZ-Z33tflq2EfZtieJbaeXw3TGCe8"
* Rebuilt URL to: get/
* Could not resolve host: get
* Closing connection 0
curl: (6) Could not resolve host: get
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3090 (#1)
> GET / HTTP/1.1
> Host: localhost:3090
> User-Agent: curl/7.61.0
> Accept: */*
> authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ4Nzg5ODQ2Mjd9.3zVFURW5XWxV6PBZ-Z33tflq2EfZtieJbaeXw3TGCe8
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 20
< ETag: W/"14-yq/NdSX7NmkXtFztQ/UfU6zgn2E"
< Date: Wed, 10 Apr 2019 07:54:15 GMT
< Connection: keep-alive
< 
* Connection #1 to host localhost left intact
Application running!
```


========================

sign in route


```
npm install --save passport-local
```

```
$> curl -v  -X POST localhost:3090/signin -d '{ "email": "test6@exmaple.com", "password": "wibble" }'

Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3090 (#0)
> POST /signin HTTP/1.1
> Host: localhost:3090
> User-Agent: curl/7.61.0
> Accept: */*
> Content-Length: 54
> Content-Type: application/x-www-form-urlencoded
> 
* upload completely sent off: 54 out of 54 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 164
< ETag: W/"a4-z/A8iRhBMQZnfiNRfxU4W6aztXs"
< Date: Wed, 10 Apr 2019 20:16:58 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"toke":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ5Mjc0MTg1NTh9.RvJol32B0kOW5RDa5vyr9wW5_GbIj1-0cXddqqcBg-E"}

$> curl -v get localhost:3090/ -H "authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ5Mjc0MTg1NTh9.RvJol32B0kOW5RDa5vyr9wW5_GbIj1-0cXddqqcBg-E"

* Rebuilt URL to: get/
* Could not resolve host: get
* Closing connection 0
curl: (6) Could not resolve host: get
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3090 (#1)
> GET / HTTP/1.1
> Host: localhost:3090
> User-Agent: curl/7.61.0
> Accept: */*
> authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2FkOTIwODc2ZTRmMjU3OTQ1NTFmMTgiLCJpYXQiOjE1NTQ5Mjc0MTg1NTh9.RvJol32B0kOW5RDa5vyr9wW5_GbIj1-0cXddqqcBg-E
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 20
< ETag: W/"14-yq/NdSX7NmkXtFztQ/UfU6zgn2E"
< Date: Wed, 10 Apr 2019 20:18:48 GMT
< Connection: keep-alive
< 
* Connection #1 to host localhost left intact
Application running!

```