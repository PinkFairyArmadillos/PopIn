const express = require('express');
const path = require('path');

const app = express();
const apiRouter = require('./routes/api.js');
const authRouter = require('./routes/auth.js');

const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build/')));

app.use('/api', apiRouter);

app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html')));
app.get('/home', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html')));
