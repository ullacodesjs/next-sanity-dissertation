import React, { useState } from "react";
import { client, urlFor } from "../../lib/client.js";
import { Product } from "../../components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap">
        <div>
          <h1>{name}</h1>{" "}
          <div className="w-64 h-64 overflow-hidden">
            {" "}
            <img
              src={urlFor(image && image[0])}
              className="w-400 h-400 rounded-xl overflow-hidden bg-gray-300 "
            />
          </div>
          <div className="flex gap-10 mt-20">
            {/* {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))} */}
          </div>
        </div>
        <div>
          <div className="mt-10 flex items-center text-red-500">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 class="text-lg font-medium mb-2">Details:</h4>
          <p class="mb-4">{details}</p>
          <p class="text-lg font-medium mb-2">Price: £{price}</p>
          <div class="flex items-center justify-start">
            <h4 class="text-lg font-medium mr-4">Quantity:</h4>
            <div class="flex items-center border border-gray-400 p-2 rounded-md">
              <button class="focus:outline-none" onClick="decrementQuantity()">
                <AiOutlineMinus class="w-6 h-6" />
              </button>
              <span class="mx-4 text-lg font-medium" id="quantity">
                1
              </span>
              <button class="focus:outline-none" onClick="incrementQuantity()">
                <AiOutlinePlus class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="py-2 px-4 border border-red-500 mt-40 text-lg font-medium bg-white text-red-500 rounded-md transition-transform transform hover:scale-105 mx-4"
              onClick=""
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-red-500 mt-20 text-lg font-medium bg-white text-red-500 rounded-md transition-transform transform hover:scale-105 w-200 mx-4"
              onClick=""
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-120">
        <h2 className="text-center text-2xl font-bold mb-6 mt-20">
          You may also like
        </h2>
        <div className="align-items-center w-full justify-center">
          <div className="w-64 h-64 border rounded-lg m-4">
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
