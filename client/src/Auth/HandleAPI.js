import axios from "axios";
import toast from "react-hot-toast";


const signUpUser = async (name, lastname, password, email) => {
    try {
        const response = await axios.post('http://localhost:5000/signup', { name, lastname, password, email }, { withCredentials: true });
        const data = await response.data;
        return data
    }

    catch (error) {
        console.log('Error signingup in api: ' + error);
    }
}



const loginUser = async (email, password) => {

    try {
        const response = await axios.post('http://localhost:5000/signin', { email, password }, { withCredentials: true });
        const data = await response.data;
        toast.success("Signed In Successfully", { id: "login" });
        return data        
    }

    catch (error) {
        console.log('Error logging in api: ' + error.response.status);

        if(error.response.status === 401){
            toast.error("User is not registered, Please Signup !");
        }

        if(error.response.status === 403){
            toast.error("Password Incorrect !");
        }
    }
}




const checkAuthStatus = async () => {

    try {
        const response = await axios.get('http://localhost:5000/auth', { withCredentials: true });
        const data = await response.data;
        return data;
    }

    catch (error) {
        console.log('Error auth api: ' + error);
    }
}




const logoutUser = async () => {
    try {
        const res = await axios.get("http://localhost:5000/logout", { withCredentials: true });
        const data = await res.data;
        return data;
    }

    catch (error) {
        console.log('Error logout api: ' + error);
    }
};



export { signUpUser, loginUser, checkAuthStatus, logoutUser };