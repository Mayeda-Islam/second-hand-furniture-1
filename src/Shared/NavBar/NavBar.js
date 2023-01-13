import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/logo.png'
import { AuthContext } from "../../context/Auth/AuthProvider";
const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="container mx-auto ">
      <div className="navbar bg-primary">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={1}>
              <Link to='blogs'>Blogs</Link>
                <ul className="p-2">
                  <li>
                 
                  </li>
                  <li>
                   <Link to='blogs'>Blogs</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              
              {
                user?.email? <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>:
                <li>
                <Link to='/login'>Sign In</Link>
              </li>
              }
                
               
            </ul>
          </div>
          <img src={logo} className='w-20' alt="" />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                
                <li tabIndex={0}>
                <Link to='blogs'>Blogs</Link>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
                
                {
                user?.email? <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>:
                <li>
                <Link to='/login'>Sign In</Link>
              </li>
              }
              </ul>
            </div>

            {/* <label tabIndex={1} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label> */}
            {/* <div
              tabIndex={1}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={2}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
