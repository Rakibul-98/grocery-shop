import React, { useContext } from "react";
import NavBar from "../Shared/Navbar/NavBar";
import Foot from "../Shared/Footer/Foot";
import useTitle from "../../Title/useTitle";
import OrderSummery from "../OrderSummery/OrderSummery";
import ReviewItems from "../ReviewItems/ReviewItems";
import { ProductContext } from "../../contexts/ProductsProvider";

const Review = () => {
  const { cartProducts } = useContext(ProductContext);
  useTitle("Review");

  return (
    <div>
      <NavBar />
      <div className="py-10 max-w-7xl mx-auto px-4 md:px-0">
        <div className="md:flex items-start  gap-20">
          <div className="mb-10 flex-1">
            {cartProducts.length ? (
              <div>
                {cartProducts.map((product) => (
                  <ReviewItems key={product._id} product={product}></ReviewItems>
                ))}
              </div>
            ) : (
              <div>
                <img
                  className="w-6/12 mx-auto"
                  src="https://i.ibb.co/Xt7vHqM/Ice-cream-seller-amico.png"
                  alt=""
                />
                <p className="text-center text-orange-500 text-2xl font-bold">
                  No items found. Please add items to review!!!
                </p>
              </div>
            )}
          </div>
          <div className="w-full md:w-96 mx-auto border bg-slate-100">
            <OrderSummery />
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Review;
