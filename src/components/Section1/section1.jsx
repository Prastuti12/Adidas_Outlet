import React from 'react';
import "../Section1/section1.css";
import CategoryCard from '../Category/categoryCard';


const section1 = () => {
    const cardData = [
        {
            image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_men_outlet_iwp_d_e9fc2f3a8c.jpg"
            , title: 'MEN'
        },
        {
            image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_women_outlet_iwp_d_d23e216e9f.jpg"
            , title: 'WOMEN'
        },
        {
            image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_kids_outlet_iwp_d_38afffa36c.jpg"
            , title: 'KIDS'
        },
        {
            image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_outlet_slides_iwp_tile_image_d_fb5c60c28d.jpg"
            , title: 'SLIDES'
        },
        {
            image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/em_in_summer_wear_iwp_tile_d_04c921dbf0.jpg"
            , title: 'SUMMER WEAR'
        }
    ]


    return (
        <div className='section1'>
            <div className='heading'>
                <h1 className='main_heading'>Shoes, Clothing & Accessories Sale: Up to 60% <br /> Off</h1>
            </div>
            <div className='cardSection' style={{
              
            }}>
                {cardData.map((card, index) => (
                    <CategoryCard key={index} image={card.image} title={card.title} />
                ))}
            </div>

        </div>
    )
}

export default section1