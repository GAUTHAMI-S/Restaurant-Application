import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [carts, refetch] = useCart();
  const [cartItems, setCartItems] = useState([]);
  //cal price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  //  handleDecrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`http://localhost:6001/carts/${item._id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json; chartset=UTF-8" },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          });
          refetch();
          setCartItems(updatedCart);
        });
      refetch();
    } else {
      alert("Item can't be zero");
    }
  };
  // handleIncrease
  const handleIncrease = (item) => {
    fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json; chartset=UTF-8" },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, cartItems);
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        refetch();
        setCartItems(updatedCart);
      });
    refetch();
  };

  //calc total price
  const cartSubTotal = carts.reduce((acc, item) => {
    return acc + calculatePrice(item);
  }, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:6001/carts/${item._id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success",
                });
              }
              refetch();
            });
        }
      })
      .then();
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-24 ">
      {Object.keys(carts).length !== 0 ? (
        <>
          <div className=" bg-gradient-to-r from-0% from-[#fafafa] to-[#fcfcfc] to-100%">
            <div className="py-24 flex flex-col md:flex-row-reverse justify-center items-center gap-8">
              {/* text */}
              <div className=" space-y-3 px-4">
                <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                  Feel the taste and melt into{" "}
                  <span className="text-green">it</span>
                </h2>
              </div>
            </div>
          </div>

          {/* table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-green text-white rounded-sm ">
                  <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium">{item.name}</td>
                      <td>
                        <button
                          className="btn btn-xs"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={() => {}}
                          className="w-10 mx-2 text-center overflow-hidden"
                        ></input>
                        <button
                          className="btn btn-xs "
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </td>
                      <td>${calculatePrice(item).toFixed(2)}</td>

                      <th>
                        <button
                          className="btn btn-ghost text-red btn-xs"
                          onClick={() => handleDelete(item)}
                        >
                          <FaTrash />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* customer details */}
          <div className="my-12 flex flex-col md:flex-row justify-between item-start">
            <div className="md:w-1/2 space-y-3">
              <h3 className="font-medium">Customer details</h3>
              <p>Name : {user.displayName}</p>
              <p>Email : {user.email}</p>
              <p>User_id : {user.uid}</p>
            </div>
            <div className="md:w-1/2 space-y-3">
              <h3 className="font-medium">Shopping Details</h3>
              <p>Total Items : {carts.length}</p>
              <p>Total Price : ${cartSubTotal.toFixed(2)}</p>
              <Link to="/process-checkout">
                <button className="btn bg-green text-white px-8 py-1 mt-5">
                  Procceed Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="hero min-h-screen mt-2"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/pleased-young-male-cook-wearing-chef-uniform-glasses-holding-showing-with-hand-white-wall-isolated-yellow-wall-with-copy-space_141793-78469.jpg?w=1060&t=st=1715154458~exp=1715155058~hmac=ed32f83b8703559c8baef90897be980832da5924bc607c1834be3485e9e5fdc1)",
            }}
          >
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-left text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-black font-bold">
                  Not Yet Logged In?{" "}
                  <span className=" text-green ">Please Login</span>
                </h1>

                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="btn bg-green text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="hero min-h-screen ">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://i.pinimg.com/736x/34/8b/e5/348be5c23740a7909e537cde5a3790d9.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="py-6">Not Yet Logged In? Please Login</h1>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default CartPage;
