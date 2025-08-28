import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/shopContext";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import { href } from "react-router-dom";


function Cart() {

    const {cartItems ,resetLocalStorage} = useContext(shopContext)
    let isInCart ;
    if(cartItems?.length > 0)
        isInCart = true ;
return (
    <React.Fragment>
        <h2>سبد خرید</h2>
        {cartItems?.length === 0 ? (<p>سبد خرید خالی است</p>) : (
        <div className="row">
            {products.map((p)=>
            {
            if(cartItems?.some((i)=>i.id === p.id && i.count > 0))
                return  <ProductCard key={p.id} product={p}/>
        }
        )}
        </div>)}
        {
          isInCart &&  <button className="btn btn-warning p-1 m-1" onClick={resetLocalStorage}>reset</button>
        }
    </React.Fragment>
);
}


export default Cart;

