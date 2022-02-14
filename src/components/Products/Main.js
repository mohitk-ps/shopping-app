import React from "react";
import Card from "./Card";

const Main = ({ products }) => {
  return (
    <div className="col-sm-9">
      <div className="row">
        {products?.map((product) => (
          <div className="col-md-3 col-sm-6 my-2">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
