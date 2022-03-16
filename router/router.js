const express= require('express')
const imageUploader= require('../multer/multer')

const {schoolCreate, getAllSchool, schoolUpdate, getOneSchool, deleteAllSchools, deleteOneSchool}= require('../controller/controller')

const router= express.Router()

router.get("/getschool", getAllSchool)
router.post("/postschool",imageUploader, schoolCreate)
router.delete("/deleteschool",deleteAllSchools)
router.get("getschool/:id", getOneSchool)
router.patch("patchschool/:id",imageUploader, schoolUpdate)
router.delete("deleteschool/:id", deleteOneSchool)
module.exports =router;
