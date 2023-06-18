import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch(error => console.log(error));
    };
  
    const navItems = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="alltoys">Alltoys</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/mytoys">Mytoys</Link>
            </li>
            <li>
              <Link to="/addatoy">Add a toy</Link>
            </li>
            <li>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
      </>
    );
  
    return (
      <div className="navbar justify-center rounded-lg bg-gradient-to-l from-indigo-500 to-indigo-000">
         <Link to="/">
        <img
          className="rounded-lg"
          src="https://i.ibb.co/mGcZ88J/image.png"
          alt=""
        />
      </Link>
        <div className="navbar-start">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-lg font-semibold">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <>
              
              <img
                src="https://i.ibb.co/CMzNM8P/muslim-boy-learning-how-make-dua-allah-53876-25223.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </>
          ) : null}
        </div>
      </div>
    );
  };
  

export default Navbar;











