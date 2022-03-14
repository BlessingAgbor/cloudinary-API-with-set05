const mongoose = require('mongoose')
const url= "mongodb://localhost/schoolAPI"
mongoose.connect(url).then(()=> {
    console.log("connected to mongoose successfully");
}).catch((err)=> {
    console.log("there's something wrong with your mongoose connection");
})

module.exports= mongoose