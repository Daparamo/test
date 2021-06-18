const express = require('express');
const router = express.Router();
const mysql_connection = require('../database');

// Get  All Users
router.get('/', (req, res) => {
    mysql_connection.query('select id, Nombre, Apellido, Email, Direccion, Compania from users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    })
});

// Get User by Id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    mysql_connection.query('select id, Nombre, Apellido, Email, Direccion, Compania from users where id=?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err)
        }
    })
});

router.post('/', (req, res) => {
    const { Nombre, Apellido, Email, Direccion, Compania } = req.body;
    //const query = `insert into users(Nombre, Apellido, Email, Direccion, Compania) values (?,?,?,?,?)`,

    //console.log(_obj.Nombre, _obj.Apellido, _obj.Email, _obj.Direccion, _obj.Compania)
    mysql_connection.query("insert into users(Nombre, Apellido, Email, Direccion, Compania) values (?,?,?,?,?)", [Nombre, Apellido, Email, Direccion, Compania], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved' });
        } else {
            console.log(err)
        }
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { Nombre, Apellido, Email, Direccion, Compania } = req.body;
    //const query = `insert into users(Nombre, Apellido, Email, Direccion, Compania) values (?,?,?,?,?)`,

    //console.log(_obj.Nombre, _obj.Apellido, _obj.Email, _obj.Direccion, _obj.Compania)
    mysql_connection.query("update users set Nombre=?, Apellido=?, Email=?, Direccion=?, Compania=? where id=? ", [Nombre, Apellido, Email, Direccion, Compania, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved' });
        } else {
            console.log(err)
        }
    })
});


module.exports = router;