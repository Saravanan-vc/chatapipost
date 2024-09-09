const express = require('express');
const mongose = require('mongoose');
const db = require('./dbase');


const app = express()
app.use(express.json());
const port = 3000;

const mongodb = mongose
.connect("mongodb+srv://vsaravananc:Flutteratlas@shoes.dsvlo.mongodb.net/chatmessage?retryWrites=true&w=majority&appName=shoes")
.then(
    app.listen(port)
)

app.post('/'
    ,async(req,res) =>{
        const creatdb = await db.create(req.body);
        res.status(200).json(creatdb);
    }
)