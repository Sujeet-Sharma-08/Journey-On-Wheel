import { useState } from 'react'
import './App.css'
import Navbar from './components/Layouts/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Layouts/Footer'
import Login from './components/Authentication/Login'
import SignUp from './components/Authentication/SignUp'
import {Routes,Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Booking from './components/tour/Booking'
import CarCollection from './components/Car Collection/CarCollection'
import Contactus from './components/subNavBar/contactus'
import Aboutus from './components/subNavBar/Aboutus'
function App() {
  
  return (
    <div className=''>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>

        {/* sub navbar */}
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/Aboutus' element={<Aboutus/>}></Route>
       

        {/* select car */}
        <Route path='/exploremore' element={<CarCollection/>}></Route>

      {/* tour */}
         <Route path='/booking' element={<Booking/>}/>
      </Routes>
       <Footer/>
       <Toaster/>
    </div>
  )
}

export default App
