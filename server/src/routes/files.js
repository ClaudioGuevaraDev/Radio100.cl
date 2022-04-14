const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

/* PORTADA */

/* Controladores para la portada */
const PortadaShowController = require('../controllers/Portada/ShowController');
const PortadaSaveController = require('../controllers/Portada/SaveController');

/* Rutas para la portada */
/* Guardan la imagen de la portada */
router.post('/portada/subir', PortadaShowController.fileUpload, (req, res) => {
    res.send('ok');
});
/* Listar las imagenes que se muestran */
router.get('/portada/show/listar', PortadaShowController.listarImagenesPortadaShow);
/* Listar las imagenes que se guardan */
router.get('/portada/save/listar', PortadaSaveController.listarImagenesPortadaSave);
/* Guardar imagenes */
router.post('/portada/guardar', PortadaShowController.guardarImagenPortada);
/* Volver a mostrar una imagen */
router.post('/portada/recuperar', PortadaSaveController.recuperarImagenPortadaSave);
/* Eliminar una imagen de las que se muestran */
router.post('/portada/show/eliminar', PortadaShowController.eliminarImagenPortadaShow);
/* Eliminar una imagen de las que se guardan */
router.post('/portada/save/eliminar', PortadaSaveController.eliminarImagenPortadaSave);

/* AFICHES */

/* Controladores para los afiches */
const AficheShowController = require('../controllers/Afiche/ShowController');
const AficheSaveController = require('../controllers/Afiche/SaveController');

/* Rutas para los afiches */
/* Guardar el afiche */
router.post('/afiche/subir', AficheShowController.fileUpload, (req, res) => {
    res.send('ok');
});
/* Listar los afiches que se muestran */
router.get('/afiche/show/listar', AficheShowController.listarImagenesAfichesShow);
/* Listar los afiches que estan guardados */
router.get('/afiche/save/listar', AficheSaveController.listarAfichesGuardados);
/* Guardar afiche */
router.post('/afiche/guardar', AficheShowController.guardarAfiche);
/* Recuperar afiche */
router.post('/afiche/recuperar', AficheSaveController.recuperarAfiche);
/* Eliminar un afiche de los que se muestran */
router.post('/afiche/show/eliminar', AficheShowController.eliminarAficheShow);
/* Eliminar un afiche de los que se guardan */
router.post('/afiche/save/eliminar', AficheSaveController.eliminarAficheGuardado);

/* VIDEO */

/* Controladores para los videos */
const VideoShowController = require('../controllers/Video/ShowController');
const VideoSaveController = require('../controllers/Video/SaveController');

/* Rutas para los videos */
router.post('/video/subir', VideoShowController.fileUpload, (req, res) => {
    res.send('ok');
});
/* Listar los videos que se muestran */
router.get('/video/show/listar', VideoShowController.listarVideosShow);
/* Listar los videos que estan guardados */
router.get('/video/save/listar', VideoSaveController.listarVideosGuardados);
/* Guardar afiche */
router.post('/video/guardar', VideoShowController.guardarVideo);
/* Recuperar video */
router.post('/video/recuperar', VideoSaveController.recuperarVideo);
/* Eliminar un video de los que se muestran */
router.post('/video/show/eliminar', VideoShowController.eliminarVideoShow);
/* Eliminar un video de los que se guardan */
router.post('/video/save/eliminar', VideoSaveController.eliminarVideoGuardado)

module.exports = router;