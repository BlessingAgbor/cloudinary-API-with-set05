require('dotenv').config();
const url=process.env.MYLOCAL_DB
const mongoose = require('mongoose')

mongoose.connect(url).then(()=> {
    console.log("connected to mongoose successfully");
}).catch((err)=> {
    console.log("there's something wrong with your mongoose connection");
})

module.exports= mongoose