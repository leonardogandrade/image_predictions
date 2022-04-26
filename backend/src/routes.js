const express = require('express');
const routes = express.Router();

// Controllers importing
const mlController = require('./controller/ml-controller');

// Endpoints
routes.get('/object-detection/:filename', mlController.objectDetection)

module.exports = routes;