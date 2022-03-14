const cloudinary= require('../cloudinary/cloudinary.js')
const schoolModel= require('../model/model')
const fs = require('fs')
const schoolCreate= async(req, res) => {

    try{
        const cloud= await cloudinary.uploader.upload(req.file.path) ;
        const produce= await schoolModel.create({
        name: req.body.name,
        location: req.body.location,
        image: req.file.path,
        cloud_id: cloud.public_id,
        cloud_url: cloud.secure_url,
        yearEstablished: req.body.yearEstablished

        })
        
        res.status(201).json({
            status: "success",
            message: produce
        })
        
    }catch(err) {
        res.status(404).json({
            status: "fail", 
            message: err
        })
        console.log(err.message);

    }
}

const schoolUpdate= async(req, res) => {

    try{
        const cloud= await cloudinary.uploader.upload(req.file.path) ;
        const produce= await schoolModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        location: req.body.location,
        image: req.file.path,
        cloud_id: cloud.public_id,
        cloud_url: cloud.secure_url,
        yearEstablished: req.body.yearEstablished

        }, {new:true})
        
        res.status(201).json({
            status: "success",
            message: produce
        })
        
    }catch(err) {
        res.status(404).json({
            status: "fail", 
            message: err
        })
        console.log(err.message);

    }
}


const deleteAllSchools= async(req, res) => {
    try{
        // const oneSchool= req.params.id
        // if(!oneSchool) {
        //     res.status(400).json({
        //         status: `school with this id (${oneSchool})does not exist`
        //     })
        // }else{
            await schoolModel.deleteMany()
            await cloudinary.uploader.destroy(schoolModel.cloud_id)
            await fs.unlinkSync(schoolModel.image)
            res.status(204).json({
                status: "success",
                message: "school data has been successfully deleted"
        })
        // }
        
    }catch(err) {
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }

}

const deleteOneSchool= async(req, res) => {
   try{
    // const id= req.params.id

        const id= req.params.id
        const oneSchool= await schoolModel.findById(id)
        if(!oneSchool) {
            res.status(400).json({
                status: `school with this id (${oneSchool})does not exist`
            })
        }else{
            await cloudinary.uploader.destroy(oneSchool.cloud_id)
            // await cloudinary.uploader.destroy(oneSchool.public_id)

            await fs.unlinkSync(oneSchool.image)
            await schoolModel.findByIdAndRemove(id)

    res.status(204).json({
        status: "successful",
        message:`id ${id} data has been deleted `
    })
   }
}catch(err) {
       res.status(404).json({
        status: "fail",
        message: err
       })

   }

}

const getOneSchool= async(req, res) => {
    try{
     const id= req.params.id
     const finder =await schoolModel.findById(id)
     res.status(200).json({
         status: "successful",
         message:`school with this id (${id}) data has been found `,
         data: finder
     })
    }catch(err) {
        res.status(404).json({
         status: "fail",
         message: err
        })
 
    }
 
 }

 const getAllSchool= async(req, res) => {
    try{
    //  const id= req.params.id
     const finder =await schoolModel.find()
     res.status(200).json({
         status: "successful",
        //  message:`These are all the school datas `,
         data: finder
     })
    }catch(err) {
        res.status(404).json({
         status: "fail",
         message: err.message
        })
 
    }
 
 }



module.exports={schoolCreate, schoolUpdate, getOneSchool, getAllSchool, deleteAllSchools, deleteOneSchool};
