"use client";

import { useState,useEffect,createContext,useContext } from 'react'
import toast from 'react-hot-toast'

export const Context= createContext();

export const StateContext= ({children})=>{
    const [showCart, setshowCart] = useState(false)
    const [cartItems, setcartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState()
    const [qty,setQty] =useState(1) ;

    const incQty =()=>{
        setQty((prevQty)=> prevQty+1 )
    }
    
    
    const decQty =()=>{
        setQty((prevQty)=> {
            if(prevQty<2) return prevQty;
    
            return prevQty-1;
        } )
    }

    const onAdd = (product,quantity)=>{

        const checkProductInCart = ((product)=> cartItems.find((item)=> item._id === product._id));

        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price*quantity);
        setTotalQuantities((prevTotalQuantity)=> prevTotalQuantity + quantity);
        // When product is already in cart
        if(checkProductInCart){
         
         const updatedCartItems= cartItems.map((cartItem)=>{
             if(cartItem._id === product._id){
                 return {
                     ...cartItem,
                     quantity: cartItem.quantity + quantity
                    }
                }
            })
            setcartItems(updatedCartItems);
        }
        // New product in the cart
        else{
            
            product.quantity=quantity;
            setcartItems([...cartItems,{...product}]);
        }
        toast.success(`${quantity} ${product.name} has been added to cart`)
      }
    return (
        <Context.Provider value={{ 
                   cartItems,
                   showCart,
                   totalPrice,
                   totalQuantities,
                   qty,
                   incQty,decQty,onAdd}}>
            {children}
        </Context.Provider>
    )

}

 export const useStateContext = ()=>useContext(Context)