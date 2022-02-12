const express = require ("express")
const app =express()
const port = 3100
const path = require('path');


app.use( express.static('public'));
app.use('/recursos', express.static(__dirname +'/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/babbage.html', (req, res) => {
    res.sendFile(path.join(__dirname,'babbage.html'))
});

app.get('/berners-lee.html', (req, res) => {
    res.sendFile(path.join(__dirname,'berners-lee.html'))
});

app.get('/clarke.html', (req, res) => {
    res.sendFile(path.join(__dirname,'clarke.html'))
});

app.get('/hamilton.html', (req, res) => {
    res.sendFile(path.join(__dirname,'hamilton.html'))
});


app.get('/hopper.html', (req, res) => {
    res.sendFile(path.join(__dirname,'hopper.html'))
});


app.get('/lovelace.html', (req, res) => {
    res.sendFile(path.join(__dirname,'lovelace.html'))
});

app.get('/turing.html', (req, res) => {
    res.sendFile(path.join(__dirname,'turing.html'))
});



app.listen(port, ()=>console.log(`servidor levantado en el puerto${port}`))