const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
let bdTmp = [];

app.use(cors());
app.use(express.static('public'));
app.use(express.json());


function generateObject(id, object) {

    let data = {
        id: id,
        nombre: object.nombre,
        paterno: object.paterno,
        materno: object.materno,
        nacimiento: object.nacimiento,
        genero: object.genero,
        nacionalidad: object.nacionalidad,
        club: object.club,
        ocupacion: object.ocupacion,
        rfc: object.rfc,
        calle: object.calle,
        colonia: object.colonia,
        cp: object.cp,
        esMayor: object.esMayor,
    }

    return data;
}

app.get('/getData/:option/:value', function(req, res) {
    console.log(req);
    const option = req.params.option;
    const value = req.params.value;
    console.log("bdTmp:", bdTmp)
    let dataEncontrada;
    if (parseInt(option) === 1) {
        dataEncontrada = bdTmp.find((item) => (item.id).toString() === value.toString());
        console.log(dataEncontrada);
    } else {
        dataEncontrada = bdTmp.find((item) => (item.nombre.toUpperCase() === value.toUpperCase()));
        console.log(dataEncontrada);
    }

    if (dataEncontrada) {
        res.send(JSON.stringify(dataEncontrada));
    } else {
        res.send(JSON.stringify({
            "error": "0001",
            "message": "Persona no encontrada"
        }));
    }




});

app.post('/saveData', function(req, res) {
    console.log(req.body);
    const newId = uuidv4();
    let item = generateObject(newId, req.body);
    bdTmp.push(item);
    console.log("BDTEMP====", bdTmp)
    res.send(JSON.stringify({ 'success': 'ok' }));
})







app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});




app.listen('2590', (req, res) => {
    console.log("Servidor corriendo...")
});