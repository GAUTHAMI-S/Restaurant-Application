import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateMenu = () => {
  const item = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate(0);

  const onSubmit = async (data) => {
    console.log(item);
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

      const postMenuItem = axiosSecure.patch(`/menu/${item?._id}`, menuItem);
      console.log(postMenuItem);
      if (postMenuItem) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Item updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard/manage-items')
      }
    }
  };
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">
        Update This <span className="text-green">Menu Item</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 1st row */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              defaultValue={item?.name}
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
                defaultValue={item?.category}
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
                defaultValue={item?.price}
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
              defaultValue={item?.recipe}
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
              defaultValue={item?.image}
              type="text"
              {...register("image", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn bg-green text-white px-6 ">
            Update Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;
