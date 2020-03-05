const express = require('express')
const app = express()
const hbs = require ('hbs');

app.use (express.static(__dirname+'/public'))
//Express hbs
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {
     
        res.render("home.hbs",{
            nombre: 'Athziri',
            anio: new Date().getFullYear()
        });
    });

// app.get('/', function (req, res) {
//     //res.send('Hola mundo')
//     let salida = {
//         nombre: 'Athziri',
//         edad: 22,
//         url: req.url
//     }
//     res.send(salida);
// });
app.get('/data', function (req, res) {
    res.send('Hola data')
   
})

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
    
})