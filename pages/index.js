import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      HeroFeature
      <div>
        <h2> Latest Products</h2>
        <p>New Season Desigs For Every Home</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
