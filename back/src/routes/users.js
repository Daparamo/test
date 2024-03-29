const express = require('express');
const router = express.Router();
var cors = require('cors');
const mysql_connection = require('../database');

// Get  All Users
router.get('/', (req, res) => {
    mysql_connection.query('select id, Nombre, Apellido, Email, Direccion, Compania from users', (err, rows, fields) => {
        if (!err) {
            cors(res.json(rows));
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

// Create User
router.post('/', (req, res) => {
    const { Nombre, Apellido, Email, Direccion, Compania } = req.body;

    mysql_connection.query("insert into users(Nombre, Apellido, Email, Direccion, Compania) values (?,?,?,?,?)", [Nombre, Apellido, Email, Direccion, Compania], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved' });
        } else {
            console.log(err)
        }
    })
});

// Update User
router.put('/:id', (req, res) => {
    console.log(req)
    const { id } = req.params
    const { Nombre, Apellido, Email, Direccion, Compania } = req.body;

    mysql_connection.query("update users set Nombre=?, Apellido=?, Email=?, Direccion=?, Compania=? where id=? ", [Nombre, Apellido, Email, Direccion, Compania, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved' });
        } else {
            console.log(err)
        }
    })
});

// Delete User
router.delete('/:id', (req, res) => {
    console.log(req)
    const { id } = req.params
    mysql_connection.query("delete from users where id=? ", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User deleted' });
        } else {
            console.log(err)
        }
    })
});



module.exports = router;