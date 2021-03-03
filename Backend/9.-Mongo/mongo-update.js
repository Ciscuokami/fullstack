const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//? Cambiar valores con updateOne

// MongoClient.connect(url, (err, db)=> {
//     if(err) throw err;
//     const dbo = db.db("my_Fake_DB");
//     // const nuevoValor = { $set: {"nombre": "Rocky IV"}};
//     dbo.collection("movies").updateOne({_id: 6}, {"nombre": "Rocky IV", "year": 1989}, (err, res) => {
//         if(err) throw err;
//         dbo.collection("movies").find({}).toArray((err, result)=>{
//             console.log(result);
//         });
//     });
// });

//? Cambiar valores con updateMany

MongoClient.connect(url, (err, db)=> {
    if(err) throw err;
    const dbo = db.db("my_Fake_DB");
    const nuevoValor = {$set: {"nombre": "Francisco"}};
    const query = {"nombre": "Paco"};
    dbo.collection("movies").updateMany(query, nuevoValor, (err, res) => {
        if(err) throw err;
        dbo.collection("movies").find({}).toArray((err, result)=>{
            console.log(result);
        });
    });
});