const StockController = require('./controller/StockController')
const RequestController = require('./controller/RequestController')
        
const express = require('express')
const app = express()
const port = 4000


app.get('/v1/stock/:id', async (req, res) => {
    const Possibility = RequestController.checkPossibility()
    if (Possibility[0] == true) {
        const json = await StockController.getAllInfo(req.params.id)
        if (json.error == 404) {
            res.send(json)
        } else {
            const json2 = await StockController.getStaticstics(req.params.id)
            res.send([json, json2])
        }
    } else {
        res.send({title: "API Cooldown", cooldown: Possibility[1], message: `Wait ${Possibility[1]/1000} seconds before making a new API call`})
    }
})

app.get('/v1/sp500', async (req, res) => {
    const json = await StockController.getIndex()
    res.send(json)
}) 

app.get('/v1/:id', async (req, res) => {
    const data = await StockController.getHistoricalData(req.params.id)

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="historical_data.csv"');
    res.send(data)
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})