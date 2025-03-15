import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../Utils/Context';
import { toast } from 'react-toastify';

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams(); 
  const[product,setproduct]=useState({
    id:'',
    title:'',
    image:'',
    category:'',
    price:'',
    desciption:'',

  });

  const changehandler = (e)=>{
      setproduct({...product,[e.target.name]:e.target.value});
  }


  useEffect(() => {
      setproduct(products.filter(p=>p.id==id)[0]);
  }, [id]);

 

  const  AddProductHandler = (e)=>{
    e.preventDefault();
    if (
       product.title.trim().length < 5 || 
       product.image.trim().length <5||
       product.category.trim().length <5||
       product.price.trim().length <1||
       product.description.trim().length < 5

        )
    {
      alert("Each and Every input must have greatet than 4 characters ");
      return;
    }
  
    const pi = products.findIndex(p=>p.id==id);
    const copyData = [...products];
    copyData[pi]={...products[pi],...product};
   

    setProducts(copyData);
    localStorage.setItem('products',JSON.stringify(copyData));
    toast.success("Edit Succssfully");
    console.log("Navigating back...");
    navigate(-1);

  }

  return (
    <form onSubmit={AddProductHandler} className='w-screen h-screen flex flex-col items-center p-[5%]'>
      <h1 className='mb-5 text-2xl w-1/2'>Edit Product</h1>
      <input
        type='url'
        placeholder='Image link'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name="image"
        onChange={changehandler}
        value={product && product.image}
      />
      <input
        type='text'
        placeholder='Title'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name='title'
        onChange={changehandler}
        value={product && product.title}
      />
      <div className='w-1/2 flex justify-between'>
        <input
          type='text'
          placeholder='Category'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          name='category'
          onChange={changehandler}
          value={product && product.category}
        />
        <input
          type='number'
          placeholder='Price'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          name='price'
          onChange={changehandler}
          value={product && product.price}
        />
      </div>
      <textarea
       name='description'
        onChange={changehandler}
        value={product && product.description}
        placeholder='Enter Product Description Here...'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        rows='10'
      />
      <div className='w-1/2'>
        <button className='py-2 px-5 border rounded text-blue-400 border-blue-600'>
          Edit Product 
        </button>
      </div>
    </form>
  );
};

export default Edit;
