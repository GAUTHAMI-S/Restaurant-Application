import React from "react";
const categoryItem = [
  {
    id: 1,
    title: "Main Dish",
    des: "(34 dishes)",
    image: "/images/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 Breakfast)",
    image: "/images/category/img2.png",
  },
  {
    id: 3,
    title: "Desset",
    des: "(43 dessert)",
    image: "/images/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(265 items)",
    image: "/images/category/img4.png",
  },
];
const Categories = () => {
  return (
    <div className="section-container ">
      <div className="text-center">
        <p className="subtitle">CUSTOMER'S FAVORITES</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      {/*  categories card*/}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12 ">
        {categoryItem.map((item, i) => {
          return (
            <div
              key={i}
              className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300"
            >
              <div className="flex w-full mx-auto items-center  justify-center">
                <img
                  src={item.image}
                  alt="error"
                  className="bg-[#c1f1c6] p-5 rounded-full w-28 h-28"
                />
              </div>
              <div className="mt-5 space-y">
                <h5>{item.title}</h5>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
