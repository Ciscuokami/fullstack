/*
    Restfull APIs
        No guardan un estado
        Hacen uso de los metodos HTTP
*/

/*
    Nuestra Id de usuario
    El id del recurso a consultar
    Ciudad desde donde se busca
    Query de búsqueda
*/



/*
    ESTANDAR
        * Query Params (Van en la misma url tras ?)
        * Body Params (Van codificados en la petición)

        Datos no sensibles:
            Qualquier información que no nos importe que cualquiera  la pueda
            leer
        Datos sensibles:
            Aquellos datos personales y privados que tan solo el usuario y el
            servidor deberían conocer

    Los favoritos de la comunidad
        * REST Params ( Van en la url como si fuesen un endpoint )
        http://dominio.com/user/25?
*/

const express = require("express");
const bodyParser = require("body-parser");

// Set up the server settings
const port = 8080;
const server = express();

server.use(express.static("/public"));
server.use(bodyParser.json());

// Endpoints
server.get("/user", (req, res) => {
    /*
        ! En get PROHIBIDO usar body params
        Query params: ?id={id}
        Rest Params: /user/:id

        ? Si utilizas query params, recuerda validar los datos
        ? En rest params siempre estamo seguros de que recibimos los parámetros

        * Si quiero parámetros opcionales, solo puedo usar query params
    */
    const {id, name} = req.query;
    if (id && name) {
        res.send({msg: `Los datos consultados son: id=${id}, name=${name}`});
    }
    else {
        res.send({error: "No se han mandado los parámetros necesarios"})
    }
});

server.get("/userInfo/:id/:name", (req, res) => {
    const {id, name} = req.params;
    res.send({msg: `Los parámetros enviados son: id=${id}, name=${name}`});
});

server.post("/user", (req, res) => {
    const {id, languages} = req.body;
    res.send({msg: `Los parámetros enviados son id=${id}, languages=${languages}`});
})

// Make teh server listen
server.listen(port, () => {
    console.log(`Server up and running on http://localhost:${port}`);
})