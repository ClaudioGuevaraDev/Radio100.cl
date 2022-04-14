const path = require('path');
const fs = require('fs');

/* Listar las imagenes que se guardan */
const listarImagenesPortadaSave = (req, res) => {
    const directorio = path.join(__dirname, '../../files/portada/save');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
};

const recuperarImagenPortadaSave = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/portada/save/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/portada/show/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al recuperar el archivo");
            res.json(false);
        }
    });

    res.json(true);
}

const eliminarImagenPortadaSave = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/portada/save/' + archivo);

    fs.unlinkSync(ruta);
}

module.exports = {
    listarImagenesPortadaSave,
    recuperarImagenPortadaSave,
    eliminarImagenPortadaSave
}