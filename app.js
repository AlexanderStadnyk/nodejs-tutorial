const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.send('About page')
})

app.listen(3000, () => {
    console.log("Server is listening to the port 3000...")
})