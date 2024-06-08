//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";

const app = express()
const port = 80
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    let password = req.body.password
    if (password === "ILoveProgramming") res.sendFile(__dirname + "/public/secret.html")
    else res.redirect("/")
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})