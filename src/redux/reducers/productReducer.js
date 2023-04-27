import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants/constant"

export const productData = ((data=[], action) => {
    switch(action.type){
        // case PRODUCT_LIST:
        //     console.log('Product list reducer', action)
        //     return [action.data];
        case SET_PRODUCT_LIST:
                console.log('SET Product list reducer', action)
                return [...action.mainresponse];     
        default:
            return data;    
    }
})