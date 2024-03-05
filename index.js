const StockController = require('./controller/StockController')
const RequestController = require('./controller/RequestController')

const cheerio = require("cheerio")
const axios = require("axios")

        
const express = require('express')
const app = express()
const port = 3000

app.get('/stock/:id', async (req, res) => {
    const Possibility = RequestController.checkPossibility()
    if (Possibility[0] == true) {
        const json = await StockController.get(req.params.id)
        res.send(json)
    } else {
        res.send({title: "API Cooldown", cooldown: Possibility[1], message: `Wait ${Possibility[1]/1000} seconds before making a new API call`})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})