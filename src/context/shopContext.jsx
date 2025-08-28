import { children, createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export const ShopContextProvider = (props)=>
{
    const [cartItems , setCartItems] = useState() ;
    
    useEffect(()=>
    {
       const data = localStorage.getItem("shopItem") ;
       setCartItems(!!JSON.parse(data)? JSON.parse(data) : [])
    },[])

    useEffect(()=>
    {
        if(cartItems != undefined)
        {
            localStorage.setItem("shopItem", JSON.stringify(cartItems))
        }
    },[cartItems])
    const addToCart = (itemId)=>
    {
        if(!cartItems.find((i)=> itemId===i.id))
            setCartItems([...cartItems,{id : itemId , count : 1}])
        else(setCartItems(cartItems.map((i)=>
        {
            if(i.id === itemId)
                return {...i, count : i.count + 1}
            else
                return i
        })))
    }

    const removeFromCart = (itemId)=>
    {
        setCartItems(cartItems.map((i)=>
        {
            if(i.id === itemId)
                return {...i, count : i.count === 0 ? 0 : i.count - 1}
            else
                return i
        }))
    }
    const resetLocalStorage = ()=>
    {
        setCartItems([])
        localStorage.removeItem("shopItem")
    }


    const shopContextValue = {cartItems , addToCart , removeFromCart ,resetLocalStorage}
    
    return (
        <shopContext.Provider value={shopContextValue}>{props.children}</shopContext.Provider>
    ) 
}