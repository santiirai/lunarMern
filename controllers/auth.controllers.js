
import { response } from "express";
import User from "../models/user.model.js";
import { generateToken } from "../utils/tokens.js";


const AuthController = {
    LoginController: async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            console.log("Payload recieved ", email, password);

            const existingUser = await User.findOne({
                email: email,
                password: password
            })

            if (existingUser) {
                const token = generateToken(
                {
                    id: existingUser._id,
                    name: existingUser.name,
                });
                res.status(200).json({ message: "Login successful", data: existingUser, token: token });
            } else {
                res.status(401).json({ message: "Invalid email or password" });
            }
        } catch (err) {
            console.log("Error in login ", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    RegisterController: async (req, res) => {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;

            console.log("Payload recieved ", name, email, password);

            const existingUser = await User.findOne({
                email: email
            })

            if (existingUser) {
                res.status(400).json({ message: "User already exists" });
            } else {
                const newUser = await User.create({
                    name: name,
                    email: email,
                    password: password
                });
                const token = generateToken(
                    {
                        id: newUser._id,
                        name: newUser.name,
                    });
                res.status(201).json({ message: "User registered successfully", data: newUser, token: token });
            }
        } catch (err) {
            console.log("Error in registration ", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    GetMeController: async (req, res) => {
        try{
            const userId = req.user.id;

            const existingUser = await User.findById(userId);
            res.status(200).json({ message: "User fetched successfully", data: existingUser });
        }catch(err){
            console.log("Error in GetMeController ", err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default AuthController;