import React, { useContext } from 'react'
import { ProductContext } from '../Utils/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[products]  = useContext(ProductContext);
  let  distinct_category = products && products.reduce((acc,value)=>[...acc,value.category],[]);
  distinct_category=[...new Set(distinct_category)];

 
  const color = ()=>{
      return `rgba(${ (Math.random()*255).toFixed()}, ${ (Math.random()*255).toFixed()},${ (Math.random()*255).toFixed()} ,0.4)`;
  }
  return (
    
    <nav className='w-[15%] h-full bg-gray-100 flex flex-col items-center pt-5  '>

    <a className='py-2 px-5 border rounded text-blue-400 border-blue-600 ' href='/create'> Add New Products

    </a>
    <hr className='w-[75%] my-3'/>
    <h1 className='text-2xl  mb-3 w-[80%]'> Category  Filter </h1>

    <div className='w-[80%]'>
        

    { distinct_category.map((c, i) => {
  
  const correctedCategory = c === 'jewelery'? 'jwellery':c;
  return (
    <Link key={i} to={`/?category=${c}`} className='mb-3 flex items-center'>
      <span style={{backgroundColor: color()}} className='rounded-full w-[15px] mr-2 h-[15px]'></span>
      {correctedCategory}
    </Link>
  );
})}
       

    </div>
  </nav>

  )
}

export default Navbar
