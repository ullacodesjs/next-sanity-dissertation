import React, { useState } from "react";
import { client, urlFor } from "../../utils/client.js";
import { Product } from "../../components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, description, price } = product;
  // const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-40 mx-40 mt-60 text-blue-900">
        <div>
          <div>
            {/* renders image to page create a product card */}
            <img
              src={urlFor(product.image).width(200).url()}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            />
          </div>
          {/* <div className="">
            {image?.map((item, i) => (
              <img src={urlFor(item)} className="" onMouseEnter="" />
            ))}
          </div> */}
        </div>
        <div className="styles">
          <h1>{name}</h1>
          <div className="flex items-center mt-0 gap-5 content-evenly">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(44)</p>
          </div>
          {/* enter product details manually */}
          <h4>Product Details:</h4>
          {/* <p>{description}</p> */}
          <p>£{price}</p>
          <div className="text-base px-3 py-2  border border-gray-400 p-6">
            <p>
              <span className="cursor-pointer" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick={qty}>
                0
              </span>
              <span className="cursor-pointer" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="button styles">
            <button
              className="w-150 p-5"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              Add to cart
            </button>
            <button className="w-150" type="button" onClick={handleBuyNow}>
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
