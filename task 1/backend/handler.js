const serverless = require('serverless-http');
const express = require('express');
const router = require('./routes/s3Routes');

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.use('/api', router);

exports.handler = serverless(app);
