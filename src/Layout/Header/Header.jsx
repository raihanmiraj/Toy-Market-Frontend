import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
 
  const [langBtn , setLangBtn] = useState(false)
  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)
  const [dropDownOpen , setDropDownOpen] = useState(false); 
  const [imgDetails, setImgDetails] = useState(false)
  const  { registerUser, user, logOut, loginUser,isLogged,setIsLogged }  = useContext(AuthContext);
 
    return (
        <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> 
 
      <div className="navbar  px-2 md:px-[5%] z-[999999]">
  <div className="navbar-start"> 
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
      <li><Link to="/"> Home</Link> </li>
      <li><Link to="/toys"> All Toys</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Toys
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
          <li><Link to="/mytoys"> My Toys</Link></li>
          <li><Link to="/addtoy"> Add Toy</Link></li> 
          </ul>
        </li>
        <li><Link to="/blog">Blogs</Link></li>
      </ul>
    </div> 
   <Link className="normal-case text-xl font-bold" to="/"> Kiddo</Link>  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/"> Home</Link> </li>
      <li><Link to="/toys"> All Toys</Link></li>
      <li tabIndex={0}>
        <a>
         Toys
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 z-[99]">
          <li><Link to="/mytoys"> My Toys</Link></li>
          <li><Link to="/addtoy"> Add Toy</Link></li> 
        </ul>
      </li>
      <li><Link to="/blog">Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {user?<> <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logOut}>Logout</button></li>
      </ul>
    </div>
    </>:<>
    <Link to="/login" className="bg-[#406147] text-center text-white font-semibold px-8 py-2 rounded-3xl">Sign In</Link>
   
    </>}
   
  </div>

 

</div>
        </>
    );
}

export default Header;
