import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductContainer from '../ProductContainer/ProductContainer';
import axios from 'axios'
import {setProducts,fetchProducts} from '../../Redux/action/ProductAction'

const Product = () => {
    
    // const products = useSelector((state)=>state);
    const dispatch= useDispatch()
//    const fetchProduct=async()=>{
//        const response= await axios
//        .get('https://fakestoreapi.com/products')
//        .catch(err=>{
//            console.log(err)
//        })
//        dispatch(setProducts(response.data))
//    }
   useEffect(()=>{
      dispatch(fetchProducts()) 
    //   
      
   },[])
    return (
        <div className="container">
        
        <ProductContainer ></ProductContainer>
        
          
        </div>
    );
};

export default Product;