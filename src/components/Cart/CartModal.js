import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  getTotals,
  addToCart,
  decreaseCart,
} from "../../state/features/cartSlice";

const CartModal = ({ handleClose, show }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-dark text-white">
        <h5 className="mr-2 mt-2">My Cart</h5>
        <div>({cart.cartTotalQuantity} items)</div>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "scroll" }}>
        {cart.cartItems?.map((item) => (
          <List
            item={item}
            handleAddToCart={handleAddToCart}
            handleDecreaseCart={handleDecreaseCart}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex align-items-center flex-column">
          <p>Promo code can be applied on payment page</p>
          <button
            className="btn btn-primary d-flex w-100 justify-content-between py-3"
            onClick={handleClose}
          >
            <span>Proceed to Checkout</span>
            <span>
              Rs.{cart.cartTotalAmount} {">"}
            </span>
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const List = ({ item, handleAddToCart, handleDecreaseCart }) => {
  let total = item.cartQuantity * item.price;

  return (
    <div className="d-flex" key={item.id}>
      <img src={item.imageURL} width="70" />
      <div className="mx-2 w-100">
        <h6>{item.name}</h6>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <ButtonRound
              className="mx-2 bg-primary text-center"
              onClick={() => handleDecreaseCart(item)}
            >
              -
            </ButtonRound>{" "}
            {item.cartQuantity}{" "}
            <ButtonRound
              className="mx-2 bg-primary text-center"
              onClick={() => handleAddToCart(item)}
            >
              +
            </ButtonRound>{" "}
            &nbsp; <span>X &nbsp; Rs.{item.price}</span>
          </div>
          {console.log("===", item.cartQuantity, item.price)}
          <div>Rs.{total}</div>
        </div>
      </div>
    </div>
  );
};

const ButtonRound = styled.div`
  width: 25px;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
`;

export default CartModal;
