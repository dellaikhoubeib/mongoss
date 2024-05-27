const express = require('express');


const app = express();

const port=4000

const connectdb =require('./config/connectdb')

const contactroutes = require('./routes/contactroutes')

// appel lil connectdb
connectdb()

app.use(express.json())


app.use('/contact',contactroutes)












app.listen(port,err =>{
    err?console.log(err):console.log('you did good go to the port '+port)


})