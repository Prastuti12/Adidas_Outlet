import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                {/* Top Yellow Section */}
                <div className=" py-6 " style={{ backgroundColor: "#ede734" }}>
                    <div className="container mx-auto px-4 text-center flex justify-center gap-5">
                        <h2 className="text-2xl font-bold mb-4">JOIN ADIDAS AND GET 15% OFF</h2>
                        {/* <button className="bg-black text-white py-3 px-8 font-bold hover:bg-gray-800 transition duration-300">
                            SIGN UP FOR FREE →
                        </button> */}
                        <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-black  group" style={{ scale: "0.89" }}>
                            <span
                                className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-gray-900  group-hover:mt-0 group-hover:ml-0"
                                style={{
                                    backgroundColor: '#EDE734',
                                    color: 'white',
                                    border: '1px solid black',
                                }}
                            ></span>

                            <span class="absolute inset-0 w-full h-full bg-black  "></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-gray-900  opacity-0 group-hover:opacity-100 "></span>
                            <span class="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-gray-300">SIGN UP FOR FREE →</span>
                        </a>

                    </div>
                </div>

                {/* White Section for Links with custom padding */}
                <div className="bg-white py-12 sm:px-0 lg:px-56 lg:pt-14">
                    <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-left" style={{ scale: "0.89" }}>
                        {/* Products */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">PRODUCTS</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Footwear</a></li>
                                <li><a href="#" className="hover:underline">Clothing</a></li>
                                <li><a href="#" className="hover:underline">Accessories</a></li>
                                <li><a href="#" className="hover:underline">Outlet-Sale</a></li>
                                <li><a href="#" className="hover:underline">New Arrivals</a></li>
                                <li><a href="#" className="hover:underline">Special Offer</a></li>
                                <li><a href="#" className="hover:underline">Flat 50% Off!</a></li>
                            </ul>
                        </div>

                        {/* Sports */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">SPORTS</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">CRICKET</a></li>
                                <li><a href="#" className="hover:underline">Running</a></li>
                                <li><a href="#" className="hover:underline">Football</a></li>
                                <li><a href="#" className="hover:underline">Gym/Training</a></li>
                                <li><a href="#" className="hover:underline">Tennis</a></li>
                                <li><a href="#" className="hover:underline">Outdoor</a></li>
                                <li><a href="#" className="hover:underline">Basketball</a></li>
                                <li><a href="#" className="hover:underline">Swimming</a></li>
                                <li><a href="#" className="hover:underline">Skateboarding</a></li>
                            </ul>
                        </div>

                        {/* Collections */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">COLLECTIONS</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Ultraboost</a></li>
                                <li><a href="#" className="hover:underline">Superstar</a></li>
                                <li><a href="#" className="hover:underline">NMD</a></li>
                                <li><a href="#" className="hover:underline">Stan Smith</a></li>
                                <li><a href="#" className="hover:underline">Sustainability</a></li>
                                <li><a href="#" className="hover:underline">Predator</a></li>
                                <li><a href="#" className="hover:underline">Parley</a></li>
                                <li><a href="#" className="hover:underline">Adicolor</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">SUPPORT</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Help</a></li>
                                <li><a href="#" className="hover:underline">Customer Services</a></li>
                                <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
                                <li><a href="#" className="hover:underline">Shipping</a></li>
                                <li><a href="#" className="hover:underline">Order Tracker</a></li>
                                <li><a href="#" className="hover:underline">Store Finder</a></li>
                                <li><a href="#" className="hover:underline">adiClub</a></li>
                                <li><a href="#" className="hover:underline">adiClub Terms and conditions</a></li>
                            </ul>
                        </div>

                        {/* Company Info */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">COMPANY INFO</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">adidas stories</a></li>
                                <li><a href="#" className="hover:underline">adidas Apps</a></li>
                                <li><a href="#" className="hover:underline">Entity Details</a></li>
                                <li><a href="#" className="hover:underline">Press</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="font-bold mb-3 text-lg">FOLLOW US</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/NE_Winstagram_logo_footer_tcm209_875968_e40414a503.png" alt="Instagram"
                                            className="w-6"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
            <div class="bg-gray-800 py-4">
                <div class="container mx-auto flex justify-center space-x-6 text-gray-400">
                    <a href="#" style={{ fontSize: "11px" }} class="hover:text-white">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" style={{ fontSize: "11px" }} class="hover:text-white">Terms and Conditions</a>
                    <span>|</span>
                    <a href="#" style={{ fontSize: "11px" }} class="hover:text-white">Cookies</a>
                </div>
                <div class="container mx-auto text-center text-gray-400 mt-2 hover:text-white" style={{ fontSize: "12px" }}>
                    ©2024 adidas India Marketing Pvt. Ltd
                </div>
            </div>

        </>



    );
};

export default Footer;
