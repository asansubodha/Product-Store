import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const create = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:"",
  });

  const {createProduct} = useProductStore();

  const handleAddProduct = async() =>{
    const {success, message } = await createProduct(newProduct);
    console.log("Success", success);
    console.log("Message", message);
  };

  return (
    <div className='max-w-lg md:mx-auto'>
      <div className='text-center mb-8 mt-20'>
        <h1 className='text-4xl font-bold'>Create New Product</h1>
      </div>
      
      <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
        <div className='space-y-4'>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
            />
            <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder='Product Price'
            name='price'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
            />
            <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder='Image URL'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
            />
            <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={handleAddProduct}
            >
            Add Product
            </button>
        </div>
        
      </div>      
    </div>
  )
}

export default create
