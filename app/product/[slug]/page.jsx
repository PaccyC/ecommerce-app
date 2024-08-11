
import React from 'react'
import { urlFor,client } from '@/app/lib/client'
import { AiOutlineMinus,AiOutlineStar,AiFillStar,AiOutlinePlus } from 'react-icons/ai'
import { Product, ProductDetailsClient } from '@/app/components'



const ProductDetails = async({params:{slug}}) => {
  const query= `*[_type == 'product' && slug.current == '${slug}'][0]`
  const productsQuery= "*[_type == 'product']"
  const product= await client.fetch(query)
  const products= await client.fetch(productsQuery)

  
  
  return (
 
    <div>
     <ProductDetailsClient product={product} products={products} />
    </div>
  )
}

export default ProductDetails
