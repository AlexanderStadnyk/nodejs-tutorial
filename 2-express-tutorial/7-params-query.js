const express = require('express')
const app = express()
const { products } = require("./data")

app.get("/", (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((products) => {
        const { id, name, image } = products
        return { id, name, image }
    })

    res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params

    const singleProduct = products.find((product) => {
        return product.id === Number(productID)
    })

    if (!singleProduct) {
        return res.status(404).send("Product doesn't exist")
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("Hello")
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.find((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (!sortedProducts) {
        //res.status(200).send('no products matched your search')
        return res.status(200).json({ success: true, data: [] })
    }

    return res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})