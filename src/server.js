const express = require("express");

const app = express();

app.use(express.json());

app.use('/partners_api_2/orders', require('./routes/api/partners/2_0/orders'))

app.get("/test", (req, res) => {
    res.send("Our api server is working correctly");
});

app.post('/orders', (req, res) => {
    console.log(req.body)
    return res.status(200).send('')
})

app.post('/invoice', (req, res) => {
    console.log(req.body)
    return res.status(200).json(req.body)
})

app.listen(3000, () => {
    console.log("Started api service");
});