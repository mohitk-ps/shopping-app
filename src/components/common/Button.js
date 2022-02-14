import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-primary rounded-0" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
