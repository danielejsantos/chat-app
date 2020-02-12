import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  width: 110px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px #e5e5e5;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`;

const IconButton = ({ Icon }) => (
  <Container>
    <Button>{Icon}</Button>
  </Container>
);

export default IconButton;
