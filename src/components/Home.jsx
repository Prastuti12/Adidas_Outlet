import React from "react";
import Section1 from "./Section1/section1";
import ProductListng from "./ProductListing/ProductListng";
import Clothing from './Footer/clothingSection'
import Footer from './Footer/Footer'
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />  {/* Navbar component */}  {/* This will be added in the final version */}  {/* Add your own Navbar component */}
      <Section1 />
      <ProductListng />
      <Clothing />
      <Footer />
    </>
  );
};

export default Home;
