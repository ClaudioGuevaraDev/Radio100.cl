const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* Subir la imagen de la portada */
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../../files/portada/show'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskStorage
}).single('file');

/* Listar las imagenes que se muestran */
const listarImagenesPortadaShow = (req, res) => {
    const directorio = path.join(__dirname, '../../files/portada/show');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
};

/* Guardar imagenes de la portada */
const guardarImagenPortada = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/portada/show/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/portada/save/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al guardar el archivo");
            res.json(false);
        }
    });

    res.json(true);
};

const eliminarImagenPortadaShow = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/portada/show/' + archivo);

    fs.unlinkSync(ruta);
};

module.exports = {
    fileUpload,
    listarImagenesPortadaShow,
    guardarImagenPortada,
    eliminarImagenPortadaShow
}