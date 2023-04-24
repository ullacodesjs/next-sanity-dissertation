import React, { useState } from "react";
import { client, urlFor } from "../../lib/client.js";
import { Product } from "../../components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useStateContext } from "no/context/StateContext.js";
// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <div>
      <div className="flex flex-wrap">
        <div>
          <h1 className="mt-10">{name}</h1>{" "}
          <div className="w-64 mt-10 h-64 overflow-hidden">
            {" "}
            <img
              src={urlFor(image && image[0])}
              className="w-400 h-400 rounded-xl overflow-hidden bg-gray-300 "
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mt-10 text-[#aea98c]">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(44)</p>
          </div>
          <h4 class="text-xl mt-10 font-medium mb-2">Details:</h4>
          <p class="mb-4">{details}</p>
          <p class="text-lg font-medium mb-2">Price: £{price}</p>
          <div class="flex items-center justify-start">
            <h4 class="text-lg font-medium mr-4">Quantity:</h4>
            <div class="flex items-center border border-gray-400 p-2 rounded-md">
              <button class="focus:outline-none" onClick={decQty}>
                <AiOutlineMinus class="w-6 h-6" />
              </button>
              <span
                class="mx-4 text-lg font-medium"
                id="quantity"
                onClick={qty}
              >
                1
              </span>
              <button class="focus:outline-none" onClick={incQty}>
                <AiOutlinePlus class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="py-2 px-4 border border-black mt-40 text-lg font-medium bg-white text-[#a2967f] rounded-md transition-transform transform hover:scale-105 mx-4"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="py-2 px-4 border border-black mt-20 text-lg font-medium bg-white text-[#a2967f] rounded-md transition-transform transform hover:scale-105 w-200 mx-4"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          You may also like
        </h2>
        <div className="flex flex-wrap justify-center">
          {products.map((item) => (
            <div className="border rounded-lg m-4 p-4 max-w-xs" key={item._id}>
              <Product product={item} />
            </div>
          ))}
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
