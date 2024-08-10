import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/client";
import image from '../assets/images/headphones.jpeg'
const Banner = ({ heroBanner }) => {
  if (!heroBanner) {
    return null; // Return null if no heroBanner is passed
  }

  return (
    <div className='hero-banner-container'>
      <div className=''>
        <p className='beats-solo'>{heroBanner?.smallText ?? 'Default Small Text'}</p>
        <h3>{heroBanner?.midText ?? 'Default Mid Text'}</h3>
        <h1>{heroBanner?.largeText1}</h1>

        <img 
          src={urlFor(heroBanner.image)} 
           alt="headphones"
           className="hero-banner-image"
        />
        
        <div>
          <Link href={`/product/${heroBanner?.product ?? ''}`}>
            <button type="button">{heroBanner?.buttonText ?? 'Shop Now'}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner?.desc ?? 'No description available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner