
import { User } from "../Models/UserModel.js";
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();

const cookieName = process.env.COOKIE_NAME;
const jwtsecret = process.env.JWT_SECRET;



const Signup = async (req, res) => {

    const { name, lastname, email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.status(200).json({ message: 'User already exist!' });
        }

        else {
            const hashedPassword = await hash(password, 10);
            const newUser = new User({ name: name, lastname: lastname, email: email, password: hashedPassword });
            newUser.save();

            const id = newUser._id.toString();
            const payload = { id, email };
            const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });

            const expires = new Date();
            expires.setDate(expires.getDate() + 7);

            res.cookie(cookieName, token, {
                path: "/",
                domain: "localhost",
                expires,
                httpOnly: true,
                signed: true,
            });

            console.log('signed up ');

            return res.status(200).json({ message: "Signup successful", name: newUser.name, email: newUser.email });
        }
    }

    catch (error) {
        return res.status(404).json({ message: 'Error Signup!' });
    }
}





const Signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not registered" });
        }

        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Incorrect Password" });
        }

        const id = user._id.toString();
        const payload = { id, email };
        const token = jwt.sign(payload, jwtsecret, { expiresIn: '7d' });

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        res.cookie(cookieName, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });

        return res.status(200).json({ message: "Login successful", name: user.name, email: user.email });
    }

    catch (error) {
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
}






const Home = (req, res)=>{
    res.send("This is home page");
}


export {Home, Signin, Signup}