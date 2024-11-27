const express = require('express');
const {studentData,GetStudentById,creatingStudent} = require('../controller/student_controller');

const router = express.Router(); // FIX: Invoke the Router() function

// Define routes
router.get('/list', studentData);


// gET student by id
router.get('/get/:id',GetStudentById)

// Creat a Post reuest 
router.post('/creat',creatingStudent)

module.exports = router;