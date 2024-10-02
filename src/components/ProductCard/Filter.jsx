import React from "react";

const Filter = () => {
    return (
        <>
            <div className=" py-6 " >
                <div className="container mx-auto px-12 text-center flex  justify-end gap-5">

                    <button className="border-black-200 text-black py-3 px-8 font-bold  transition duration-300" style={{textTransform:"uppercase", fontSize:"14px", border:"1px solid black"}}>
                        Filter & Sort <i class="ri-equalizer-line"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filter;
