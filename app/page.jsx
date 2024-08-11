import { Banner,Product,Footer, FooterBanner } from "./components"
import { client } from "./lib/client"
const index =async () => {

  const query= "*[_type == 'product']"
  const products= await client.fetch(query)
  const bannerQuery= "*[_type == 'bannerb']"
  const bannerData= await client.fetch(bannerQuery)
 
  console.log(bannerData);

  return (
    <>

   <Banner heroBanner={bannerData?.[0]}/>
  

    <div className='products-heading'>
      <h2 >Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=>(
       <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData?.[0]}/>
    </>
  )
}

export default index
