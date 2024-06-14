// create web server 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// create a router
const router = express.Router();

// create a port
const port = 3000;

// create a list of comments
const comments = [
    {
        id: 1,
    } ]   