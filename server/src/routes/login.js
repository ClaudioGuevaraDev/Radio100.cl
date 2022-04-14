const express = require('express');

const router = express.Router();

const UserController = require('../controllers/User/UserController');

/* Insertar un usuario en la base de datos */
router.get('/insertar', UserController.InsertarUsuario);
/* Consultar usuario en la base de datos */
router.post('/buscar', UserController.buscarUsuarioDB);

module.exports = router;