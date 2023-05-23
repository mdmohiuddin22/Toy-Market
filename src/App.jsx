import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ShopByCategory from './components/ShopByCategory/ShopByCategory'
import Toy from './components/Navbar/UpdateToy'



function App() {


  return (
    <div className='min-h-screen'>
      <Navbar></Navbar>
      <Banner></Banner>
      <ShopByCategory></ShopByCategory>
 <Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default App
