const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const fileSystem = require('./fileSystem.json');
server.use(express.json());
server.use(cors());

// File system
server.use('/upload', express.static(path.resolve(fileSystem.upload)));

// Routes
server.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3001);