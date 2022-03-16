require('./config/mongo')
const express = require ('express')
const port = process.env.PORT ||2000;
console.log(port);
const app= express()
const allRoute= require('./router/router')
app.use(express.json())
app.use('/api/v1', allRoute )
// app.get("/", (req, res)=> {
//     res.end("welcome to my database where i have stored the data of 50 Schools with images alongside, each having a distinct ID",
//     "From here you can now navigate through the different routes on my DB  ",
//     "To get all school data this in the route: '/api/v1/get'"
//     )
// })


app.listen(port, () => {
    console.log("look your server is listening on port", port);
})
