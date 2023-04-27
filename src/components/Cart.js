import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartData = useSelector((state)=>state.cartData)
    const amount = cartData.length && cartData.map((item)=>item.price).reduce((prev, next)=> prev + next)
    console.log("Amount", amount)
    return(
        <><h1>Cart Component</h1>
         <div className="container">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Category</th>
                </thead>
                <tbody>
                {
                    cartData.map((item)=>(<tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>))
                }
                </tbody>
            </table>
            <div className="">
                <div>Amount: {amount}</div>
                <div>Discount: {amount/10}</div>
                <div>Total: {amount - (amount/10)}</div>
            </div>
         </div>
        </>
    )
}

export default Cart