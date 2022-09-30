import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData[0]} />
      <div className='products-heading'>
        <h2>Fabric Favorites</h2>
        <p>Variety of fabrics</p>
      </div>

      <div className="products-container">
      {products && (products.map(product => <Product key={product._id} product={product} />))}
    </div>


      <FooterBanner />
    </div>
  );
}

// getServerSideProps used in Next.js to fetch data from an API
export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]'; // * means fetch all
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;