import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import getStripe from "../lib/getStripe";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const ShoppingCart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      className="w-screen bg-black bg-opacity-50 right-0 top-0 z-50 transition-all duration-1000 ease-in-out "
      ref={cartRef}
    >
      <div className="h-screen w-96 bg-[#dedbd1] float-right py-5 px-10 relative">
        <button
          type="button"
          className="w-full max-w-400 px-12 py-10 rounded-15 border-none text-20 uppercase bg-f02d34 text-black cursor-pointer transform transition-transform duration-500 ease hover:scale-105"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="mt-10">Your Shopping Cart</span>
          <span className="ml-10">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="ml-10 text-[#a2967f]">
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="rounded-lg py-4 px-10 bg-[#a2967f] hover:bg-[#282d43] text-[#dedbd1] font-semibold text-lg mt-8 md:mt-10"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="mt-15 overflow-auto max-h-70vh px-10 py-20">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className="w-180 h-150 rounded-15 bg-eb-eb-eb"
                key={item._id}
              >
                <img
                  src={urlFor(item?.image[0])}
                  className="w-180 h-150 rounded-15 bg-eb-eb-eb"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>£{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="text-lg font-medium mr-4">
                        <span
                          className="flex items-center border border-gray-400 p-2 rounded-md"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span
                          className="flex items-center border border-gray-400 p-2 rounded-md"
                          onClick=""
                        >
                          {item.quantity}
                        </span>
                        <span
                          className="flex items-center border border-gray-400 p-2 rounded-md"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div>
            <div>
              <h3>Subtotal:</h3>
              <h3>£{totalPrice}</h3>
            </div>
            <div className="w-300 mx-auto">
              <button
                type="button"
                className="rounded-lg py-4 px-10 bg-[#a2967f] hover:bg-[#282d43] text-[#dedbd1] font-semibold text-lg mt-8 md:mt-10"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
