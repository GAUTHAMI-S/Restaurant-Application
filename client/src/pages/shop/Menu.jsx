import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  //loading data
  useEffect(() => {
    // fetch data from  the backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  //filterting data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => {
            return item.category === category;
          });
    console.log("in filter", filtered);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // show all data function
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // sorting based on A-Z Z-A ,low-high pricing
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#fafafa]from-0% to-[#fcfcfc] to-100%">
        <div className="py-24 flex flex-col  justify-center items-center gap-8">
          {/* text */}
          <div className=" text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Feel the taste and melt into{" "}
              <span className="text-green">it</span>
            </h2>
            <p className="text-xl text-[#4a4a4a] md:w-4/5 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              perspiciatis dolorem vero, optio voluptatum laboriosam in est
              rerum eum, culpa consectetur perferendis? Repellendus aperiam
              distinctio ipsum quidem laboriosam debitis alias.
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* menu shop section */}
      <div className="section-container">
        {/* filtering and sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4">
            {/* all category btns */}
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              className={selectedCategory === "salad" ? "active" : ""}
              onClick={() => filterItems("salad")}
            >
              Salad
            </button>
            <button
              className={selectedCategory === "pizza" ? "active" : ""}
              onClick={() => filterItems("pizza")}
            >
              Pizza
            </button>
            <button
              className={selectedCategory === "soup" ? "active" : ""}
              onClick={() => filterItems("soup")}
            >
              Soups
            </button>
            <button
              className={selectedCategory === "dessert" ? "active" : ""}
              onClick={() => filterItems("dessert")}
            >
              Desserts
            </button>
            <button
              className={selectedCategory === "drinks" ? "active" : ""}
              onClick={() => filterItems("drinks")}
            >
              Drinks
            </button>
          </div>

          {/* soritng fitler */}

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high-to-low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {currentItems.map((item) => {
            return <Cards key={item._id} item={item} />;
          })}
        </div>
      </div>
      {/* pagination section */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
            }`}
            key={index + 1}
            onClick={() => {
              paginate(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
