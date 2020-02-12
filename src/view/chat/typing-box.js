import React from "react";
import styled from "styled-components";

import PictureIcon from "../components/icons/picture";
import CopyIcon from "../components/icons/copy";
import VoiceIcon from "../components/icons/voice";
import SendIcon from "../components/icons/send";

const Container = styled.div`
  position: relative;
  height: 5%;
  width: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
`;

const IconsRow = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 120px;
  right: 50px;
  bottom: 5px;
`;

const TypingBox = () => (
  <Container>
    <StyledInput placeholder="Digite sua mensagem..." />
    <IconsRow>
      <PictureIcon />
      <CopyIcon />
      <VoiceIcon />
      <SendIcon />
    </IconsRow>
  </Container>
);

export default TypingBox;
