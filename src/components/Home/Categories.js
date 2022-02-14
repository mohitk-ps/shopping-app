import React from "react";
import Wrapper from "../common/Wrapper";
import Button from "../common/Button";

const Categories = ({ categories }) => {
  return (
    <>
      {categories
        ?.sort(function (a, b) {
          return a.order - b.order;
        })
        .map(
          (category) =>
            category.order > 0 && (
              <Wrapper>
                <div className="row">
                  <div className="col-md-6">
                    <div className="p-5 text-center">
                      <img src={category.imageUrl} width="300" />
                    </div>
                  </div>
                  <div
                    className={`col-md-6 ${
                      category.order % 2 == 0 ? "order-first" : ""
                    }`}
                  >
                    <div className="text-center p-5 h-100 d-flex align-items-center justify-content-center">
                      <div>
                        <h4>{category.name}</h4>
                        <p>{category.description}</p>
                        <Button text={`Explore ${category.key}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </Wrapper>
            )
        )}
    </>
  );
};

export default Categories;
