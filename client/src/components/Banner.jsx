import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa]from-0% to-[#fcfcfc] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="md:w-1/2">
          <div>
            <img src="/images/homePageImg.png" alt="" />
            <div className="flex flex-col md:flex-row items-center justify-around -mt-14 ">
              <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                <img src="/images/food1.png" alt="" />
                <div className="space-y-1 ">
                  <h5 className="font-medium mb-1">Korean food</h5>
                  <div className="rating rating-sn">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                      readOnly
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                      
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                  </div>
                  <p className="text-red">$18.95</p>
                </div>
              </div>
              <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                <img src="/images/food1.png" alt="" />
                <div className="space-y-1">
                  <h5 className="font-medium mb-1">Korean food</h5>
                  <div className="rating rating-sn">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                      readOnly
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-green"
                    />
                  </div>
                  <p className="text-red">$18.95</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="md:w-1/2 space-y-3 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Feel the taste and melt into <span className="text-green">it</span>
          </h2>
          <p className="text-xl text-[#4a4a4a]">
            Looking for food that win your heart? Let dive into the taste of
            India
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
