const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// set up express server

const app = express();

const puerto = process.env.PORT;

app.listen(process.env.PORT || 4000, () => console.log('listening on port', process.env.PORT || 4000));