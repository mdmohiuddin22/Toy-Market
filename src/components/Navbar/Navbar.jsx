import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar  justify-center rounded-lg bg-gradient-to-l from-indigo-500 to-indigo-000 ">
        <a> <img className='rounded-lg' src="https://i.ibb.co/mGcZ88J/image.png" alt="" /></a>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-2xl text-white font-semibold">
         <Link to='/home'> <li><a>Home</a></li></Link>
          <Link to='/blog'><li><a>Blog</a></li></Link>
          <Link to='/about'><li><a>About</a></li></Link>
          <Link to='/alltoys'><li><a>All Toys</a></li></Link>
          <Link to='/mytoys'><li><a>My Toys</a></li></Link>
          <Link to='/addatoy'><li><a>Add a toy</a></li></Link>
         <Link to='/login'> <li><a className='btn  btn-success'>Login</a></li></Link>
        </ul>
      </div>
     
    </div>
    );
};

export default Navbar;