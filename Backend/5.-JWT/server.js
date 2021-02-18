const express = require("express");
const base64 = require("base-64");
const crypto = requirte("crypto");

const server = express();
const PORT = 8080;
const SECRET = crypto.randomBytes(32).toString("hex");
// const SECRET = "";

// Hashing SHA256
function hashString(string) {
    const hashedString = crypto.createHmac("sha256", SECRET);
}

// Base 64 url
function encodeBase64(string) {
    const encodeString = base64.encode(string);
    const base64String = encodeString.replace(/=/g, "").replace(/\+/g, "-").replace(/\+/g, "_");

    return base64String;
}

function decodeBase64(base64String) {
    const decodedString = base64.decode(base64String);

    return decodedString;
}

// JWT functions

function generateJWT(payload) {
    const Header = {
        "alg": "HS256",
        "typ": "JWT"
    }
    const encodedHeader = encodeBase64(JSON.stringify(Header));
    const encodedPayload = encodeBase64(JSON.stringify(payload));
    const signature = encodeBase64(hashString(`${encodedHeader}.${encodedPayload}`));
    console.log((`${encodedHeader}.${encodedPayload}`))
}

server.get("/", (req, res) => {
    generateJWT({
        username: "Miguel"
    })
    res.send("Todo en orden");
});

server.listen(PORT, ()=> console.log("http://localhost:" + PORT));