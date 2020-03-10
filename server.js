const express = require('express')
const app = express()
const hbs = require ('hbs');
require('./hbs/helpers');

const port =process.env.PORT || 3000;

app.use (express.static(__dirname+'/public'))
//Express hbs
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
     
        res.render("home.hbs",{
            nombre:"andrea vazquez"
        });
    });
    app.get('/about', function (req, res) {
     
        res.render("about");
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



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
    
})