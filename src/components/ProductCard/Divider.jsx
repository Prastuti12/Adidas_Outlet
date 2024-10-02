import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                {/* Top Yellow Section */}
                <div className=" py-6 " >
                    <div className="container mx-auto px-4 text-center  justify-center gap-5">
                        <h2 className="text-2xl font-bold mb-4">ADICLUB DAYS ARE BACK
                        </h2>
                        <h5 className="text-xl  mb-4" style={{scale:"0.8"}}>Experience it all
                        </h5>
                        {/* <button className="bg-black text-white py-3 px-8 font-bold hover:bg-gray-800 transition duration-300">
                            SIGN UP FOR FREE →
                        </button> */}
                        <a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-black  group" style={{ scale: "0.89" }}>
                            <span
                                className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-gray-900  group-hover:mt-0 group-hover:ml-0"
                                style={{
                                    backgroundColor: 'white',
                                    color: 'white',
                                    border: '1px solid black',
                                }}
                            ></span>

                            <span class="absolute inset-0 w-full h-full bg-black  "></span>
                            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-gray-900  opacity-0 group-hover:opacity-100 "></span>
                            <span class="relative text-white transition-colors duration-200 ease-in-out delay-100 group-hover:text-gray-300">Find Out More →</span>
                        </a>

                    </div>
                </div>


            </footer>

        </>



    );
};

export default Footer;
