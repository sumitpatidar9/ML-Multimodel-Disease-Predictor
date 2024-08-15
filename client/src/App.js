
import { Signup } from "./UserAuth/SignUp";
import { AuthProvider } from "./Auth/AuthContext";
import { Toaster } from 'react-hot-toast';
import { Home } from "./Home";
import { SignIn } from "./UserAuth/SignIn";
import { Controller } from "./Auth/Controller";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Controller/>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
      </AuthProvider>

    </div>
  );
}

export default App;
