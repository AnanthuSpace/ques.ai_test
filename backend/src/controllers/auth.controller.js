import bcrypt from "bcrypt";
import User from "../model/user.model.js";
import { generateAccessToken } from "../config/jwtConfig.js";

export const signupController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password) {
            const error = new Error("Email and password are required");
            error.statusCode = 400;
            throw error;
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ success: true, message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};


export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error("Email and password are required");
            error.statusCode = 400;
            throw error;
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordMatch) {
            const error = new Error("Invalid credentials");
            error.statusCode = 400;
            throw error;
        }

        const token = await generateAccessToken(existingUser._id);

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (error) {
        next(error);
    }
};
