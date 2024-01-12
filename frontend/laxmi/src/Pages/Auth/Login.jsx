import React from 'react'
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Create from './Create'
import { useState } from 'react';
import Vaildatio from './Vaildatio';
function Login() {
  const [items, setItems] = useState({
    username:'',
    password:''
  })
const [err, setErr] = useState([  ])
  function handle(e){
    setItems({
      ...items,
      [e.target.name]:e.target.value
    })
  }
  function submit(event){
   
    setErr(Vaildatio(items));
    setItems({
      username:'',
      password:''
    })
  }
  return (<>


{JSON.stringify(err)}
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="Create" element={<Create />} />
      </Routes>

    <div className='h-screen'>
      <div className='w-full drop-shadow-xl h-3/6 flex   justify-center items-center'>
        <div className='bg-orange-400 drop-shadow-xl  h-full mt-20 flex flex-col justify-center'>
          <div className=' ml-40 mr-40 w-3/6'>
            <Link to={'/Login'} className='mr-5 w-30 h-10 hover:bg-indigo-600  rounded-lg bg-indigo-500'>Login</Link>
            <Link to={'/Login/Create'} className='w-30 h-10 hover:bg-indigo-600 rounded-lg bg-indigo-500'>Create Account</Link>
          </div> 
          <div className='mt-2 ml-40 mr-40 justify-center flex flex-col'>
  <input className='w-60 h-10 rounded-l-lg mt-10' type='text' name='username' onChange={handle} placeholder='Username'/>
  {err.username && <p>{err.username}</p>}
  <input className='w-60 h-10 rounded-l-lg mt-10' type='text' name='password' onChange={handle} placeholder='Password'/>
  {err.password && <p>{err.password}</p>}
  <button onClick={submit} className='w-30 h-10 mt-10 rounded-lg bg-indigo-500'>Login</button>
</div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Login