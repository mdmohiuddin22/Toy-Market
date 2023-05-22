import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'



function App() {


  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <Banner></Banner>
 <Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default App
