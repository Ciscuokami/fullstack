require("dotenv").config();
const express = require("express");
const methods = require("methods");
const fetch = require("node-fetch");

const GH_SECRET = process.env.GH_SECRET;
const GH_CLIENT = process.env.GH_CLIENT;

const PORT = process.env.PORT || 8080;
const server = express();

server.get("/login/github", (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${GH_CLIENT}&scope=user,user:email`);
});

server.get("/githubOauth", (req, res) => {
    console.log(req.query);
    const {code} = req.query;
    if (code) {
        fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
                "Constent-Type": "application/json",
                "Accept": "aplication/json"
            },
            body: JSON.stringify({
                "client_id": GH_CLIENT,
                "client_secret": GH_SECRET,
                code
            })
        }).then(res => res.json()).then(data => {
            console.log("Acess Token Data:", data);
            const {access_token: accessToken, token_type: tokenType}= data;
            if (access_token) {
                const Token = `${tokenType} ${access_token}`;

                fetch("http://api.github.com/user", {
                    headers: {
                        "Authorization": Token,
                        "Accept": "aplication/vnd.github.v3+json"
                    }
                }).then(res => res.json()).then(data => {
                    console.log("User Data:", data);
                res.send({"msg": "OK"});
            } else {
                res.send({"msg": "error"});
            }
        }).catch(e => console.log(e));
    } else {
        if (error === "access_denied")
            res.send({"msg": "error, you have declined the login"});
        else
            res.send({"msg": "Unknown"})
    }
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));