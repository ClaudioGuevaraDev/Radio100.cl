const multer = require('multer');
const path = require('path');
const fs = require('fs');

/* Subir la imagen de la portada */
const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../../files/afiche/show'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskStorage
}).single('file');

/* Listar los afiches que se muestran */
const listarImagenesAfichesShow = (req, res) => {
    const directorio = path.join(__dirname, '../../files/afiche/show');
    const imagenesPortadaShow = fs.readdirSync(directorio);

    res.json(imagenesPortadaShow);
} 

/* Guardar afiche */
const guardarAfiche = (req, res) => {
    const archivo = req.body.archivo;

    const ruta_anterior = path.join(__dirname, '../../files/afiche/show/' + archivo);
    const nueva_ruta = path.join(__dirname, '../../files/afiche/save/' + archivo);

    fs.rename(ruta_anterior, nueva_ruta, (err) => {
        if (err) {
            console.log("Error al guardar el archivo");
            res.json(false);
        }
    });

    res.json(true);
};

const eliminarAficheShow = (req, res) => {
    const archivo = req.body.archivo;
    const ruta = path.join(__dirname, '../../files/afiche/show/' + archivo);

    fs.unlinkSync(ruta);
};

module.exports = {
    fileUpload,
    listarImagenesAfichesShow,
    guardarAfiche,
    eliminarAficheShow
}