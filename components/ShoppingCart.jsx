import React, { useRef, useState } from "react";
import Link from "next/link";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../utils/client.js";
// import getStripe from "../lib/getStripe";

const ShoppingCart = () => {
  //   const cartRef = useRef();
  //   const {
  //     totalPrice,
  //     totalQuantities,
  //     cartItems,
  //     toggleCartItemQuanitity,
  //     onRemove,
  //   } = useStateContext();
  // const handleCheckout = async () => {
  //   const stripe = await getStripe();
  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   });
  //   if (response.statusCode === 500) return;
  //   const data = await response.json();
  //   toast.loading("Redirecting...");
  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };
  //   const [showCart, setShowCart] = useState(false);
  //   return (
  //     <div
  //       className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50"
  //       ref={cartRef}
  //     >
  //       <div className="absolute top-0 right-0 h-full w-96 bg-white float-right p-8 md:p-2">
  //         <button
  //           type="button"
  //           className="flex items-center text-lg font-medium cursor-pointer gap-2 ml-10 border-none bg-transparent"
  //           onClick={() => setShowCart(false)}
  //         >
  //           <AiOutlineLeft onClick={() => setShowCart(!showCart)} />
  //           <span className="ml-10 text-gray-700">Your Basket</span>
  //           <span className="ml-1 text-gray-500">({totalQuantities} items)</span>
  //         </button>
  //         {cartItems.length < 1 && (
  //           <div className="font-bold text-base">
  //             <AiOutlineShopping size={150} />
  //             <h3>Your shopping bag is empty</h3>
  //             <Link href="/">
  //               <button
  //                 type="button"
  //                 onClick={() => setShowCart(!showCart)}
  //                 className="w-full max-w-400 p-10 rounded-lg border-none text-2xl font-bold text-white uppercase bg-green-600 cursor-pointer transform transition duration-500 hover:scale-105 focus:outline-none"
  //               >
  //                 Continue Shopping
  //               </button>
  //             </Link>
  //           </div>
  //         )}
  //         <div className="mt-15 overflow-auto max-h-70vh p-20 sm:p-10">
  //           {cartItems.length >= 1 &&
  //             cartItems.map((item) => (
  //               <div className="flex gap-30 p-20" key={item._id}>
  //                 <img
  //                   src={urlFor(item?.image[0])}
  //                   className="w-180 h-150 rounded-15 bg-gray-200
  //                   "
  //                 />
  //                 <div
  //                   className="mt-6 flex justify-between w-350 text-blue-900
  // "
  //                 >
  //                   <div
  //                     className="flex-wrap gap-10
  // "
  //                   >
  //                     <h5>{item.name}</h5>
  //                     <h4>£{item.price}</h4>
  //                   </div>
  //                   <div className="mt-60">
  //                     <div>
  //                       <p
  //                         className="border border-gray-400 p-6 flex items-center
  // "
  //                       >
  //                         <span
  //                           className="text-2xl text-red-600 cursor-pointer bg-transparent border-none mr-2"
  //                           onClick={() =>
  //                             toggleCartItemQuanitity(item._id, "dec")
  //                           }
  //                         >
  //                           <AiOutlineMinus />
  //                         </span>
  //                         <span className="num" onClick="">
  //                           {item.quantity}
  //                         </span>
  //                         <span
  //                           className="text-2xl text-green-600 cursor-pointer bg-transparent border-none ml-2"
  //                           onClick={() =>
  //                             toggleCartItemQuanitity(item._id, "inc")
  //                           }
  //                         >
  //                           <AiOutlinePlus />
  //                         </span>
  //                       </p>
  //                     </div>
  //                     <button
  //                       type="button"
  //                       className="text-2xl text-red-600 cursor-pointer bg-transparent border-none
  //                       "
  //                       onClick={() => onRemove(item)}
  //                     >
  //                       <TiDeleteOutline />
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //         </div>
  //         {cartItems.length >= 1 && (
  //           <div className="cart-bottom">
  //             <div className="total">
  //               <h3>Subtotal:</h3>
  //               <h3>£{totalPrice}</h3>
  //             </div>
  //             <div className="btn-container">
  //               <button
  //                 type="button"
  //                 className="w-full max-w-400 p-10 rounded-lg border-none text-2xl font-bold text-white uppercase bg-green-600 cursor-pointer transform transition duration-500 hover:scale-105 focus:outline-none"
  //                 onClick={handleCheckout}
  //               >
  //                 Pay with Stripe
  //               </button>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
};

export default ShoppingCart;
