const express = require("express")
const pino = require('pino')
const expressPino = require('express-pino-logger')

const logger = pino({level: process.env.LOG_LEVEL || 'info'})
const expressLogger = expressPino({logger})

const app = express()

app.use(express.json())
app.use(expressLogger)

app.use('/partners_api_2/invoice', require('./routes/api/partners/2_0/invoice'))
app.use('/partners_api_2/order_status', require('./routes/api/partners/2_0/status'))

app.get("/test", (req, res) => {
    res.send("Our api server is working correctly")
});

app.listen(3000, () => {
    console.log("Started api service")
});