# Cookies vs Tokens

## Introduction

* `cookies`

    * Are a simple `key-value pair` mechanism to add state to the HTTP protocol.

    * Are stored in the `cookie header` of an HTTP request/response.

    * Are usually created by a server operating from a `domain`, e.g. 'google.com', and unique to that domain.
    
    * Are automatically included in the header of all requests (provided they related to the same `domain`).

    * They CANNOT be sent to different domains, e.g. 'hacker-website.com' does not receive the cookies created by 'google.com'.

* `tokens`

    * Are a simple `key-value pair` mechanism to add authorized identity tokens to the HTTP protocol.

    * Are stored in the `authorization header` of an HTTP request/response.

    * Are NOT automatically included in the header of all requests.

    * They CAN be sent to different domains,