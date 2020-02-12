import React from "react";
import styled from "styled-components";

import OptionsBar from "./options-bar";
import Conversation from "./conversation";
import TypingBox from "./typing-box";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
`;

const Chat = () => (
  <Container>
    <OptionsBar />
    <Conversation />
    <TypingBox />
  </Container>
);

export default Chat;
