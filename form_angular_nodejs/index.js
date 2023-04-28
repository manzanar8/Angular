const express = require('express');
const cors = require('cors');
/* const { Router } = require('express');
const router = Router(); */
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//router.post('login', (req, res)=>{}); module.exports={router}

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: 'test'
});


connection.connect((err) => {
    if (err) {
        console.log("Error occurred", err);
    } else {
        console.log("Connected to MySQL Server");
    }
});

app.get('/getData', function(req, res) {
    console.log(req);

    connection.query("SELECT * FROM mascota", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

});

app.post('/saveData', function(req, res) {
    console.log(req.body);

    connection.query("SELECT MAX(id) as ide from mascota", function(err, result, fields) {
        console.log("Connected!:", result[0].ide);
        var sql = `INSERT INTO mascota (id,pet,age, address, owner_name) VALUES (${result[0].ide+1},'${req.body.name}',${req.body.edad},'${req.body.raza}','${req.body.propietario}')`;
        connection.query(sql, function(err, result) {
            console.log("1 record err:", err);
            console.log("1 record inserted:", result);
        });
    });
    res.send(JSON.stringify({ 'success': 'ok' }));
})


app.delete('/deleteData/:id', (req, res) => {
    const id = req.params.id;
    var sql = `DELETE FROM mascota WHERE id = ${id}`;

    if (id > 0) {
        connection.query(sql, function(err, result, fields) {
            console.log("1 record del_err:", err);
            console.log("1 record del_inserted:", result);
            res.send(JSON.stringify({ 'success': 'ok' }));
        });
    } else {
        res.status(404).send('Elemento no encontrado');
    }
});



app.put('/updateData/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    var sql = `UPDATE mascota SET pet='${req.body.name}',owner_name='${req.body.propietario}',age=${req.body.edad},address='${req.body.raza}'  WHERE id = ${id}`;

    if (id > 0) {
        connection.query(sql, function(err, result, fields) {
            console.log("1 record del_upd:", err);
            console.log("1 record dupfatdae:", result);
            res.send(JSON.stringify({ 'success': 'ok update' }));
        });
    } else {
        res.status(404).send('Elemento no encontrado');
    }
});



app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});




app.listen('2590', (req, res) => {
    console.log("Arriba servidor")
});