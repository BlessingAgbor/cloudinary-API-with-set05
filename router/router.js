const express= require('express')
const imageUploader= require('../multer/multer')

const {schoolCreate, getAllSchool, schoolUpdate, getOneSchool, deleteAllSchools, deleteOneSchool}= require('../controller/controller')

const router= express.Router()

router.get("/get", getAllSchool)
router.post("/post",imageUploader, schoolCreate)
router.delete("/delete",deleteAllSchools)
router.get("get/:id", getOneSchool)
router.patch("patch/:id",imageUploader, schoolUpdate)
router.delete("delete/:id", deleteOneSchool)
module.exports =router;
