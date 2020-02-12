import React from "react";
import styled from "styled-components";

import Contacts from "./contacts";
import SocialMedia from "./social-media";
import Chat from "./chat";
import ContactDetails from "./contact-details";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 15px;
  background: linear-gradient(0deg, #168b7d, #168b7d);
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
`;

const Main = () => (
  <Container>
    <Contacts />
    <SocialMedia />
    <Chat />
    <ContactDetails />
  </Container>
);

export default Main;
