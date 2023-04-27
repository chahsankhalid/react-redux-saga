
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,emptyCart,removefromCart } from '../redux/actions/action';
import { productList } from '../redux/actions/productAction';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData)
  
  console.log('store data in main from saga', data)
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <>
      {/* <button onClick={() => {dispatch(addToCart(product))}}>Add to cart</button>
      <button onClick={() => {dispatch(removefromCart(product))}}>Remove from cart</button>
      <button onClick={() => {dispatch(productList())}}>Product List</button> */}
      <button onClick={() => {dispatch(emptyCart())}}>Empty Cart</button>
      <div className='product-container'>
        {
        data.map((item)=>(
        <div key={item.id} className='product-item'>
          <img src={item.photo} alt=""/>
          <div>Name: {item.name}</div>
          <div>Color: {item.color}</div>
          <div>Price: {item.price}</div>
          <div>Category: {item.category}</div>
          <div>
            <button onClick={() => {dispatch(addToCart(item))}}>Add to cart</button>
            <button onClick={() => {dispatch(removefromCart(item.id))}}>Remove from cart</button>
          </div>
        </div>
        )
        )
        }
      </div>
    </>
  );
}

export default Main;
