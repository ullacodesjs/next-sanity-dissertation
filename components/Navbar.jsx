import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex justify-between relative m-4 mx-18">
      <p className="text-3xl text-[#a2967f]">
        <Link href="/"> Fresh Aire</Link>
      </p>
      <p className="text-[#a2967f] flex justify-between relative m-1 mx-18">
        <Link href="/login"> Login In</Link>
      </p>
      <button
        type="button"
        className="text-[#a2967f] text-xl cursor-pointer relative transition-transform duration-400 border-none bg-transparent"
        // onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="absolute right-[-8px] text-xs text-white bg-[#cec3b2] w-[18px] h-[18px] rounded-full text-center font-semibold">
          {/* {totalQuantities} */}0
        </span>
      </button>
      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
