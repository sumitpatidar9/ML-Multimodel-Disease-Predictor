

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../SignInin';
import { Signup } from '../SignUp';

import { useAuth } from './AuthContext';
import { Navbar } from '../Navbar';








const Controller = () => {
    const auth = useAuth();
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {auth.isLoggedIn && auth.user && (
                        <Route path= "/chat" element={<Chat/>} />
                    )}

                </Routes>
            </BrowserRouter>
        </>
    )
}


export { Controller };