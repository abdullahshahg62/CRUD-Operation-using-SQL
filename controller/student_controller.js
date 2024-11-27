const MySQL = require('../connectionDB/SQL_connection')
// Get all student data 

const studentData =async (req,res) =>{

try{
const data= await MySQL.query('select * from student_data')
if(!data){
   return res.status(402).send({
    success:false,
    message:'there is some error in your data '

});
}
   res.status(200).send({
    success:true,
    message:"successfully get student",
    data:data[0]
   })
}catch(error){
    console.log(error)
    res.status(501).send({
        success:false,
        message:"Ther is some error in yor api ",
        error
    })
}
};

// Get student by id
const GetStudentById =  async (req, res) => {
    const studentId = req.params.id; // Extract ID from URL
  try {
    const [rows] = await MySQL.query('SELECT * FROM student_data WHERE id = ?', [studentId]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No student found with ID: ${studentId}`,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student found',
      data: rows[0],
    });
    
    } catch (error) {
      console.log(error);
      res.status(501).send({
        success: false,
        message: 'There is some error in your API',
        error
      });
    }
  };


// Post requst  

const creatingStudent = async (req, res) => {
    const { name, age, class: studentClass } = req.body;

    // Validate input fields
    if (!name || !age || !studentClass) {
        return res.status(400).send({
            success: false,
            message: 'All fields (name, age, class) are required.',
        });
    }

    try {
        // Handle "class" reserved keyword with backticks
        const query = 'INSERT INTO studentFile (name, age, `class`) VALUES (?, ?, ?)';
        const [result] = await MySQL.query(query, [name, age, studentClass]);

        res.status(201).send({
            success: true,
            message: 'Student created successfully.',
            studentId: result.insertId,
        });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).send({
            success: false,
            message: 'Error creating student.',
            error: error.message,
        });
    }
};



module.exports = {studentData,GetStudentById,creatingStudent};

