import React, { useEffect, useState } from 'react';
import './Product.css';

function Product() {
    const [source, setSource] = useState(0);
    const [hoveredRightMenuIndex, setHoveredRightMenuIndex] = useState(null);

    const images = [
        "https://m.media-amazon.com/images/I/51FBN6cRXTL._AC_UF1000,1000_QL80_.jpg",
        "https://www.popartuk.com/cdn/shop/files/159834-front.jpg?v=1689941951",
        "https://wallpapers.com/images/featured/naruto-poster-68amfejo0hg34i2t.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSource(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const rightMenu = [
        "English | Castellano",
        "Ultima Hora",
        "Romance Fluvial",
        "Lua de mel",
        "Fim de samana dois",
        "1o encontro",
    ];

    const leftMenu = [
        ["All Products", "Clothing", "Electronics", "Furniture", "Shoes", "Accessories"],
        ["All Products", "Home", "About", "Project", "Career", "Contact"],
        ["All Products", "New Arrivals", "Best Sellers", "Sales", "Customer Service", "Feedback"],
        ["All Products", "FAQ", "Shipping", "Returns", "Track Order", "Support"],
        ["All Products", "Blog", "News", "Events", "Press", "Media"],
        ["All Products", "Profile", "Settings", "Orders", "Wishlist", "Logout"],
    ];

     
    const leftMenuData = hoveredRightMenuIndex != null ? leftMenu[hoveredRightMenuIndex] : ["All Products", "Clothing", "Electronics", "Furniture", "Shoes", "Accessories"]
    ;

    return (
        <div id="main">
            <div id="centerMenu">
                <div id="rMenu">
                    <ul className='rightMenu'>
                        {rightMenu.map((item, index) => (
                            <li 
                                className="rightli" 
                                key={index}
                                onMouseEnter={() => setHoveredRightMenuIndex(index)}
                                onMouseLeave={() => setHoveredRightMenuIndex(null)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="center">
                    <div id="above">
                        <ul className='lisitems'>
                            <li id='l1'>Grandisa Sorterio</li>
                            <li id='l2'>Login | SignUp</li>
                            <li id='l3'>e-newsletter</li>
                            <li id='l4'>
                                <input type="text" placeholder='enter email...' />
                            </li>
                        </ul>
                    </div>
                    <img 
                        src={images[source]} 
                        alt={`Slide ${source + 1}`} 
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius:'0.4rem' }} 
                    />
                </div>

                <div id="lMenu">
                    <ul className='leftMenu'>
                        {leftMenuData.map((menu, menuIndex) => (
                            <li className="leftli" key={menuIndex}>{menu}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product;
