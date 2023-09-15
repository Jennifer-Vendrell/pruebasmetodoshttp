const express = require('express') //importando el modulo express

const app = express()

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with GET!")
})

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with POST!")
})

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with PUT!")
})

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with PATCH!")
})

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello with DELETE!")
})
app.listen(3000, () => {console.log('listening on port 3000')})
