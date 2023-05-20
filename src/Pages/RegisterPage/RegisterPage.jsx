import React, { useState } from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
const RegisterPage = () => {
const [message , setMessage] = useState("");
const changeInputPassword = (e)=>{
  setMessage("")
 

}
 
  const auth = getAuth(app); 
    const handleSubmit = (e)=>{
        e.preventDefault();
 let email = e.target.email.value
 let password = e.target.password.value
 if(password == "" || email ==""){
  setMessage("Password or email can't be empty")
 }else if(password.length <6){
  setMessage("Password Must be more than 6")
return ;
} 
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
 
   const user = userCredential.user;
   user.updateProfile({
    displayName:  e.target.name.value,
    photoURL: e.target.image.value,
  });
  
 
 
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });
    }
    return (
        <>
        <Header/>
           <section className=" w-full   flex justify-center items-center px-4 md:px-0 mt-12">
  <div className="flex flex-col gap-5">
    <div className="flex gap-5 text-2xl font-semibold items-center">
    <Link to="/login"  className="py-2 text-gray-500">Login </Link>
    <Link  to="/register"  className="py-2  border-b-4 border-[#4406CB]  ">Register Now</Link>
    </div>
  


<form  onSubmit={handleSubmit} className="flex flex-col gap-5 ">
<input
        type="text"
        name="name"
        id=""
        placeholder="Enter Your Name"
        className="p-2 rounded-lg text-black border"
      />
<input
        type="text"
        name="image"
        id=""
        placeholder="Enter Your Photo Url"
        className="p-2 rounded-lg text-black border"
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="Enter Your Email"
        className="p-2 rounded-lg text-black border" required
      />
      <input onChange={changeInputPassword}
        type="password"
        name="password"
        id=""
        placeholder="Enter Password"
        className="p-2 rounded-lg text-black border" required
      />
      <p className='text-red-700'>{message}</p>
      <button type="submit" className="btn btn-primary">Register</button>
      <a href="#">Forgot Password?</a>
    </form>
    <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
   {/* <LoginWithFacebook/>
   <LoginWithApple/> */}
     <LoginWithGoogle/>

  <LoginWithGithub/>
    </div>
  </div>
</section>
    
        </>
    );
}

export default RegisterPage;




 