const express = require('express');
const { router } = require('./routes/router');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/api/v1',router)

app.get('/',(req,res)=>{
    res.send("this is home page")
})

let port =  process.env.PORT || port;

app.listen(port, ()=>{
    console.log('server started successfully');
})




