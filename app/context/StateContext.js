"use client";

import { useState,useEffect,createContext,useContext } from 'react'
import toast from 'react-hot-toast'

const Context= createContext();

const incQty =()=>{
    setQty((prevQty)=> prevQty+1 )
}


const decQty =()=>{
    setQty((prevQty)=> {
        if(prevQty<2) return prevQty;

        return prevQty-1;
    } )
}
export const StateContext= ({children})=>{
    const [showCart, setshowCart] = useState(false)
    const [cartItems, setcartItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantities, setTotalQuantities] = useState()
    const [qty,setQty] =useState(1) ;

    return (
        <Context.Provider value={{ 
                   cartItems,
                   showCart,
                   totalPrice,
                   totalQuantities,
                   qty,
                   incQty,decQty}}>
            {children}
        </Context.Provider>
    )

}