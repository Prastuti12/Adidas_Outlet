import React, { useState, useEffect } from 'react';
import './Nav.css';
import Disney from './assets/disney.jpeg'
import Marvel from './assets/marvel.jpeg'
import Predator from './assets/Predator.jpeg'
import Starwars from './assets/starwars.jpeg'
import Football from './assets/football.jpg'
import Runing from './assets/runing.jpg'
import Outdoor from './assets/outdoor.jpeg'
import Gym from './assets/gym.jpg'
import Cricket from './assets/cricket.png'
import Collaboration from './assets/Collaboration.jpg'
import Originals from './assets/originals.jpg'
import Logo from './assets/logo.png'

function Navbar() {
  const [vibrate, setVibrate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVibrate((prevVibrate) => !prevVibrate); // Toggle the vibrate state
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <>
      <header>
        <div className="top-bar">
          <span>EXTRA 5% OFF ON PREPAID ORDERS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="menu">
            <li>
              <a href="#">MEN</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column1">
                    <h3>FEATURED</h3>
                    <ul>
                      <li>New Arrivals</li>
                      <li>adidas Sportswear</li>
                      <li>Online Exclusives</li>
                      <li>Members Exclusive - Extra 15% Off</li>
                      <li>Essentials</li>
                      <li>Samba, Gazelle, Spezial</li>
                      <li><b>Personalizable Products</b></li>
                      <li><b>Sale</b></li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>FOOTWEAR</h3>
                    <ul>
                      <li>Running</li>
                      <li>Walking</li>
                      <li>Sneakers</li>
                      <li>Slides</li>
                      <li>Sandals</li>
                      <li>Gym & Training</li>
                      <li>Originals</li>
                      <li>Football</li>
                      <li>Slippers - Flip Flops</li>
                      <li>Cricket</li>
                      <li>Basketball</li>
                      <li>Tennis</li>
                      <li>Skateboarding</li>
                      <li>Swim</li>
                      <li>Hiking & Outdoor</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>CLOTHING</h3>
                    <ul>
                      <li>T-Shirts & Tank Tops</li>
                      <li>Shorts</li>
                      <li>Joggers & Track Pants</li>
                      <li>Originals</li>
                      <li>Football Jerseys & T-Shirts</li>
                      <li>Cricket Jerseys & Pants</li>
                      <li>Swimwear</li>
                      <li>Jackets</li>
                      <li>Sweatshirts</li>
                      <li>Tracksuits</li>
                      <li>Hoodies</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>ACCESSORIES</h3>
                    <ul>
                      <li>Socks</li>
                      <li>Caps & Headwear</li>
                      <li>All Bags</li>
                      <li>Gym & Training Bags</li>
                      <li>Backpacks</li>
                      <li>Gloves</li>
                      <li>Balls</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SPORTS</h3>
                    <ul>
                      <li>Running</li>
                      <li>Gym & Training</li>
                      <li>Football</li>
                      <li>Cricket</li>
                      <li>Tennis</li>
                      <li>Basketball</li>
                      <li>Hiking & Outdoor</li>
                      <li>Swim</li>
                      <li>Skateboarding</li>
                      <li>Golf</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SUSTAINABLE MATERIALS</h3>
                    <ul>
                      <li>Made with Recycled Material</li>
                      <li>Vegan</li>
                      <li>Organic Cotton</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">WOMEN</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column1">
                    <h3>FEATURED</h3>
                    <ul>
                      <li>New Arrivals</li>
                      <li>adidas Sportswear</li>
                      <li>Online Exclusives</li>
                      <li>Members Exclusive - Extra 15% Off</li>
                      <li>Essentials</li>
                      <li>Samba, Gazelle, Spezial</li>
                      <li><b>Personalizable Products</b></li>
                      <li><b>Sale</b></li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>FOOTWEAR</h3>
                    <ul>
                      <li>Running</li>
                      <li>Walking</li>
                      <li>Sneakers</li>
                      <li>Slides</li>
                      <li>Sandals</li>
                      <li>Gym & Training</li>
                      <li>Originals</li>
                      <li>Football</li>
                      <li>Slippers - Flip Flops</li>
                      <li>Cricket</li>
                      <li>Basketball</li>
                      <li>Tennis</li>
                      <li>Skateboarding</li>
                      <li>Swim</li>
                      <li>Hiking & Outdoor</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>CLOTHING</h3>
                    <ul>
                      <li>T-Shirts & Tank Tops</li>
                      <li>Shorts</li>
                      <li>Joggers & Track Pants</li>
                      <li>Originals</li>
                      <li>Football Jerseys & T-Shirts</li>
                      <li>Cricket Jerseys & Pants</li>
                      <li>Swimwear</li>
                      <li>Jackets</li>
                      <li>Sweatshirts</li>
                      <li>Tracksuits</li>
                      <li>Hoodies</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>ACCESSORIES</h3>
                    <ul>
                      <li>Socks</li>
                      <li>Caps & Headwear</li>
                      <li>All Bags</li>
                      <li>Gym & Training Bags</li>
                      <li>Backpacks</li>
                      <li>Gloves</li>
                      <li>Balls</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SPORTS</h3>
                    <ul>
                      <li>Running</li>
                      <li>Gym & Training</li>
                      <li>Football</li>
                      <li>Cricket</li>
                      <li>Tennis</li>
                      <li>Basketball</li>
                      <li>Hiking & Outdoor</li>
                      <li>Swim</li>
                      <li>Skateboarding</li>
                      <li>Golf</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SUSTAINABLE MATERIALS</h3>
                    <ul>
                      <li>Made with Recycled Material</li>
                      <li>Vegan</li>
                      <li>Organic Cotton</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">KIDS</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column1">
                    <h3>FEATURED</h3>
                    <ul>
                      <li>Online Exclusives</li>
                      <li>Essentials</li>
                      <li>Members Exclusive - Extra 15% Off</li>
                      <li>Samba, Gazelle, Spezial</li>
                      <li>Stan Smith</li>
                      <li>Football</li>
                      <li>Sportswear</li>
                      <li><strong>Personalisable Products</strong></li>
                      <li><strong>Sale</strong></li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>DISNEY</h3>
                    <img src={Disney} alt="Disney" />
                    <ul>
                      <li><strong>YOUTH 8 - 16 YEARS</strong></li>
                      <li>Boys Shoes</li>
                      <li>Girls Shoes</li>
                      <li>Boys Clothing</li>
                      <li>Girls Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>STAR WARS</h3>
                    <img src={Starwars} alt="Star Wars" />
                    <ul>
                      <li><strong>KIDS 4 - 8 YEARS</strong></li>
                      <li>Boys Shoes</li>
                      <li>Girls Shoes</li>
                      <li>Boys Clothing</li>
                      <li>Girls Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>MARVEL</h3>
                    <img src={Marvel} alt="Marvel" />
                    <ul>
                      <li><strong>TODDLERS 0 - 4 YEARS</strong></li>
                      <li>Shoes</li>
                      <li>Clothing</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SPORTS</h3>
                    <img src={Predator} alt="Star Wars" />
                    <ul>
                      <li>Football</li>
                      <li>Running</li>
                      <li>Swimming</li>
                      <li>Cricket</li>
                      <li>Basketball</li>
                      <li>Tennis</li>
                      <li>Training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">SPORTS</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column">
                    <h3>FOOTBALL</h3>
                    <img src={Football} alt="Football" />
                    <ul>
                      <li>Shoes & Studs</li>
                      <li>Training Wear</li>
                      <li>Jerseys</li>
                      <li>All Accessories</li>
                      <li>Clubs</li>
                      <li>National Teams</li>
                      <li>Predator</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>RUNNING</h3>
                    <img src={Runing} alt="Running" />
                    <ul>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                      <li>Everyday</li>
                      <li>Racing</li>
                      <li>Supernova</li>
                      <li>Ultraboost</li>
                      <li>adidas Runners</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>OUTDOOR</h3>
                    <img src={Outdoor} alt="Outdoor" />
                    <ul>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Terrex</li>
                      <li>UNITED BY SUMMITS</li>
                      <li>National Geographic</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>GYM & TRAINING</h3>
                    <img src={Gym} alt="Gym & Training" />
                    <ul>
                      <li>Shoes</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>CRICKET</h3>
                    <img src={Cricket} alt="Cricket" />
                    <ul>
                      <li>Shoes</li>
                      <li>Cricket Jerseys</li>
                      <li>Cricket Pants</li>
                      <li>Personalisable Products</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>OTHER SPORTS</h3>
                    <ul>
                      <li>Tennis</li>
                      <li>Basketball</li>
                      <li>Yoga</li>
                      <li>Swim</li>
                      <li>Skateboarding</li>
                      <li>Walking</li>
                      <li>Golf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">LIFESTYLE</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column1">
                    <h3>WHAT'S NEW?</h3>
                    <img src={Cricket} alt="What's New?" />
                    <ul>
                      <li>You Got This!</li>
                      <li>New Arrivals</li>
                      <li>Stories</li>
                      <li>adiClub</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>COLLABORATIONS</h3>
                    <img src={Collaboration} alt="Collaborations" />
                    <ul>
                      <li>Pharrell</li>
                      <li>Stella McCartney</li>
                      <li>Y-3</li>
                      <li>Rohit Sharma</li>
                      <li>SPZL</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>SPORTS</h3>
                    <img src={Outdoor} alt="Sports" />
                    <ul>
                      <li>Adizero</li>
                      <li>4D</li>
                      <li>Ultraboost</li>
                      <li>Predator</li>
                      <li>Copa</li>
                      <li>X</li>
                      <li>Supernova</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>ORIGINALS</h3>
                    <img src={Originals} alt="Originals" />
                    <ul>
                      <li>Samba</li>
                      <li>Gazelle</li>
                      <li>Spezial</li>
                      <li>Superstar</li>
                      <li>Stan Smith</li>
                      <li>Forum</li>
                      <li>NMD</li>
                      <li>OZ</li>
                      <li>Campus</li>
                      <li>Rivalry</li>
                    </ul>
                  </div>

                  <div class="column">
                    <h3>YEEZY</h3>
                    <ul>
                      <li>Yeezy 350</li>
                      <li>Yeezy Slides</li>
                      <li>Yeezy Foam RNR</li>
                      <li>Yeezy 500 & 700</li>
                      <li>Yeezy Kids</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">SALE</a>
              <div className="hover-text">
                <div class="menu-container">
                  <div class="column1">
                    <h3>MEN</h3>
                    <ul>
                      <li>All Men's</li>
                      <li>Footwear</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>WOMEN</h3>
                    <ul>
                      <li>All Women's</li>
                      <li>Footwear</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>KIDS</h3>
                    <ul>
                      <li>All Kids</li>
                      <li>Footwear</li>
                      <li>Clothing</li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                  <div class="column">
                    <h3>SHOP BY PRICE</h3>
                    <ul>
                      <li>Shoes Under ₹2000</li>
                      <li>Clothing under ₹2000</li>
                      <li>Shoes Under ₹3000</li>
                      <li>Shoes Under ₹5000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>


          <div className="hosl-icon">
            <div className="hosl">
              <a href="#">Help</a>
              <a href="#">Order and Return</a>
              <a href="#">Sign Up</a>
              <a href="#">Log In</a>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="search">
                <input type="text" placeholder="Search" />
                <i className="ri-search-line"></i>
              </div>
              <div className="icons">
                <a href="#">
                  <i className="ri-user-3-line"></i>
                  <span className={`notification ${vibrate ? 'vibrate' : ''}`}>1</span>
                </a>
                <a href="#"><i className="ri-heart-line"></i></a>
                <a href="#"><i className="ri-shopping-bag-line"></i></a>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="mobile-nav">
          <div className="mobile-icons">
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <a href="#"><i className="ri-menu-line"></i></a>
              <a href="#"><i className="ri-heart-line"></i></a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <a href="#"><img src={Logo} alt="Logo" /></a>
              <a href="#">
                <i className="ri-user-3-line"></i>
                <span className={`notification ${vibrate ? 'vibrate' : ''}`}>1</span>
              </a>
              <a href="#"><i className="ri-search-line"></i></a>
              <a href="#"><i className="ri-shopping-bag-line"></i></a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
