import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner";

const ProductContainer = () => {
   
    
    const products = useSelector((state)=>state.all.products);
    console.log(products)
    // const {id,title}=()
    return (
    <>
            
              { Object.keys(products).length==0?
                  <div className="loader">
                  <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
              </div>:
              
              <div className="row">
                  {
                     products.map(data=>
                        <div className="col-lg-3">
                      <Link to ={`/productDetails/${data.id}`}><div className="product">
                        <img src={data.image}/>
                        <p>{data.id}</p>
                      </div></Link>
                  </div>
                        )
                  }
              </div>}
              </>
         
        
    );
};

export default ProductContainer;