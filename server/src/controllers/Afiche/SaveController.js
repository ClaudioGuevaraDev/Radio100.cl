const path = require('path');
const fs = require('fs');

/* Listar los afiches que se guardan */
const listarAfichesGuardados = (req, res) => {
    const directorio = path.join(__dirname, '../../files/afiche/save');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
};

const recuperarAfiche = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/afiche/save/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/afiche/show/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al recuperar el archivo");
            res.json(false);
        }
    });

    res.json(true);
}

const eliminarAficheGuardado = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/afiche/save/' + archivo);

    fs.unlinkSync(ruta);
}

module.exports = {
    listarAfichesGuardados,
    recuperarAfiche,
    eliminarAficheGuardado
}