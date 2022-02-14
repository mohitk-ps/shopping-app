import React from "react";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { addToCart } from "../../state/features/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="p-2 h-100 d-flex flex-column"
      style={{ borderBottom: "1.5px dashed rgb(226 226 226)" }}
    >
      <h5 style={{ minHeight: 75 }}>{product.name}</h5>
      <img src={product.imageURL} className="w-100" />
      <div
        className="bg-light p-2 my-3"
        style={{ overflow: "hidden", height: 100, fontSize: 12 }}
      >
        {product.description}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="m-0">MRP Rs.{product.price}</p>

        <Button
          text="Buy Now"
          onClick={() => dispatch(addToCart({ product }))}
        />
      </div>
    </div>
  );
};

export default Card;
