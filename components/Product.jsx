import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client.js";
// import Image from "next/image.js";

const Product = ({ product: { image, name, slug, price, rating } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer transform scale-100 transition-transform ease duration-500 text-gray-800">
          <img
            src={urlFor(image && image[0])}
            className="product-detail-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">£{price}</p>
          <p className="product-rating">{rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
{
  /* <img src={urlFor(product.image).width(200).url()} /> */
}
{
  /* <img src={product.image} /> */
}
//  rounded-lg bg-gray-200 transform scale-100 transition-transform ease duration-500
{
  /* <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="/assets/watch_1.webp"
            alt="producttest"
            width={250}
            height={250}
          /> */
}
// <img src={urlFor(image).width(200).url()} />

//<div className="cursor-pointer transform scale-100 transition-transform ease duration-500 text-gray-800 flex flex-wrap justify-center gap-15 mt-20 w-full  hover:transform ">
//<img src={image} />
