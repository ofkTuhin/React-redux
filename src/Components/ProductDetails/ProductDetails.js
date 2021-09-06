
import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct,removeSelectedProducts } from '../../Redux/action/ProductAction';
import Loader from "react-loader-spinner";
import StarRatings from 'react-star-ratings';
import CursorZoom from 'react-cursor-zoom';
const ProductDetails = () => {
    const product = useSelector((state)=>state.single)
    console.log(product)
    const dispatch = useDispatch()
    const {id} =useParams()
    console.log(id)
    // const fetchProductDetail=async()=>{
    //     const res =await axios
    //     .get(`https://fakestoreapi.com/products/${id}`)
    //     .catch(error=>console.log(error))
    //     dispatch(selectedProducts(res.data))
    //     console.log(res.data)
    // }
    
    useEffect(()=>{
        
       dispatch(fetchProduct(id)) 

        return ()=>{
            dispatch(removeSelectedProducts())
        }

      
   
    
    },[dispatch])
    


    return (
        <div className="container">
            {
                Object.keys(product).length === 0 ? <div className="loader">
                    <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
                </div>:
            <div className="content">
                  <div className="row">
              <div className="col-lg-6">
                  <div className ="productImg">
                      {/* <img src={product.image} alt={product.title}/> */}
                      <CursorZoom
                image={{
                    src:product.image ,
                    width: 400,
                    height: 550
                }}
                zoomImage={{
                    src: product.image,
                    width: 400,
                    height: 550
                }}
                cursorOffset={{ x: 80, y: -80 }}
            />

                  </div>

              </div>
              <div className="col-lg-6">
                  <div className="productDesc">
                      <h3>{product.title}</h3>
                      <h6>{product.category}</h6>
                      <h5>${product.price}</h5>
                      <p>{product.description}</p>
                      <small>
                      <StarRatings
          rating={product.rating.rate}
          starRatedColor="orange"
         
          numberOfStars={5}
          name='rating'
          starDimension='25px'
        />
                      </small><br/>

                      <button className="btn btn-danger">Add To Cart</button>
                  </div>
              </div>
          </div>
                
                </div>
          

            }
           
        </div>
    );
};

export default ProductDetails;