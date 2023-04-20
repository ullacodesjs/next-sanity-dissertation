import React from "react";
import Link from "next/link";
import urlFor from "../utils/client.js";
import product from "no/sanity1682/schemas/product.js";
import Image from "next/image.js";

const Product = ({ product: { image, name, slug, price, rating } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer transform scale-100 transition-transform ease duration-500 text-gray-800 flex flex-wrap justify-center gap-15 mt-20 w-full  hover:transform ">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="/assets/watch_1.webp"
            alt="producttest"
            width={250}
            height={250}
          />
          {/* <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className="w-full h-auto rounded-lg bg-gray-200"
          /> */}
          {/* <img src={urlFor(image).width(200).url()} /> */}
          <p className="font-medium">{name}</p>
          <p>£{price}</p>
          <p>{rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

//  rounded-lg bg-gray-200 transform scale-100 transition-transform ease duration-500
