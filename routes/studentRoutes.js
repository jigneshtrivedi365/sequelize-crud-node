const express = require("express");
const { addStudent, getAllStudents, getStudent } = require("../controllers/studentController");
const router = express.Router();

router.get('/getAll',getAllStudents)
router.get('/get/:id?',getStudent)
router.post('/create',addStudent)

module.exports = router;