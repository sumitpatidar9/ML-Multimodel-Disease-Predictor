




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Signin } from '../UserAuth/SignIn';
import {Signup} from '../UserAuth/SignUp';
import { Dashboard } from '../Dashboard/Dashboard';
import { Home } from '../Home/Home';





const Controller = () => {
    const auth = useAuth();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />

                    {auth.isLoggedIn && auth.user && (
                        <>
                        <Route path= "/home" element={<Home/>} />
                        <Route path= "/dashboard" element={<Dashboard/>} />
                        </>
                    )}

                </Routes>
            </BrowserRouter>
        </>
    )
}


export { Controller };