const express = require('express');
const cors = require('cors');
const path = require('path');

require('./database');

const port = process.env.PORT || 2020;
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'files')));

app.use('/files', require('./routes/files'));
app.use('/login', require('./routes/login'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
