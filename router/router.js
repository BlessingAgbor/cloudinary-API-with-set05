const express= require('express')
const imageUploader= require('../multer/multer')

const {schoolCreate, getAllSchool, schoolUpdate, getOneSchool, deleteAllSchools, deleteOneSchool}= require('../controller/controller')

const route= express.Router()

route.get("/getschool", getAllSchool)
route.post("/postschool",imageUploader, schoolCreate)
route.delete("/deleteschool",deleteAllSchools)
route.get("getschool/:id", getOneSchool)
route.patch("patchschool/:id",imageUploader, schoolUpdate)
route.delete("deleteschool/:id", deleteOneSchool)
module.exports =route;
