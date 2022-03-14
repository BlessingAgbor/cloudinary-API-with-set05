const multer = require('multer')
const path = require ('path')

// const imageUploader=
const storage= multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './cloudImage')
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    }
})

const filterFile= (req, file, cb) => {
    const ext= path.extname(file.originalname)
    if(ext !== ".jpg"|| ext !== ".jpeg" || ext !== ".png"){
        cb(null, new Error ("unsupported file format"), false)
    }else{
        cb(null, true)
    }
}

const imageUploader= multer({
    storage: storage,
    filterFile: filterFile,
    limits: {
        fileSize: 1024*1024*20
    }
}).single("image")

module.exports= imageUploader;