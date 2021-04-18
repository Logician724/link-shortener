require('dotenv').config();
require('./api/config/db');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const linkRouter = require('./api/links.router');

app.use(helmet());
app.use(express.json());
app.use(cors());


app.use('/api/short',linkRouter);

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

module.exports = app;
