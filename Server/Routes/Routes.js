

import { Router } from "express";
import { Home, Signin, Signup, verifyToken, sendUser } from "../Controllers/User.js";



const router = Router();


router.get('/home', Home);
router.post('/signup', Signup);
router.post('/signin', Signin);


router.get('/auth', verifyToken, sendUser);

export {router}