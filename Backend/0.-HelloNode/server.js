// require() //Importar código desde otro fichero
// module.exports // Exportar código desde este fichero

//Nodejs Vanilla
const http = require("http");
const url = require("url");
const testFunction = require("./test.js");
testFunction();

// // Variables de configuración
// const hostname = "127.0.0.1";
// const port = 8080;

// req = request
// res = response
const server = http.createServer((req, res) => {
    if (req.url === "/data" && req.method === "GET") {
        res.setHeader("Content-Type", "Application/json");
        res.end(JSON.stringify({data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}));
    }
    else if (req.url === "/data2" && req.method === "GET") {
        res.setHeader("Content-Type", "Application/json");
        res.end(JSON.stringify({data: []}));
    }
    else {
        req.statusCode = 404;
        res.end("404");
    }
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})