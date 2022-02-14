import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  box-shadow: 0px 10px 6px 0px rgba(0, 0, 0, 0.07);
  -webkit-box-shadow: 0px 10px 6px 0px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 10px 6px 0px rgba(0, 0, 0, 0.07);
`;

export default Wrapper;
