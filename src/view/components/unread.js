import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background: #e33e1a;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 100%;
`;

const MessageNumber = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
`;

const UnreadMessage = ({ number }) => (
  <Container>
    <MessageNumber>{number}</MessageNumber>
  </Container>
);

export default UnreadMessage;
