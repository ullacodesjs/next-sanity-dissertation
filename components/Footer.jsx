import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#a69cac] text-[#161b33] py-10 rounded-lg">
      <div className="container mx-auto">
        <Link href="/Contact Information">Contact Information</Link>
        <br />
        <Link href="/Contact Information">Privacy Policy</Link>
        <br />
        <Link href="/Contact Information">Refund Policy</Link>
        <br />
        <Link href="/Contact Information">Shipping Policy</Link>
        <br />
        <Link href="/Contact Information">Terms of Service</Link>
        <br />
        <p className="text-center justify-center">
          &copy; 2023 Fresh Aire by Ulla Angell 001005631-9. All Rights
          Reserved. COMP1682
        </p>
        <p className="icons">
          <AiFillInstagram />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
