const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//? Buscar por nombre

// MongoClient.connect(url, (err, db)=> {
//     if(err) throw err;
//     const dbo = db.db("my_Fake_DB");
//     dbo.collection("movies").find({"nombre": "Matrix"}).toArray((err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//? Buscar por coincidencia

// MongoClient.connect(url, (err, db)=> {
//     if(err) throw err;
//     const dbo = db.db("my_Fake_DB");
//     const query = {"nombre": /^Rocky/}
//     dbo.collection("movies").find(query).toArray((err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//? Buscar en orden ALfabetico

// MongoClient.connect(url, (err, db)=> {
//     if(err) throw err;
//     const dbo = db.db("my_Fake_DB");
//     const orden = {"nombre":1}; // -1 Para orden inverso
//     dbo.collection("movies").find({}).sort(orden).toArray((err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//? Ordenar por id

MongoClient.connect(url, (err, db)=> {
    if(err) throw err;
    const dbo = db.db("my_Fake_DB");
    const orden = {_id: 1}; // -1 Para orden inverso
    dbo.collection("movies").find({}).sort(orden).toArray((err, result)=>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});