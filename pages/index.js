import Head from "next/head";
import Image from "next/image";
import { Product, Banner, Footer } from "../components";
import { client } from "../utils/client.js";
import Link from "next/link";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Banner Banner={bannerData.length && bannerData[0]} />

      <div>
        <h2 className="py-3 ">Latest Products</h2>
        <p className="py-3">New Season Designs For Every Home</p>
      </div>
      <div className="py-3">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <div className="text-center justify-center h-screen text-2xl">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
