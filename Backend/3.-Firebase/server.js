const firebase = require("firebase-admin");

const serviceAcount = require("./serviceAcount.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAcount),
    // databaseURL:
})

const db = firebase.database();

const ref = db.ref("/");
const userRef = db.ref("/users");

ref.on("value", (snapshot) => {
    console.log(snapshot.val());
});


ref.child("articles").set({
    0: "art1",
    1: "art2",
    2: "art3"
});


userRef.child("Jorge").set({
    name: "Jorge",
    email: "jorge@jorgito.es"
}, (error) => {
    if (error)
        console.log("Ha habido un error", error);
    else
        console.log("Se ha establecido el valor de jorge");
});


userRef.push({
    name: "Margarita",
    email: "margarita@rita.es"
});

userRef.child("Jorge").update({
    email: "jorge@jorge.com"
});

userRef.transaction(users => {
    console.log("users:", users);
    return {...users, pepitoElEspecialito: {
        name: "Pepito el especialito"
    }}
});

userRef.child("Jorge").remove();


// userRef.once(snapshot => {
//     console.log(snapshot.val());
// }, () => {
//     console.log("We have data");
// }, (error) => {
//     console.log("We have an error", error)
// });

userRef.orderByChild("name").startAt(3).limitToFirst(3).once("value", snapshot => {
    console.log(snapshot.val());
}, (error) => {
    console.log("We have an error", error)
});