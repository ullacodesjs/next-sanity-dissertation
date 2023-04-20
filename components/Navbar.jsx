import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <p className="">
        <Link href="/"> Fresh Aire</Link>
      </p>
      <button type="button" onClick="">
        <AiOutlineShopping />
        <span className="">1</span>
      </button>
    </div>
  );
};

export default Navbar;
