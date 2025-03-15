import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom';
import{ProductContext} from'../Utils/Context';
import Loading from './Loading';
import axios from '../Utils/axios';

const Home = () => {
   const[products]  = useContext(ProductContext);
   const {search} = useLocation();
   const category = decodeURIComponent(search.split("=")[1]);
   const[filterproducts,setfilterproducts]=useState(null);

   const getproductcategory= async() => {
    try {

      const{data}= await axios.get(`/products/category/${category}`);
      setfilterproducts(data);
    }

    catch(err){
      console.log(err)

    }

   }

   useEffect(()=>{
    if(!filterproducts || category=='undefined')
       setfilterproducts(products);
     if(category != "undefined") 

        // getproductcategory();
        setfilterproducts(products.filter((p)=>p.category==category))

   },[category,products]);

  return  products? (
    <>
    <Navbar/>
   
    <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden bg-violet-300 overflow-y-auto'>
      {filterproducts && filterproducts.map((p,i) => (

       <Link key={p.id}
to = {`/details/${p.id}`} className=' mr-3 mb-3 card p-3 border shadow w-[18%] h-[30vh] flex  flex-col items-center justify-center'>
<div  className='  hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
style={{   backgroundImage:
          `url(${p.image})`,
     }}>
</div>
<h1 className='hover:text-blue-300'>{p.title}</h1>

       </Link>
      
     ))}
   </div>

   </>
  ) : (

<Loading/>

  );

};

export default Home
