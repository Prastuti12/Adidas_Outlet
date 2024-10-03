

import React, { useState } from 'react';
import '../ProductCard/productCard.css';
import hello from '../hello';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [imgSrc, setImageSrc] = useState(product.mainImage);
  const navigate = useNavigate();

  return (
    <div className='product_section' >
      <div className='Product'>
        <div className='product-image'>
          <img
            src={imgSrc}
            alt={product.ProductName}
            onMouseEnter={() => setImageSrc(product.revertImage)}
            onMouseLeave={() => setImageSrc(product.mainImage)}
            onClick={() => navigate('/hello')}
          />
        </div>
        <div className='variations'>
          {product.variations.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Variation ${index + 1}`}
              onMouseEnter={() => setImageSrc(img)}
            />
          ))}
        </div>
        <div className='product-details'>
          <p className='product-price'>{product.DiscountPrice}</p>
          <span className='discount'>{product.OriginalPrice}</span>
          <span className='discount-percentage' style={{ margin: "10px" }}>-{product.Discount} <span className='text-gray-600 text-xs'>Original Price</span></span>
          <p className='product-name'>{product.ProductName}</p>
          <p className='product-type'>{product.ProductType}</p>
          <p className='product-colors'>{product.colors} colours</p>
        </div>
      </div>
    </div>
  );
};

const productData = [
  {
    "id": 1,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f112bd38aab24636aa55aae700d35989_9366/superstar-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/superstar-shoes.jpg",
    "ProductName": "Superstar Shoes",
    "ProductType": "Originals",
    "DiscountPrice": "₹6,299.50",
    "OriginalPrice": "₹8,999.50",
    "Discount": "30%",
    "colors": "4",
    "variations": [
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/90b517905537460d9f3a7a2a7609ad07_9366/X_PLR_Path_Shoes_Black_ID0465_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4d975e141054d24a0eaaae700d36352_9366/Superstar_Shoes_White_EG4960_01_standard.jpg"
    ]
  },
  {
    "id": 2,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/618fa16732fe4d33a12787cc61e0ca8c_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/93e7395acff3446cb985363e29df63a7_9366/astoundrun-shoes.jpg",

    ]
  },
  {
    "id": 3,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/93e7395acff3446cb985363e29df63a7_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg"

    ]
  },
  {
    "id": 4,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/93e7395acff3446cb985363e29df63a7_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4d975e141054d24a0eaaae700d36352_9366/Superstar_Shoes_White_EG4960_01_standard.jpg"
    ]
  },
  {
    "id": 5,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4d975e141054d24a0eaaae700d36352_9366/Superstar_Shoes_White_EG4960_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/90b517905537460d9f3a7a2a7609ad07_9366/X_PLR_Path_Shoes_Black_ID0465_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    ]
  },
  {
    "id": 6,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/90b517905537460d9f3a7a2a7609ad07_9366/X_PLR_Path_Shoes_Black_ID0465_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    ]
  },
  {
    "id": 7,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/90b517905537460d9f3a7a2a7609ad07_9366/X_PLR_Path_Shoes_Black_ID0465_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    ]
  },
  {
    "id": 8,
    "mainImage": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/8271eef9e1d44116837c2a9b3c07be1d_9366/astoundrun-shoes.jpg",
    "revertImage": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/a395a4c377ce4638ad1b84d4cf2e6c6b_9366/astoundrun-shoes.jpg",
    "ProductName": "ASTOUNDRUN SHOES",
    "ProductType": "Men Running",
    "DiscountPrice": "₹2,089.50",
    "OriginalPrice": "₹3,799.50",
    "Discount": "45%",
    "colors": "3",
    "variations": [
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2e2231ac694da4bd1b56445a1afcde_9366/astoundrun-shoes.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/90b517905537460d9f3a7a2a7609ad07_9366/X_PLR_Path_Shoes_Black_ID0465_01_standard.jpg",
      "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    ]
  },


];

const ProductList = () => {
  return (
    <div className='product-list'>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

  );
};

export default ProductList;
