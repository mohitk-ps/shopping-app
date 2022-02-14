import React, { useState, useEffect } from "react";
import api from "../../api";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/products").catch((err) => {
        console.log(err);
      });
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="row">
      <Sidebar />
      <Main products={products} />
    </div>
  );
};

export default Products;
