import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductContainer from '../ProductContainer/ProductContainer';

import {fetchProducts} from '../../Redux/action/ProductAction'

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
      
   },[dispatch])
    return (
        <div className="container">
        
        <ProductContainer ></ProductContainer>
        
          
        </div>
    );
};

export default Product;