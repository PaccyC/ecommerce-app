"use client";

import { useState,useEffect,createContext,useContext } from 'react'
import toast from 'react-hot-toast'

export const Context= createContext();

export const StateContext= ({children})=>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setcartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty,setQty] =useState(1) ;

    let foundProduct;
    let index;

const incQty =()=>{
        setQty((prevQty)=> prevQty+1 )
    }
    
    
    const decQty =()=>{
        setQty((prevQty)=> {
            if(prevQty<2) return prevQty;
    
            return prevQty-1;
        } )
    }

    const onAdd = (product, quantity) => {
        
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
    
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem._id === product._id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity,
                    };
                }
                return cartItem;
            });
            setcartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setcartItems([...cartItems, { ...product }]);
        }
    
        toast.success(`${quantity} ${product.name} added to the cart.`);
    };
    
    const toggleCartItemQuantity = ( id, value)=>{
        foundProduct = cartItems.find((item)=> item._id === id);
        index = cartItems.findIndex((product)=> product._id === id);

        const newCartItems= cartItems.filter((item)=> item._id !==id);
        if( value === "inc"){
        setcartItems([...newCartItems,{...foundProduct, 
                  quantity: foundProduct.quantity + 1}])
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price)  ;
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + 1);        
        }
        else if(value === "dec"){

            if( foundProduct.quantity >1){
                setcartItems([...newCartItems,{...foundProduct, 
                  quantity: foundProduct.quantity -1}])
                setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price)  ;
                setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities-1);
            }
        }
    }

    const onRemoveItem= (product)=>{
        foundProduct = cartItems.find((item)=> item._id === product._id);
        const newCartItems= cartItems.filter((item)=> item._id !==product._id);

        setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price*foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities - foundProduct.quantity);
        setcartItems(newCartItems);
    }
    return (
        <Context.Provider value={{ 
                   cartItems,
                   showCart,
                   totalPrice,
                   totalQuantities,
                   qty,
                   setShowCart,
                   incQty,
                   decQty,
                   onAdd,
                   toggleCartItemQuantity,
                   onRemoveItem,
                   setcartItems,setTotalQuantities,
                   setTotalPrice}}>
            {children}
        </Context.Provider>
    )

}

 export const useStateContext = ()=>useContext(Context)