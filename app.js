const express = require('express');

const app = express();

const PORT = 8080;

//Sintaxis básicas de las rutas:
//Método HTTP
//URL: http://localhost:3000/
//Collback
//GET - '/usuario' - (req,res)=>{instrucciones}

app.get('/',(_,res)=>{
    res.send('Nuestro primer servidor!!!')
})

app.get('/hello',(_,res)=>{
    res.send('Estás en la página hello, buenas!')
})

app.get('/list',(req,res)=>{
    res.json({
        item1: 'pizza',
        item2: 'arepa',
        item3: 'quesillo'
    })
});

//Ruta con params (parámetros)

app.get('/cosas/:cosa1/:cosa2',(req,res)=>{
    //ejemplo: www.mercadolibre.com/autos/neumáticos

    res.json({
        item1: req.params.cosa1,
        item2: req.params.cosa2
    });
});

//Ruta con query (con consultas)

app.get('/usuario',(req,res)=>{
    //ejemplo: www.facebook.com/usuario?nombre=juan&edad=33&apellido=buccolini
    res.json(req.query)
})









app.listen(PORT,()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
});

