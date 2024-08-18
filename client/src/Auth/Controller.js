

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Signin } from '../UserAuth/SignIn';
import {Signup} from '../UserAuth/SignUp';
import { Dashboard } from '../Dashboard/Dashboard';
import { Home } from '../Home/Home';
import { Navabar } from '../Navbar/Navbar';
import { Tumor } from '../Home/Tumor/Tumor.js';





const Controller = () => {
    const auth = useAuth();
    return (
        <>  
            <Navabar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path= "/home" element={<Home/>} />
                    

                    <Route path = "/tumor" element = {<Tumor/>} />



                    {auth.isLoggedIn && auth.user && (
                        <>
                        <Route path= "/dashboard" element={<Dashboard/>} />
                        </>
                    )}

                </Routes>
            </BrowserRouter>
        </>
    )
}


export { Controller };