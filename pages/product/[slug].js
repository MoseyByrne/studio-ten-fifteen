import React, { useState } from 'react';
import { AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decreaseQty, increaseQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <div
      className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])}  /> {/* add className="product-detail-image" after [index])} to make the images on the details page uniform */}
          </div>
          <div
          className="small-image-container">
            {image?.map((item, i) => (
              <img 
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}             
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
          <p className='price'>${price}</p>
          <div className='quantity'>
            <h3>Quantity</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decreaseQty}><AiOutlineMinus /></span>
              <span className='num' onClick="">{qty}</span>
              <span className='plus' onClick={increaseQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type='button' className='buy-now' onClick="">Buy Now</button>
          </div>
        </div>
      </div>

     <div className='maylike-products-wrapper'>
      <h2>You may also like</h2>
      <div className='marquee'>
        <div className='maylike-products-container track'>
          {products.map((item) => (
          <Product key={item._id}
          product={item} />
          ))}
        </div>
      </div>
      </div>      
    </div>
  )
}

// If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

// When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

export const getStaticPaths = async () => {
  const query =  `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

// Next.js will pre-render this page at build time using the props returned by getStaticProps. You should use getStaticProps if: The data required to render the page is available at build time ahead of a user’s request

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // * means fetch all
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails