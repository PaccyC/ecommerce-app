import { Banner,Product,Footer } from "./components"
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
        <Product/>
      ))}
    </div>

    <Footer/>
    </>
  )
}

export default index