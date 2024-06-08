require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("welcome")
})

app.get('/whatsapp', (req, res) => {
    res.send("welcome to whatsapp")
})

app.get("/login", (req, res) => {
    res.send("welocme to my website")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })