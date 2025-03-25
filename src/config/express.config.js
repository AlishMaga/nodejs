const exprees = require('express');
const app = exprees();
const router = require('../route/router.config');


app.get('/', (req, res)=>{
    res.end(`This is home page`)
})

app.use('/api',router);

module.exports = app;