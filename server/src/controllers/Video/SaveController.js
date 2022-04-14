const path = require('path');
const fs = require('fs');

/* Listar los afiches que se guardan */
const listarVideosGuardados = (req, res) => {
    const directorio = path.join(__dirname, '../../files/video/save');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
};

const recuperarVideo = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/video/save/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/video/show/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al recuperar el archivo");
            res.json(false);
        }
    });

    res.json(true);
}

const eliminarVideoGuardado = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/video/save/' + archivo);

    fs.unlinkSync(ruta);
}

module.exports = {
    listarVideosGuardados,
    recuperarVideo,
    eliminarVideoGuardado
}