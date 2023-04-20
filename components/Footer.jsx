import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 py-4">
      <div className="container mx-auto">
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
