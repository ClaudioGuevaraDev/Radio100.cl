const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* Subir la imagen de la portada */
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../../files/video/show'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskStorage
}).single('file');

/* Listar los videos que se muestran */
const listarVideosShow = (req, res) => {
    const directorio = path.join(__dirname, '../../files/video/show');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
} 

/* Guardar video */
const guardarVideo = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/video/show/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/video/save/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al guardar el archivo");
            res.json(false);
        }
    });

    res.json(true);
};

const eliminarVideoShow = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/video/show/' + archivo);

    fs.unlinkSync(ruta);
};

module.exports = {
    fileUpload,
    listarVideosShow,
    guardarVideo,
    eliminarVideoShow
}