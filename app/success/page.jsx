
"use client";
import Link from "next/link"
import { useStateContext } from "../context/StateContext"
import { BsBagCheckFill } from 'react-icons/bs'
import { useEffect } from "react";
const SuccessPage = () => {
    const {setTotalPrice,setTotalQuantities,setcartItems} = useStateContext();

    useEffect(()=>{
        localStorage.clear();
        setcartItems([])
        setTotalPrice(0);
        setTotalQuantities(0);
    })
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank you for buying using our application </h2>
            <p className="email-msg">Check your email inbox for receipt</p>
            <p className="description">
                If you have any questions, please email us on 
                <a href="mailto:@paccy.com" className="email">mailto:@paccy.com</a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default SuccessPage