import User from "../models/User.js";
import { genSalt, hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { cookieName, cookieOptions } from "../config/constants.js";
const salt = await genSalt(10);
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "OK", cause: error.message });
    }
};
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        console.log("Check");
        if (existingUser) {
            return res.status(401).send("User already registered");
        }
        const hashedPassword = await hash(password, salt);
        const user = await User.create({ name, password: hashedPassword, email });
        // create token & store cookie
        res.clearCookie(cookieName, cookieOptions);
        const token = createToken(existingUser._id.toString(), existingUser.email, "2days");
        res.cookie(cookieName, token, cookieOptions);
        return res.status(200).json({ message: "OK", id: existingUser._id });
        // delete user._doc.password;
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).send("User not registered");
        }
        const passwordMatch = await compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(403).send("Incorrect Password");
        }
        res.clearCookie(cookieName, cookieOptions);
        const token = createToken(existingUser._id.toString(), existingUser.email, "2days");
        res.cookie(cookieName, token, cookieOptions);
        return res.status(200).json({ message: "OK", id: existingUser._id });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map