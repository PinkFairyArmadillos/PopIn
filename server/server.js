const express = require('express');
const path = require('path');

const app = express();
const apiRouter = require('./routes/api.js');
const authRouter = require('./routes/auth.js');

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html')));

app.use('/api', apiRouter);

app.use('/auth', authRouter);

app.get('/home', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
