const express = require("express");
const app = express();

let arr = [
    {id: 12341, name: "Shiva"},
    {id: 12342, name: "Akash"},
    {id: 12343, name: "Aman"},
    {id: 12344, name: "Prashu"},
    {id: 12345, name: "Jimit"},
    {id: 12346, name: "Kapil"}
];

app.get("/", (req, res) => {
    res.send("This is array's length = " + arr.length);
});

app.get("/about", (req, res) => {
    res.send(arr);
});

app.get("/about/:username", (req, res) => {
    let newArr = arr.find((elm) => elm.name.toLowerCase() === req.params.username.toLowerCase());
    if(newArr){
        res.send(`${req.params.username} is available in the list. This is ${req.params.username}'s Id ${newArr.id}`);
    } else{
        res.send(req.params.username + " is not available in the list.");
    };
});

app.listen(3000, () => {console.log("Server on...");});