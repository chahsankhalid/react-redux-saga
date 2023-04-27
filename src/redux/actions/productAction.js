import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constants/constant"
// import axios from "axios"

export const productList = () => {
    // let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // .then((response)=>{
    //     console.log(response.data)
    // });
    // console.log('axios data', data)
    // console.log('Product list action', data)
    return {
        type: PRODUCT_LIST,
        // data: data
    }
}

export const productSearch = (query) => {
    return{
        type: SEARCH_PRODUCT,
        data: query
    }
}

// export const setproductList = (data) => {
//     // let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     // .then((response)=>{
//     //     console.log(response.data)
//     // });
//     // console.log('axios data', data)
//     console.log('set action')
//     return {
//         type: SET_PRODUCT_LIST,
//         data: data
//     }
// }