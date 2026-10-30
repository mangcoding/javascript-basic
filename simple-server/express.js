const express = require('express');
const { home, contact, students } = require("./content.js");
const app = express();
const port = 8009;

app.get('/', (req,res) => {
    res.send(home());
});

app.get('/contact', (req,res) => {
    res.send(contact());
});

app.get('/json', (req,res)=> {
    res.json(students);
})

const server = app.listen(port, ()=> {
    console.log(`Server is running under 127.0.0.1:${port}`)
})
