# Streams Project

## Libraries

```
npm install --save react-router-dom
```

### Webpack Environment Variables
```
npm install --save-dev dotenv
```
---

## `json-server` set-up

1. Create new `api` project folder.

2. Initialise a new project: `npm init`.

3. Install __json-server__: `npm install --save json-server`

4. Create a new `json.db` database file:

    ```json
    {
        "thingies": [ "thingie_01", "thingie_02"]
    }
    ```

5. Update `package.json` to include a new `script` to start up the `json-server` and watch the `json.db` file.

    ```json
    {
        ...
        "scripts": {
            "start": "json-server -p 3001 -w db.json",
        },
        ...
    }
    ```


---

## References

* [Grider  - React Router](https://www.udemy.com/react-redux/learn/v4/t/lecture/12700531?start=0)