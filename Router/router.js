const router = require("express").Router();

const {createSchool,getASchool,getAllSchool}= require("../Controllers/schoolController");
const {createStudent,deleteStudent} = require("../Controllers/studentController");

router.post("/createschool", createSchool);
router.get("/getone/:id",getASchool);
router.get("/getall",getAllSchool)


router.post("/createstudent/:id",createStudent);
router.delete("/deletestudent/:id",deleteStudent)



module.exports = router;