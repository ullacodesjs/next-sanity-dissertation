import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { urlFor } from "../utils/client";
// import banner from "no/sanity1682/schemas/banner";

// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Banner = () => {
  return (
    <div className="bg-[#f1f0eb] text-[#53524e] p-8 md:p-32 rounded-full relative flex flex-col items-center">
      <Image
        className="w-full md:max-w-xs transition duration-300 ease-in-out hover:scale-110 md:absolute md:right-20"
        src="/assets/flame-pro.png"
        alt="flame humidifier"
        width={500}
        height={450}
      />

      <div className="font-sans text-center text-4xl md:text-6xl mt-8 md:mt-0">
        New Flame Humidifier
      </div>
      <button
        className="rounded-lg py-4 px-10 bg-[#a2967f] hover:bg-[#282d43] text-[#dedbd1] font-semibold text-lg mt-8 md:mt-10"
        type="button"
      >
        Shop Now
      </button>
    </div>
  );
};

export default Banner;

{
  /* <img src={urlFor(image).width(200).url()} /> */
}
{
  /* <Link
        className="rounded-lg p-4 mt-20"
        href={`/product/${Banner.product}`}
      >
      </Link> */
}

{
  /* <h2>{Banner.midText}</h2>
      <h1>{Banner.largeText1}</h1> */
}
{
  /* //renders the image for the feature on homepage */
}
{
  /* <img
        src={urlFor(Banner.image)}
        alt="headphones"
        className="absolute top-0 right-20 w-450 h-450"
      /> */
}
