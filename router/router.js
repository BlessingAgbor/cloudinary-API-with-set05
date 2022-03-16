const express= require('express')
const imageUploader= require('../multer/multer')

const {schoolCreate, getAllSchool, schoolUpdate, getOneSchool, deleteAllSchools, deleteOneSchool}= require('../controller/controller')

const route= express.Router()

route.get("/get/school", getAllSchool)
route.post("/post/school",imageUploader, schoolCreate)
route.delete("/delete/school",deleteAllSchools)
route.get("/get/school/:id", getOneSchool)
route.patch("/patch/school/:id",imageUploader, schoolUpdate)
route.delete("/delete/school/:id", deleteOneSchool)
module.exports =route;
