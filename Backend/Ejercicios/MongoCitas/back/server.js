const express = require("express");
const bodyParser = require("body-parser");

// Settings
const port = 3000;
const server = express();

// Middelwares

// server.use(express.static("/public"));
// server.use(express.json());
// server.use(bodyParser.json({
//     limit: '50mb',
//     type: 'application/json'
// }));

server.use(bodyParser.urlencoded({extended:true}));

/*
==========================
    ENDPOINTS
==========================
*/

// ? Endpoint Citas

server.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

server.post('/quotes', (req, res) => {
    console.log(req.body);
});

/*
==========================
    LISTEN PORT
==========================
*/

// ? Make the server listen

server.listen(port, () => {
	console.log(`Server up and running on http://localhost:${port}`);
});