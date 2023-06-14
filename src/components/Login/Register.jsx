// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../AuthProviders/AuthProviders';



// const SignUp = () => {

//     const { createUser } = useContext(AuthContext);

//     const handleSignUp = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, email, password)


//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log('created user', user)
//             })
//             .catch(error => console.log(error))

//     }

//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row">
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                         <form onSubmit={handleSignUp}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name='password' placeholder="password" className="input input-bordered" />
            
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Confirm Password</span>
//                                 </label>
//                                 <input type="password" name='password' placeholder="password" className="input input-bordered" />
            
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                         {/* <SocialLogin></SocialLogin> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../AuthProviders/AuthProviders";
import app from "../firebase/firebase.config";

const SignUp = () => {
  const auth =getAuth(app);
  const provider =new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  const password = watch("password"); 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
     
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">is less than 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be less than 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Don't have a capital letter, Don't have a small letter, one number, and don't have a special character
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                name="confirmPassword"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL")}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>
            <small>
              Already have an account? <Link to="/login">Login</Link>
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
    </div>
  );
};

export default SignUp;