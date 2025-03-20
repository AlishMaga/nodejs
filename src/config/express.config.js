const exprees = require('express');
const app = exprees();

app.get('/', (req, res)=>{
    res.end(`This is home page`)
})

app.get('/about', (req, res)=>{
    res.end(`This is about page`)
})

module.exports = app;