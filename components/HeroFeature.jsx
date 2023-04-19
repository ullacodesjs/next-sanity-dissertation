import React from "react";
import Link from "next/link";
import { urlFor } from "../utils/sanity.client.js";

const HeroFeature = ({ heroFeature }) => {
  return (
    <div className="p-20 bg-gray-300 rounded-lg relative h-500 leading-tight w-full text-center">
      <h2>{heroFeature.midText}</h2>
      <h1>{heroFeature.largeText1}</h1>
      {/* //renders the image for the feature on homepage */}
      <img
        src={urlFor(heroFeature.image)}
        alt="headphones"
        className="hero-banner-image"
      />
      <Link
        className="rounded-lg p-4 mt-20"
        href={`/product/${heroFeature.product}`}
      >
        <button type="button">{heroFeature.buttonText}</button>
      </Link>
      Fresh Aire
    </div>
  );
};

export default HeroFeature;
