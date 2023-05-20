import './App.css'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className='min-h-screen'>
     <div className="navbar  justify-center rounded-lg bg-gradient-to-l from-indigo-500 to-indigo-000 ">
    <a> <img className='rounded-lg' src="https://i.ibb.co/mGcZ88J/image.png" alt="" /></a>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-2xl text-white font-semibold">
      <li><a>Home</a></li>
      <li><a>Blog</a></li>
      <li><a>All Toys</a></li>
      <li><a>My Toys</a></li>
      <li><a>Add a toy</a></li>
      <li><a className='btn  btn-success'>Login</a></li>
    </ul>
  </div>
 
</div>
<Footer></Footer>
    </div>
  )
}

export default App
