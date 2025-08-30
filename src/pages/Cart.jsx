import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import { href } from "react-router-dom";


function Cart() {

    const {cartItems ,resetLocalStorage} = useContext(shopContext)
    
    const isInCart =  cartItems?.reduce((sum,item)=>sum + item.count , 0)
    console.log(isInCart)
return (
    <React.Fragment>
        <h2>سبد خرید</h2>
        {isInCart == 0  ? (<p>سبد خرید خالی است</p>) : (
        <div className="row">
            {products.map((p)=>
            {
            if(cartItems?.some((i)=>i.id === p.id && i.count > 0))
                return  <ProductCard key={p.id} product={p}/>
        }
        )}
        </div>)}
        {
          isInCart > 0 &&  <button className="btn btn-warning p-1 m-1" onClick={resetLocalStorage}>حذف سبد خرید</button>
        }
    </React.Fragment>
);
}


export default Cart;

