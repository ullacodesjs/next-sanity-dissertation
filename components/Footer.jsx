import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import privacypolicy from "../pages/privacypolicy";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Footer = () => {
  return (
    <footer class="bg-[#f1f0eb] text-[#53524e] py-10 rounded-lg">
      <div class="container mx-auto flex flex-col items-center justify-center">
        <nav class="flex flex-col items-center justify-center gap-y-2">
          <Link href="/Contact Information">
            <p>Contact Information</p>
          </Link>
          <Link href="/privacypolicy.js">
            <p>Privacy Policy</p>
          </Link>
          <Link href="/Contact Information">
            <p>Refund Policy</p>
          </Link>
          <Link href="/Contact Information">
            <p>Shipping Policy</p>
          </Link>
          <Link href="/Contact Information">
            <p>Terms of Service</p>
          </Link>
        </nav>
        <p class="text-center">
          &copy; 2023 Fresh Aire by Ulla Angell 001005631-9. All Rights
          Reserved. COMP1682
        </p>
        <div class="flex justify-center gap-4 mt-4">
          <AiFillInstagram class="text-2xl text-gray-800" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
