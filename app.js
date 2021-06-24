const express= require('express');
const app=express()
const router=require('./routes/api');
const mongoose=require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log("connect!!")
}).catch((err) => {
    console.log("err connect")
    console.log(err)
})
app.use('/',router);
app.listen(3000,()=>{console.log('listen to port 3000')})