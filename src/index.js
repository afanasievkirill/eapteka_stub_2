const express = require("express");

const app = express();

app.get("/test", (req, res) => {
    res.send("Our api server is working correctly");
});

app.post('/orders', (req, res) => {
    return res.status(200).send('')
})

app.post('/invoice', (req, res) => {
    return res.status(200).json(req.body)
})

app.listen(3000, () => {
    console.log("Started api service");
});