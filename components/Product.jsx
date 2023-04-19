import React from "react";
import Link from "next/link";

import { urlFor } from "../utils/sanity.client.js";

const Product = ({ product: { image, name, slug, price, rating } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <p>{name}</p>
          <p>£{price}</p>
          <p>{rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
