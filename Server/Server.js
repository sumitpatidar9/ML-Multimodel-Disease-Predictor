


import express from 'express';
import env from 'dotenv';
import { Connect } from './Utils/Connection.js';
import { router } from './Routes/Routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



const app = express();
env.config();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));
app.use(express.json());

const cookiesecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookiesecret));


const PORT = process.env.PORT || 5000;
const URL =  process.env.MONGO_URL;


Connect(URL);

app.use('/', router);

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${PORT}`);
})