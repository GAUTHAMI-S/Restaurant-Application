import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "/images/services/icon1.png",
  },
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "/images/services/icon2.png",
  },
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "/images/services/icon3.png",
  },
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "/images/services/icon4.png",
  },
];
const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className=" md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title md:w-[520px]">Our Culinary Journey</h2>
            <blockquote className="my-5 text-secondary leading[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quasi sapiente obcaecati consequuntur corrupti? Facilis cum
              ratione unde aut cupiditate eaque consequatur. Quisquam blanditiis
              quas veniam hic minus. Doloribus, deserunt.
            </blockquote>
          </div>
        </div>
        {/* image */}
        <div className=" md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-2 gap-8">
            {serviceLists.map((service) => {
              return (
                <div
                  key={service.id}
                  className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
                >
                  <img src={service.image} alt="" className="mx-auto" />
                  <h5 className="pt-3 font-semibold">{service.title}</h5>
                  <p className="text=[#90bd95]">{service.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
