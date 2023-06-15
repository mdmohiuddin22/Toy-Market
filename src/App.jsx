import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Navbar1 from './components/Navbar/Navbar1'




function App() {


  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <Navbar1></Navbar1>
 <Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default App
