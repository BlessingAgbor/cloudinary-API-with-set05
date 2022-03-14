const mongoose = require ('mongoose')

const schoolSchema= mongoose.Schema({

    name: {
        type: String,
        required: true,

    },

    location: {
        type: String,
        required: true,
    },

    yearEstablished: {
        type: Number,
        required: true,
        
    }, 
    image: {
        type: String,

    },
    cloud_url: {
        type: String,
        required: true
    },
    cloud_id:{
        type: String,
        required: true


    },
    createdAt: {
        type: Date,
        default: new Date()
        
    }
})

module.exports= mongoose.model("schoolModel", schoolSchema)