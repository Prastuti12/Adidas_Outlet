import React from 'react';
import ProductCard from '../ProductCard/productCard';
import "../ProductListing/ProductListing.css";
import ProductCardTwo from "../ProductCard/ProductCardTwo";
import Divider from "../ProductCard/Divider";
import Filter from '../ProductCard/Filter';

const ProductListng = () => {
  return (
    <>
      <Filter />

      <div className='ProductListing'>

        <ProductCard />
      </div>
      <Divider />
      <Filter />

      <div className='ProductListing'>
        <ProductCardTwo />
      </div>
    </>

  )
}

export default ProductListng