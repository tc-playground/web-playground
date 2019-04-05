# Create User MongoDB model

## Introduction

This document details how to create a basic NodeJS auth server from scratch.

---

## Instructions

1. Install `MongoDB` locally or via a `docker` container:

    * [MogoDB Local Installation](https://www.mongodb.com/download-center/community)

    * [MogoDB dockerhub](https://hub.docker.com/_/mongo)

        * Start local mongo:

            ```bash
            export MONGO_NAME="mongodb"
            export MONGO_VERSION="4.1.9-bionic"
            docker run -p 27017:27017 --name "${MONGO_NAME}" -d mongo:"${MONGO_VERSION}"
            # or with specified volume mount...
            # docker run --name some-mongo -v /my/own/datadir:/data/db -d mongo
            ```

        * Shell into container: `docker exec -it "${MONGO_NAME}" bash`

        * Mongo shell: `docker exec -it "${MONGO_NAME}" mongo`

        * Mongo logs: `docker logs "${MONGO_NAME}"`

2. Create a mongoose user model `./models/user.js`:

    ```javascript
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    // Define model schema
    //
    const userSchema = new Schema({
        email: { type: String, unique: true, lowercase: true },
        password: String
    });

    // Create model class
    //
    const UserClass = mongoose.model('user', userSchema);

    // Export model
    //
    module.exports = UserClass;    
    ```

3. Connect `mongoose` to the database in `./index.js` add:

    ```javascript
    // DB Setup
    //
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017:auth/auth', { useNewUrlParser: true });

    ```