import Image from "next/image"
import Link from "next/link"
const Banner = () => {
  return (
    <div className='hero-banner-container'>
      <div className=''>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <Image 
          //  src={}
           width={450}
           height={450}
           alt="headphones"
           className="hero-banner-image"
           />

           <div>
            <Link href="/product/ID">
            
            <button type="button">BUTTON TEXT</button>
            </Link>
           </div>
      </div>

    </div>
  )
}

export default Banner