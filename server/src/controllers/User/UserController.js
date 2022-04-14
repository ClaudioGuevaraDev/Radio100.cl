const bcryptjs = require('bcryptjs');

const UserModel = require('../../models/UserModel');

const InsertarUsuario = (req, res) => {
    const username = "admin01";
    const pass = "jaimeadminRadio100.cl";
    const password = bcryptjs.hashSync(pass, 8);

    const newUsuario = new UserModel({username, password});
    newUsuario.save();
}

const buscarUsuarioDB = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userFind = await UserModel.find({username: username});

    if(userFind.length > 0) {
        const pass = userFind[0]["password"];
        const userConfirm = bcryptjs.compareSync(password, pass);

        if(userConfirm) {
            res.json(true);
        } else {
            res.json(false);
        }
    } else {
        res.json("Usuario no encontrado");
    }
}

module.exports = {
    InsertarUsuario,
    buscarUsuarioDB
}