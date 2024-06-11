import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddMenu = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  // // console.log(image_hosting_key)
  // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const onSubmit = async (data) => {
    console.log(data);
    // const imageFile = { image: data.image[0] };
    // const hostingImage = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart / form-data",
    //   },
    // });
    // console.log(hostingImage.data);

    if (data) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: data.image,
      };

      const postMenuItem = axiosSecure.post("/menu", menuItem);

      if (postMenuItem) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Item added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Upload A New <span className="text-green"> Menu Item</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1st row */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* 2nd row */}
          <div className="flex items-center gap-4 my-6">
            {/* categories */}
            <div className="form-control w-full my-">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                className="select select-bordered"
                {...register("category", { required: true })}
                defaultValue="default"
              >
                <option disabled value="default">
                  Choose Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            {/* prices */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Prices *</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Tell me about the recipe"
            ></textarea>
          </div>

          {/* 4th row */}
          <div className="form-control w-full py-6">
            <label className="label">
              <span className="label-text">Image URL*</span>
            </label>
            <input
              type="text"
              {...register("image", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn bg-green text-white px-6 ">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
