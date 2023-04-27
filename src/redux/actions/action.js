import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constants/constant"

export const addToCart = (data) => {
    console.log('addToCart Action called', data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removefromCart = (data) => {
    console.log('removefromCart Action called', data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const emptyCart = () => {
    console.log('emptyCart called')
    return {
        type: EMPTY_CART,
    }
}