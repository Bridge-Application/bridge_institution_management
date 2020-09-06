const express = require("express");
const bodyParser = require("body-parser");
const dbconnection = require("./mongoose_connection");
const sha256 = require('crypto-js/sha256')

dbconnection();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/add/user", (req, res) => {
    res.render("user_form");
});

app.post("/add/user", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const id = req.body.id;

    //Generate unique identifier using hash function;
    //Use sha-256 hashing algorithm

    const hash = sha256(id + lname + fname);

    //Truncate to reduce output length
    const shortenHash = hash.toString().substring(0, 6);

    //Store data into institution database
    

    res.render("created_user", {
        unique: shortenHash,
        first: fname,
        last: lname,
        patientID: id,
    });
});

app.listen(port, () => {
    console.log(`Started server at port ${port}`);
});
