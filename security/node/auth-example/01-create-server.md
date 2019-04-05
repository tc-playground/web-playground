# Create Server

## Introduction

This document details how to create a basic NodeJS auth server from scratch.

---

## Instructions

1. Initialise a node project `package.json` file. Fill in values as appropriate.

    ```
    npm init
    ```

2. Install base dependencies:

    ```
    npm install --save express mongoose morgan body-parser
    ```

    * `express` is a simple `node.js` webserver.

    * `mongoose` is a client library for `MongoDB`.

    * `morgan` is a HTTP request logger middleware for `node.js`.

    * `body-parser` is `node.js` HTTP body parsing middleware.


3. Create a base `.gitignore` file in the root. Ignore `node_module` and any other files we do not wish to check in.

    ```
    node_modules
    ```

4. Create a base `index.js` file in the root.

    ```javascript
    // NB: This project uses 'require' module syntax instead of ES6 'import/export' syntax.
    const express = require("express");
    const http = require("http");
    const bodyParser = require("body-parser");
    const morgan = require("morgan");

    const router = require("./router");

    // App Setup
    //
    const app = express();
    // Express middleware
    app.use(morgan("combined")); // Logging HTTP requests.
    app.use(bodyParser.json({ type: "*/*" })); // Parse incoming requests into JSON.
    // Configure routes
    router(app);

    // Server Setup
    //
    const port = (process.env.PORT = "3090");
    const server = http.createServer(app);

    server.listen(port);
    console.log("Started server on:", port);
    ```

5. Create basic `routes.js` file in the root.

    ```javascript
    module.exports = function(app) {
        // req:  The incoming request.
        // res:  The outgoing response.
        // next: Error handling.
        app.get('/', function(req, res, next) {
            res.send("Application running...");
        });
    }    
    ```

6. Start up the server.

    ```bash
    node index.js
    ```

7. Install and configure `nodemon` to watch the filesystem and restart the server when files change:

    * Install `nodemon` is a utility

        ```
        npm install --save nodemon
        ```
    
    * In `package.json` add a new `script`
    
        ```json
        "scripts": {
            "dev": "nodemon index.js"
        }
        ```

    * Run the server: `npm run dev`



