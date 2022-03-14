require('./config/mongo')
const express = require ('express')
const port = 2000;
const app= express()
const allRoute= require('./router/router')
app.use(express.json())
app.use('/api/v1', allRoute )

app.listen(port, () => {
    console.log("look your server is listening on port", port);
})
