import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex justify-between relative m-4 mx-18">
      <p className="text-xl text-[#a69cac]">
        <Link href="/"> Fresh Aire</Link>
      </p>
      <button
        type="button"
        className="text-[#474973] text-xl cursor-pointer relative transition-transform duration-400 border-none bg-transparent"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="absolute right-[-8px] text-xs text-white bg-[#161b33] w-[18px] h-[18px] rounded-full text-center font-semibold">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
