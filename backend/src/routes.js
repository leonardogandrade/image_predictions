const express = require('express');
const routes = express.Router();

// Controllers importing
const greetController = require('./controller/greet-controller');
const mlController = require('./controller/ml-controller');

// Endpoints
routes.get('/', greetController.greet);
routes.get('/object-detection', mlController.objectDetection)

module.exports = routes;