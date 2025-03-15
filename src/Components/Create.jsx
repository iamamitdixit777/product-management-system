import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {

  const navigate= useNavigate();

  const [products,setproducts]= useContext(ProductContext);

  const[title,settitle] = useState("");

  const[image,setimage]=useState("");

  const[category,setcategory]= useState("");

  const[price,setprice]=useState("");

  const[desciption,setdescription]= useState("");

  const AddProductHandler = (e)=>{
    e.preventDefault();
    if (
         title.trim().length < 5 || 
         image.trim().length <5||
         category.trim().length <5||
         price.trim().length <1||
         desciption.trim().length < 5
        )
    {
      alert("Each and Every input must have greatet than 4 characters ");
      return;
    }
  
    const product ={
      
      id:nanoid(),
      title,
      image,
      category,
      price,
      desciption,
    }
    setproducts([...products,product]);
    localStorage.setItem('products',JSON.stringify([...products,product]));
    navigate('/');
    toast.success("Product Added Successfully");

  }

  return (

<form  onSubmit={ AddProductHandler } className='w-screen h-screen flex flex-col items-center   p-[5%]'> 
  <h1 className=' mb-5 text-2xl w-1/2 '>Add New Products </h1>

  <input
        type='url'
        placeholder='image link'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2  mb-3 ' 
        onChange={(e)=> setimage(e.target.value) } 
        value={image}
   />

  <input
        type='text'
        placeholder='Title'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2  mb-3 ' 
        onChange={(e)=> settitle(e.target.value) } 
        value={title}
   />


   <div className='w-1/2 flex justify-between' >
   <input
        type='text'
        placeholder='category'
        className='text-1xl bg-zinc-100 rounded p-3 w-[48%]  mb-3 ' 
        onChange={(e)=>setcategory(e.target.value) } 
        value={category}
   />

  <input
        type='number'
        placeholder='price'
        className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3 ' 
        onChange={(e)=> setprice(e.target.value) } 
        value={price}
   />
   </div>
   <textarea 
    onChange={(e)=>setdescription(e.target.value) } 
    value={desciption} placeholder='Enter Product Description Here...'
    className='text-1xl bg-zinc-100 rounded p-3 w-1/2  mb-3 ' rows='10'>

   </textarea>

<div className='w-1/2'>

< button
 className='py-2 px-5 border rounded text-blue-400 border-blue-600 ' >Add New Products

</button>

</div>

</form>
  







  













  ) 
}

export default Create;
