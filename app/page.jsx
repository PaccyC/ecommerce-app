import { Banner,Product,Footer } from "./components"
const index = () => {
  return (
    <>

   <Banner/>

    <div className='products-heading'>
      <h2 >Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {['Product1','Product2' ].map((product)=>(
        <Product/>
      ))}
    </div>

    <Footer/>
    </>
  )
}

export default index