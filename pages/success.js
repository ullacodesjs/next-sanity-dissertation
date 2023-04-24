import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="min-h-69vh">
      <div className="h-350 p-40">
        <h2 className="text-center">Thank you for your order!</h2>
        <p className="text-16 font-semibold text-center">
          Check your email inbox for the confirmation.
        </p>
        <p className="text-16 font-semibold text-center my-10 mt-30">
          If you have any questions, please email <br />
          <a className="email" href="mailto:freshaire@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button
            type="button"
            width="300px"
            className="w-full max-w-400 px-12 py-10 rounded-15 border-none text-20 mt-10 lg:mt-40 uppercase bg-f02d34 text-white cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
