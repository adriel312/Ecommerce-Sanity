import React from 'react'

import {Product, FooterBanner, HeroBanner} from '../components';
import { client } from '../lib/client';

const Home = (products, bannerData) => {
  return (
    <>
      <HeroBanner heroBanner={products.bannerData.length && products.bannerData[0]}/>
      <div className='products-heading'>
         <h2>Produtos</h2>
         <p>Subtitulo que não sei o que colocar</p>
      </div>
      <div className='products-container'>
        {products.products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: {products, bannerData}
  }
}

export default Home