import Head from "next/head";
import Image from "next/image";
import { Product, HeroFeature, Footer } from "../components";
import { client } from "../utils/sanity.client.js";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroFeature heroFeature={bannerData.length && bannerData[0]} />
      <div>
        <h2 className="py-3 "> Latest Products</h2>
        <p className="py-3">New Season Desigs For Every Home</p>
      </div>
      {/* <div className="py-3">
        {["Product 1", "Product 2"].map((product) => product)}
      </div> */}
      <div>
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
