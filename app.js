const express= require('express');
const app=express()
const router=require('./routes/api');
const mongoose=require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();})
app.use(bodyParser.json());
app.use('/aploads',express.static('aploads'))

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
app.listen(4000,()=>{console.log('listen to port 4000')})