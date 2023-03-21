import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { additem, removeitem, decItem } from '../store/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  const [cartProducts, setCartProducts] = useState([])

  // useEffect(() => {
  //   if(products){
  //     const items = products.map((item) => {
  //       return {...item, count:1}
  //     })
  //     console.log(items)
  //     setCartProducts(items)
  //   }
  // },[products])

  // const cartItems = useSelector(state => state.cart)

  const cartRemover = (productId) => {
    dispatch(removeitem(productId));
    toast.success('Item remove successfully', {
      autoClose: 2000,
      position: "top-center"
    })
  };

  const addItem = (products) => {
    if (products.qty < 7) {
      dispatch(additem(products))
    } else {
      toast.error('Max limit exceed', {
        autoClose: 2000,
        position: "bottom-right"
      })
    }
  };

  const removeItem = (productid) => {
    dispatch(decItem(productid))
  };

  return (
    <div>
      <h3>My Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((products) => (
            <div className='cartCard' key={products.id}>
              <img src={products.images} alt="" />
              <h4>{products.title} <br /> <h5>Catg : {products.category.name}</h5></h4>
              <h5>Rs : {products.price}</h5>
              <div>
                <button className='btn1' onClick={() => removeItem(products.id)}>−</button>
                <input disabled type="text" value={products.qty} className="input" />
                <button className='btn2' onClick={() => addItem(products)}>+</button>
              </div>
              <button onClick={() => cartRemover(products.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Cart;