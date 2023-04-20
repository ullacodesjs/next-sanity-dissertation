import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import ShoppingCart from "./ShoppingCart";

const Layout = ({ children }) => {
  return (
    <div className="p-5">
      <Head>
        <title>Fresh Aire Store</title>
      </Head>
      <header>
        <Navbar />
        <ShoppingCart />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
