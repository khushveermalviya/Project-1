import React, { useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SIdeMenu from './SIdeMenu';
import Login from './Auth/Login.jsx';
import Home from './Home';
import Nav from './Nav';
import Cards from './Cards';
import Ro from './Auth/Ro';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Data from './Data';
import Create from './Auth/Create.jsx';
function Root() {
  const [items, setItems] = useState(0)
  function addCart(){
      setItems(prev=>prev+1)
  }

  const [show, setShow] = useState(false);

  const slide = () => {
    setShow(!show);
  } 

  return (
    <div>
      <BrowserRouter>
      <div className='flex justify-between ali w-full h-53 bg-blue-400 fixed top-0 left-0 right-0 z-20'>
            <h1 className='text-lg'>laxmi keys</h1>
            <div className='border-spacing-1 border-red-900  curser:pointer'>
              <Link className='pr-5' to="/About">About</Link>
              <Link className='pr-5' onClick={slide} to={show ? '/' : '/SIdeMenu'}>SideMenu</Link>
            </div>
            <div>
            <Link to='/Login' className='pr-5'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      Login
    </button>
    </Link>
           
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{items}</button>
            </div>
   </div> 
5
        <Routes>
          <Route path="/" element={<Cards addCart={addCart}  />} />
          { show && <Route path="/SIdeMenu" element={<SIdeMenu />} />}
          <Route path="/Login/*" element={<Login />}/>
 
        </Routes>
      </BrowserRouter>
      <div className='flex bg-red'></div>
    </div>
  );
}

export default Root;