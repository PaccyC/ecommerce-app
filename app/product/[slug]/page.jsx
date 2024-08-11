
"use client";
import React, { useState } from 'react'
import { urlFor,client } from '@/app/lib/client'
import { AiOutlineMinus,AiOutlineStar,AiFillStar,AiOutlinePlus } from 'react-icons/ai'
import { Product } from '@/app/components'
const ProductDetails = async({params:{slug}}) => {
const [index,setIndex]= useState(0)
  const query= `*[_type == 'product' && slug.current == '${slug}'][0]`
  const productsQuery= "*[_type == 'product']"
  const product= await client.fetch(query)
  const products= await client.fetch(productsQuery)

  const {image,name,details,price} =product;
  return (
 
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} 
               className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ?
                  "small-image selected-image ":"small-image"
                }
                onMouseEnter={ ()=>setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" ><AiOutlineMinus /></span>
              <span className="num">0</span>
              <span className="plus"><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick="">Add to Cart</button>
            <button type="button" className="buy-now" onClick="">Buy Now</button>
          </div>
        </div>
      </div>

     <div className="maylike-products-wrapper">
      <h2>You may also like</h2>
      <div className="marquee">
        <div className="maylike-products-container track">
          {products.map((product)=>(
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails