import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className=" md:w-1/2">
          <img src="/images/testimonial.png" alt="error" />
        </div>
        <div className=" md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">TESTIMONIAL</p>
            <h2 className="title md:w-[520px]">
              What Our Customers Say About Us
            </h2>
            <blockquote className="my-5 text-secondary leading[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quasi sapiente obcaecati consequuntur corrupti? Facilis cum
              ratione unde aut cupiditate eaque consequatur. Quisquam blanditiis
              quas veniam hic minus. Doloribus, deserunt.
            </blockquote>

            {/* avatar with count */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text=[#807e7e]">(18.6k Reviews) </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
