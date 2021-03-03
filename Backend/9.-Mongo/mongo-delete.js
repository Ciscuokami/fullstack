const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

//? Borrar el primer valor coincidente (borra todas con deleteMany)

// MongoClient.connect(url, (err, db)=> {
//     if(err) throw err;
//     const dbo = db.db("my_Fake_DB");
//     const query = {"nombre": "Francisco"}; // Si le paso {}, borra todo
//     dbo.collection("movies").deleteOne(query, (err, res) => {
//         if(err) throw err;
//         dbo.collection("movies").find({}).toArray((err, result)=>{
//             console.log(result);
//         });
//         db.close();
//     });
// });


//? Borrar coleccion

MongoClient.connect(url, (err, db)=> {
    if(err) throw err;
    const dbo = db.db("my_Fake_DB");
    const query = {};
    dbo.dropCollection("movies", (err, delOK) => {
        if(err) throw err;
            console.log(delOK);
            console.log(dbo);
        db.close();
    });
});