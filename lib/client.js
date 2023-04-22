import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ucsxneoh",
  dataset: "production",
  apiVersion: "2023-04-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export async function getStaticProps() {
//   const products = await client.fetch('*[_type == "product"]');

//   return {
//     props: {
//       products,
//     },
//   };
// }
