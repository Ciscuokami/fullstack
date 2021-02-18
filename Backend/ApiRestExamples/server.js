/*
===========================================
    Imports
===========================================
*/
const express = require("express");
const typeValidator = require("./lib/typeValidator");
const { v4: uuid}


/*
===========================================
    Settings
===========================================
*/
const server = express();
const port = 8080;

server.use(express.json());

/*
===========================================
    Data
===========================================
*/
let users = { };

/*
===========================================
    Endpoints
===========================================
*/

//Users

// ? Create user
server.post("/user", (req, res) =>{
    const {name, surname, birthday, email, password} = req.body;
    if (typeValidator.isString(name)
        && typeValidator.isString(surname)
        && typeValidator.isNumber(birthday)
        && typeValidator.isString(email)
        && typeValidator.isString(password)){
        const id = uuid()
        user[id] = {
            name,
            surname,
            birthday,
            email,
            password
        }
        res.send({"msg": `The user ${id}`, id});
    }
    else {
        res.send({"error": "One of the parameters is invalid"});

    }
});

// ? Delete user
server.delete("/user/:id", (req, res) => {
    const {id} = req.params;

    let {[id]: deletedUser, ...allUsers} = users;
    users = allUsers;
    // ! ASÍ NOOOOOO!!!
    // delete users[id];
    console.log(users);
    res.send({msg: `User ${id} deleted`});
});

// ? Modify User
server.put("user/:id", (req, res) => {
    const {id} = req.params;
    const user = users[id];
    let {name = user.name, surname = user.surname, birthday = user.birthday, email = user.email, password = user.password} = req.body;
    if (typeValidator.isString(name)
        && typeValidator.isString(surname)
        && typeValidator.isNumber(birthday)
        && typeValidator.isString(email)
        && typeValidator.isString(password)){
        user[id] = {
            name,
            surname,
            birthday,
            email,
            password
        }
        
    }
});
/*
===========================================
    Listen to port
===========================================
*/
server.listen(port, () => {
    console.log(`Listening on url: http//localhost:${port}`);
});

typeValidator.isDate(new Date("18 february 2021"));
typeValidator.isDate()