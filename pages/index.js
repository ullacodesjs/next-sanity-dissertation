import Head from "next/head";
import Image from "next/image";
import { Product, Banner, Footer } from "../components";
import { client } from "../lib/client.js";

const Home = ({ products }) => {
  return (
    <>
      <Banner />
      {/* 17 product card: text-center justify-center h-screen text-2xl */}
      <div>
        <h2 className="text-center my-40">Latest Products</h2>
        {/* <p className="py-3">New Season Designs For Every Home</p> */}
      </div>
      <div className="py-3"></div>
      <div className="flex flex-wrap justify-center gap-15 mt-20 w-full cursor-pointer transform transition-transform ease duration-500 text-#324d67 hover:scale-110 rounded-15 bg-#ebebeb">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
export default Home;
