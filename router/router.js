const express= require('express')
const imageUploader= require('../multer/multer')

const {schoolCreate, getAllSchool, schoolUpdate, getOneSchool, deleteAllSchools, deleteOneSchool}= require('../controller/controller')

const router= express.Router()

router.get("/get", getAllSchool)
// router
//     .route("/schools")
//     .post(imageUploader, schoolCreate)
//     .get(getAllSchool)
//     .delete( deleteAllSchools)

// router
//     .route("/school/:id")
//     .get(getOneSchool)
//     .patch(imageUploader, schoolUpdate)
//     .delete(deleteOneSchool)
module.exports =router;
