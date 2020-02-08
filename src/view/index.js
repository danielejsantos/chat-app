import React from "react";
import styled from "styled-components";

import Contacts from "./contacts";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, #168b7d, #168b7d);
`;

const Main = () => (
  <Container>
    <Contacts />
  </Container>
);

export default Main;
