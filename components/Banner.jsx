import React from "react";
import Link from "next/link";
// import { urlFor } from "no/utils/client";

const Banner = ({ Banner }) => {
  return (
    <div className="bg-blue-950 text-gray-200 py-10 text-4xl mt-1">
      {/* <h2>{Banner.midText}</h2>
      <h1>{Banner.largeText1}</h1> */}
      {/* //renders the image for the feature on homepage */}
      {/* <img
        src={urlFor(Banner.image)}
        alt="headphones"
        className="absolute top-0 right-20 w-450 h-450"
      /> */}
      {/* <Link
        className="rounded-lg p-4 mt-20"
        href={`/product/${Banner.product}`}
      > */}
      {/* <button
          className="rounded-lg py-2 px-4 bg-blue-200 text-gray-700 font-semibold text-lg mt-10 flex flex-col"
          type="button"
        >
          Shop
        </button>
      </Link> */}
      New Cactus Mister
    </div>
  );
};

export default Banner;
