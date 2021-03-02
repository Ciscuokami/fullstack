const body = document.querySelector("body");

function pedirCita() {
    const divForm = document.createElement("div");
    const formulario = document.createElement("form");
    const labelNombreCita = document.createElement("label");
    const inputNombreCita = document.createElement("input");
    const labelCita = document.createElement("labe");
    const inputCita = document.createElement("input");
    const btnCita = document.createElement("button");

    divForm.id = "divForm";
    formulario.id = "formulario";
    btnCita.id= "btnCita";

    labelNombreCita.innerText = "Nombre";
    inputNombreCita.innerText = "Introduce un nombre";
    labelCita.innerText = "Cita";
    inputCita.innerText = "Introduce una cita";
    btnCita.innerText = "Guardar Cita";

    formulario.appendChild(labelNombreCita);
    formulario.appendChild(inputNombreCita);
    formulario.appendChild(labelCita);
    formulario.appendChild(inputCita);
    formulario.appendChild(btnCita);
    divForm.appendChild(formulario);
    body.appendChild(divForm);
}

pedirCita();


// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017";

// MongoClient.connect(url,{useUnifiedTopology:true},(err, db) => {
//     if(err) throw err;
//     let dbo = db.db("MiBaseDeDatos");
//     let misDocumentos = [
//         {"nombre": "Juez Dredd"},
//         {"nombre": "Matrix"},
//         {"nombre": "Solo en casa"}
//     ];
//     dbo.collection("Pelis90").insertMany(misDocumentos, (err, res) => {
//         if(err) throw err;
//         console.log("Documentos Insertados" + res.insertedCount);
//         db.close();
//     });
// });