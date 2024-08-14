

import { Router } from "express";
import { Home, Signin, Signup } from "../Controllers/User.js";



const router = Router();


router.get('/home', Home);
router.post('/signup', Signup);
router.post('/signin', Signin);

export {router}