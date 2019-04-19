# CORS (Cross Origin Resource Sharing)

## Introduction

* `CORS` is a security feature implemented inside all browsers. It is initiated and managed by the browser.

* `CORS` is a `browser implemented` security precaution. 

* `CORS` is intended to protect against attacks that host similar looking (malicious) sites hosted on a different domain.

* `CORS` by default checks the current `web-page domain`, `sub-domain`, or `port` (of the website) when making a request to the `target domain`. If they are different the browser get suspicious!

    * The browser will then asks the `target domain` API if it is OK to handles requests from the `current web-page domain`. 
    
        > NB: The browser does this itself with a `pre-flight request` POST call.

    * The `target domain` API server checks to see if this might be risky. For example, it might have a whitelist of `domains/sub-domains/ports` that are valid. It returns ok (`204`) to allow requests from the `web-page domain`. By default most servers _DENY ACCESS_ (to be on the safe side).

    * If a `token` is not provided, the browser will report a `CORS` error.

---

## CORS - NodeJS / Express

* `CORS` can be easily configured as `middleware` for most webservers:

    1. Install

        ```bash
        npm install --save cors
        ```

    2. Wire-up to Express middleware.

        ```javascript
        const cors = require('cors');

        const app = express();
        // Express middleware
        // Use cors.
        app.use(cors());
        ```

    > NB: This provides global acceptance. `CORS` can be configured down to `domain`, `subdomain`, and `port` restrictions if required.

