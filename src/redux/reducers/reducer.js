import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants/constant"

export const cartData = ((data=[], action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log('reducer called', action)
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.log('Remove-from-cart-action', action)
            // data.length = data.length? data.length - 1 : [];
            const remainingItem = data.filter((item)=>item.id!==action.data);
            console.log('Remaining Item', remainingItem)
            return [...remainingItem] 
        case EMPTY_CART:
            data = [];
            return [...data]    
        default:
            return data;    
    }
})