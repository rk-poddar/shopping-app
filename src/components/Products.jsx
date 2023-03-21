import React, { useEffect, useState } from 'react'
import { additem } from '../store/cartSlice';
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from '../store/productSlice';
import { STATUS } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const {data: products, status} = useSelector((state)=>state.product)

    // navigate the page
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchProducts = async() => {
        //     const response  = await fetch('https://api.escuelajs.co/api/v1/products');
        //     const data = await response.json();

        //     setProducts(data);
        //     // console.log(data)
        // }
        // fetchProducts();

    },[])

    const cartHandler = (products) => {
        // navigate("/cart");
        dispatch(additem(products));
        // Set to 3sec
		toast.success('Added to Cart', {
            autoClose:2000,
            position: "bottom-right"
        })
    };

    // check the status 
    if(status === STATUS.LOADING){
        return <h2>Loading....</h2>
    };

    if(status === STATUS.ERROR){
        return <h2>Something went wrong...</h2>
    };
    
    return (
        <div>
            <h5>Products Components</h5>
            <div className='products'> 

                {products.map((products) => (
                        <div className='card' key={products.id}>
                            <img src={products.images} alt="" />
                            <h4>{products.title}</h4>
                            <h5>Catg : {products.category.name}</h5>
                            <h5>Rs : {products.price}</h5>
                            <button onClick={() => cartHandler(products)} className='btn'>Add to Cart</button>
                        </div>
                    ))
                }
            </div> 
            <ToastContainer/>
        </div>
    )
}

export default Products