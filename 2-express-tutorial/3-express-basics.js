const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(3000, () => {
    console.log("Server is listening to the port 3000...")
})