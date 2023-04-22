import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Layout = ({ children }) => {
  return (
    <div className="p-10">
      <Head>
        <title>Fresh Aire Store</title>
      </Head>
      <header>
        <Navbar />
        <ShoppingCart />
      </header>
      <main className="max-w-7xl mx-auto w-full">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
