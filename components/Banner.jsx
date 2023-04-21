import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { urlFor } from "../utils/client";
// import banner from "no/sanity1682/schemas/banner";

// colours: f5f4ef c8bb9e a2967f dedbd1 53524e cec3b2 f1f0eb
const Banner = () => {
  return (
    <div className="bg-[#f1f0eb] text-[#53524e] p-32 rounded-full relative h-500 leading-none w-full">
      <Image
        className="w-77 h-62 max-w-xs transition duration-300  ease-in-out hover:scale-110 absolute right-20 w-500 h-450"
        src="/assets/flame-pro.png"
        alt="flame humidifier"
        width={250}
        height={250}
      />

      <div className="font-sans text-center text-6xl">New Flame Humidifier</div>
      <button
        className="rounded-lg py-4 px-10 bg-[#a2967f] hover:bg-[#282d43] text-[#dedbd1] font-semibold text-lg mt-10 flex flex-col"
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
