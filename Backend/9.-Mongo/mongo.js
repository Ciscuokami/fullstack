const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url,{useUnifiedTopology:true},(err, db) => {
    if(err) throw err;
    let dbo = db.db("MiBaseDeDatos");
    let misDocumentos = [
        {"nombre": "Juez Dredd"},
        {"nombre": "Matrix"},
        {"nombre": "Solo en casa"}
    ];
    dbo.collection("Pelis90").insertMany(misDocumentos, (err, res) => {
        if(err) throw err;
        console.log("Documentos Insertados" + res.insertedCount);
        db.close();
    });
});