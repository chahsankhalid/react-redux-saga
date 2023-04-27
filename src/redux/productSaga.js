import {put, takeEvery} from 'redux-saga/effects' 
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constants/constant'
import axios from "axios"

let mainresponse = ''
let searchresponse = ''
function* getProducts(){
     let data = yield axios.get('http://localhost:3500/product')
     .then((response)=>{
         mainresponse = response.data
     });
     
     yield put({type: SET_PRODUCT_LIST,mainresponse})
}

function* searchProducts(data){
    console.log('SEARCH DATA',data.data)
    let searchresult = yield axios.get(`http://localhost:3500/product?q=${data.data}`)
    .then((response)=>{
        console.log('SEARCH PRODUCT RESPONSE', response.data)
        searchresponse = response.data
    });
    
    yield put({type: SET_PRODUCT_LIST, mainresponse: searchresponse})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga