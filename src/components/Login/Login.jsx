
import { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../AuthProviders/AuthProviders";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth =getAuth(app);
  const provider =new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then(result =>{
      const user =result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login Now
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none"
                placeholder="Enter your password"
              />
              <div onClick={togglePasswordVisibility}>
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <p>
          <small>
            New Here? <Link to="/signup">Create an account</Link>
          </small>
        </p>
        <div className="mt-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
