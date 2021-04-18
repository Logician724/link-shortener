require('dotenv').config();
require('./api/config/db');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const linkRouter = require('./api/links.router');
const path = require('path');
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use('/api/short',linkRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;
