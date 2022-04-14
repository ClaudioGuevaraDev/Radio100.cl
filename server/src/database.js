const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/radio100')
    .then(() => console.log("Base de datos conectada"))
    .catch((err) => console.log(`Error al conectar la base de datos: ${err}`));