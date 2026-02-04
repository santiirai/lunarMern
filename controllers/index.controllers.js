import Student from '../models/Student.model.js';

const AllControllers = {
    GetController: async (req, res) => {
        try{
            console.log("get request received");
            const allStudents = await Student.find({});
            res.status(200).json({
                "success": true,
                "message": "Data fetched successfully",
                "data": allStudents
            })
        }catch(err){
            res.status(500).json({
                success: false,
                "error": "Internal Server Error"
            })
        }
    },
    PostController: async (req, res) => {
        const data = req.body;
        //insert into database using mongoose
        try {
            console.log("post request received");
            console.log(req.body);
            const insertedStudent = await Student.create(req.body);
            res.status(200).json({
                "success": true,
                "message": "Data received successfully",
                "data": []
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                "error": "Internal Server Error"
            })
        }
    },
    DeleteController: (req, res) => {
        res.status(200).json({
            "data": "delete request received"
        })
    }
}

export default AllControllers;
