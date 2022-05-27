const express = require('express');
const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res)=> {
    
    res.sendFile(__dirname + '/views/register.html');

});

app.get('/login', (req, res)=> {
    
    res.sendFile(__dirname + '/views/login.html');

});
