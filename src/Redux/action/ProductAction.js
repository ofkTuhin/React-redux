import { ActionType } from "../constants/actionType"
import fakeApi from "../../FakeApi/fakeApi"


export const fetchProducts=()=>async(dispatch)=>{
    const response=await fakeApi.get('/products');
    dispatch({
        type:ActionType.FETCH_PRODUCTS,
        payload:response.data
    })

}

export const fetchProduct=(id)=>async(dispatch)=>{
    const response=await fakeApi.get(`/products/${id}`);
    dispatch({
        type:ActionType.SELECTED_PRODUCT,
        payload:response.data
    })

}
   
   



// export const setProducts = products=>{
//     return{
//         type:ActionType.SET_PRODUCTS,
//         payload:products
//     }
// }

export const selectedProducts = product=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:product,
    };
}
export const removeSelectedProducts = product=>{
    return{
        type:ActionType.REMOVE_SELECTED_PRODUCT,
       
    };
}