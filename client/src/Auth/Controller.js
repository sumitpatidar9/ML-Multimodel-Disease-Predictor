




import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Signin } from '../UserAuth/SignIn';
import {Signup} from '../UserAuth/SignUp';







const Controller = () => {
    const auth = useAuth();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />

                    {auth.isLoggedIn && auth.user && (
                        <Route path= "/home" element={<div>Home</div>} />
                    )}

                </Routes>
            </BrowserRouter>
        </>
    )
}


export { Controller };