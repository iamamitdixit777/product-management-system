import React from 'react';
import Home from './Components/Home';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Details from './Components/Details';
import Create from './Components/Create';
import Edit from './Components/Edit';

const App = () => {
   const {search,pathname}= useLocation();
  
  return (
  <div className='w-screen h-screen flex'> 
  { (pathname!='/' || search.length>0 ) && (<Link to='/' className = ' bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out absolute left-[16%] top-[4%] '>Home</Link>)}

  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>} />
    <Route path='/Details/:id' element={<Details/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
   
  </Routes>

  </div>
  ); 
}
export default App;
