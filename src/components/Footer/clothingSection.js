import React from 'react';
import '../../App.css'
const ClothingCategories = () => {
    const categories = [
        'Black Shoes', 'White Sneakers', 'White T Shirts', 'Black T Shirts',
        'Black Caps', 'Black Hoodies', 'Black Jackets', 'Black Pants',
        'Blue Hoodies', 'Black Sneakers', 'Red Shoes', 'Pink Shoes',
        'Black Bras', 'Black Sweatshirts', 'White Hoodies', 'White Jackets',
        'White Shirts', 'Blue Sweatshirts', 'Yellow T Shirts', 'Black Sandals',
        'Shoes', 'T Shirts', 'Shirts', 'Jackets', 'Bags', 'Sandals', 'Caps',
        'Shoes', 'T Shirts', 'Shirts', 'Jackets', 'Bags', 'Sandals',
        'Caps', 'Sneakers', 'Shorts', 'Hoodies', 'Slides', 'Flip Flops',
        'Originals', 'Jerseys', 'Sweatshirts', 'Water Bottle', 'Pants',
        'Tracksuits', 'Socks', 'Gloves', 'Football Boots', 'Polo Shirt',
        'Tights', 'Hoodies', 'Long Sleeves', 'Short Sleeves', 'Swimwear',
        'Ankle Socks', 'Face Covers', 'Men Shirts', 'Women Dresses',
        'Men Caps', 'Women Sandals', 'Men Slides', 'Lifestyle Shirts',
        'Lifestyle T Shirts', 
    ];

    return (
        <div className="bg-white p-0  sm:p-4" style={{ scale: "0.89" }}>
            <h2
                className="font-bold mb-6 text-lg sm:text-2xl"
                style={{ fontFamily: 'Arial, sans-serif' }}
            >
                OUR CLOTHING AND SHOE CATEGORIES
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6" style={{gap:"0.6rem"}}>
                {categories.map((item, index) => (
                    <div key={index}>
                        <p className="text-sm text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-6" style={{ textAlign: 'center' }}>
                <p className="font-bold adidasClothes" style={{ textAlign: "start" }}>adidas Clothes and Shoes on Sale</p>
                <p className='paragraphStyle'>
                    Shop online for adidas shoes and clothes on sale and save on everything you need to get in the game. Put in the miles or just keep up with the kiddos in cushioned running shoes. Takeover the field or court in adidas soccer, football and basketball shoes on sale. Rock the 3-Stripes in comfy track pants and jackets, sports bras and t-shirts. Whatever you and your family need, you'll find it on sale at adidas online.
                </p>
            </div>
        </div>
    );
};

export default ClothingCategories;
