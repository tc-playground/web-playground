// NB: This project uses 'require' module syntax instead of ES6 'import/export' syntax.
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./router');

// App Setup
//
const app = express();
// Express middleware
app.use(morgan('combined')); // Logging HTTP requests.
app.use(bodyParser.json({ type: '*/*' })); // Parse incoming requests into JSON.
// Configure routes
router(app);

// DB Setup
//
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017:auth/auth', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });

// Server Setup
//
const port = (process.env.PORT = '3090');
const server = http.createServer(app);

server.listen(port);
console.log('Started server on:', port);
