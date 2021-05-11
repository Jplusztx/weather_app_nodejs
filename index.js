const express = require('express');

const app = express();

app.use(require('./router/index'));

app.listen(8888, () => console.log('http://localhost:8888'));