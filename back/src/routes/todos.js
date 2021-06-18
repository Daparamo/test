const express = require('express');
const http = require('http');
const router = express.Router();


router.get('/todos/:id', (req, res) => {
    const { id } = req.params;
    let url = "http://jsonplaceholder.typicode.com/todos?userId=" + id;
    http.get(url, response => {
        let data = [];
        response.on('data', chunk => {
            data.push(chunk);
        });

        response.on('end', () => {
            const users = JSON.parse(Buffer.concat(data).toString());
            res.json(users)
        });
    }).on('error', err => {
        res.json({ error: "no pudimos consultar la informaicon" })
        console.log('Error: ', err.message);
    });

});

module.exports = router;