import React from 'react';

const ClothingCategories = () => {
    const categories = [
        'Shoes', 'T Shirts', 'Shirts', 'Jackets', 'Bags', 'Sandals',
        'Caps', 'Sneakers', 'Shorts', 'Hoodies', 'Slides', 'Flip Flops',
        'Originals', 'Jerseys', 'Sweatshirts', 'Water Bottle', 'Pants',
        'Tracksuits', 'Socks', 'Gloves', 'Football Boots', 'Polo Shirt',
        'Tights', 'Hoodies', 'Long Sleeves', 'Short Sleeves', 'Swimwear',
        'Ankle Socks', 'Face Covers', 'Men Shirts', 'Women Dresses',
        'Men Caps', 'Women Sandals', 'Men Slides', 'Lifestyle Shirts',
        'Lifestyle T Shirts', 'Training T Shirts', 'Tennis Shirts',
        'Skateboarding Sneakers', 'Lifestyle Sneakers', 'Training Shirts',
        'Lifestyle Flip Flops', 'White Shoes', 'Black Dresses', 'Black Shirts',
        'Black Shoes', 'White Sneakers', 'White T Shirts', 'Black T Shirts',
        'Black Caps', 'Black Hoodies', 'Black Jackets', 'Black Pants',
        'Blue Hoodies', 'Black Sneakers', 'Red Shoes', 'Pink Shoes',
        'Black Bras', 'Black Sweatshirts', 'White Hoodies', 'White Jackets',
        'White Shirts', 'Blue Sweatshirts', 'Yellow T Shirts', 'Black Sandals',
        'Shoes', 'T Shirts', 'Shirts', 'Jackets', 'Bags', 'Sandals', 'Caps'
    ];

    // Style for the paragraph
    const paragraphStyle = {
        width: '100%', // Full width for mobile
        maxWidth: '88%', // Max width for desktop
        color: '#4B5563', // Gray color for text
        fontFamily: 'Arial, sans-serif', // Font family
        textAlign:"start"
    };

    return (
        <div className="bg-white" style={{ padding: "2rem", scale:"0.89" }}>
            <h2
                className="font-bold mb-6"
                style={{ fontFamily: 'Arial, sans-serif', fontSize: "1.35rem" }}
            >
                OUR CLOTHING AND SHOE CATEGORIES
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {categories.map((item, index) => (
                    <div key={index}>
                        <p className="text-sm text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-6" style={{ textAlign: 'center' }}>
                <p className="font-bold" style={{textAlign:"start"}}>adidas Clothes and Shoes on Sale</p>
                <p style={paragraphStyle}>
                    Shop online for adidas shoes and clothes on sale and save on everything you need to get in the game. Put in the miles or just keep up with the kiddos in cushioned running shoes. Takeover the field or court in adidas soccer, football and basketball shoes on sale. Rock the 3-Stripes in comfy track pants and jackets, sports bras and t-shirts. Whatever you and your family need, you'll find it on sale at adidas online.
                </p>
            </div>
        </div>
    );
};

export default ClothingCategories;
