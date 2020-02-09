import React from "react";
import styled from "styled-components";

import Contacts from "./contacts";
import SocialMedia from "./social-media";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(0deg, #168b7d, #168b7d);
  flex-direction: row;
`;

const Main = () => (
  <Container>
    <Contacts />
    <SocialMedia />
  </Container>
);

export default Main;
