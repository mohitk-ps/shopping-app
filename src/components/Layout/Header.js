import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartModal from "../Cart/CartModal";
import Wrapper from "../common/Wrapper";
import { getTotals } from "../../state/features/cartSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" width="120" />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="products" className="nav-link">
                  Products
                </Link>
              </li>
            </ul>
            <button
              className="navbar-text border-0 bg-white"
              onClick={handleShow}
            >
              <img src="/static/images/cart.svg" width="30" />
              {cart.cartTotalQuantity} items
            </button>
          </div>
        </div>
      </nav>
      <CartModal show={show} handleClose={handleClose} />
    </Wrapper>
  );
};

export default Header;
