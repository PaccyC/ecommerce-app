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

// # Warning: Do not add secrets (API keys and similar) to this file, as it source controlled!
// # Use `.env.local` for any secrets, and ensure it is not added to source control

// NEXT_PUBLIC_SANITY_PROJECT_ID="srq55yft"
// NEXT_PUBLIC_SANITY_DATASET="production"
// NEXT_PUBLIC_SANITY_TOKEN=skma6IDZtRHN14ff6xRkwx5DI6rsxLyYGxFTdiV18YsOgfqHIUmGta4FjrfkmVfZGVpOMKXaLEgURe3ioCvKZrOEF0nVfeh2jaILvrxrxOTrjfcnlI2nwWNdr7WQKHtCdAIArYoSjICuVsgCEw2MejPMRQDKzzhLtxoyAQ8fug2zEcIWU4zf