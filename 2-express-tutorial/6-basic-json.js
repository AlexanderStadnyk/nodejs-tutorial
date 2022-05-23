const express = require('express')
const app = express()
const {products} = require("./2-express-tutorial/data")

app.get("/", (req, res) => {
    res.json(products)
})

app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})