import Student from '../models/Student.model.js';

const AllControllers = {
    GetController: async (req, res) => {
        try {
            console.log("get request received");
            const allStudents = await Student.find({});
            res.status(200).json({
                "success": true,
                "message": "Data fetched successfully",
                "data": allStudents
            })
        } catch (err) {
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
                "data": insertedStudent
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                "error": "Internal Server Error"
            })
        }
    },

    PutController: async (req, res) => {
        try {
            const idtoChange = req.body._id;
            console.log("put request received");
            console.log(idtoChange);

            console.log(req.body);
            const changedUser = await Student.findByIdAndUpdate(idtoChange, req.body)
            console.log(changedUser);

            res.status(200).json({
                "success": true,
                "message": "Data updated successfully",
                "data": changedUser
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                "error": "Internal Server Error"
            })
        }
    },
    DeleteController: async (req, res) => {
        try {
        console.log("delete request received");
        console.log(req.body._id);
            await Student.findByIdAndDelete(req.body._id);
            res.status(200).json({
                "success": true,
                "message": "Data deleted successfully",
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                "error": "Internal Server Error"
            })
        }
    }
}

export default AllControllers;
