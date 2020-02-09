import React from "react";
import styled from "styled-components";

import CalendarIcon from "../components/icons/calendar";
import WhatsIcon from "../components/icons/whats";
import EmailIcon from "../components/icons/email";
import SkypeIcon from "../components/icons/skype";
import PhoneIcon from "../components/icons/phone";
import ChatIcon from "../components/icons/chat";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f8fafc;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 20px 0px 0px 0px;
`;

const ItemContainer = styled.div`
  padding: 20px;
  overflow: hidden;
  background: #f8fafc;
  border-radius: 20px 0px 0px 0px;
`;

const WhatsContainer = styled(ItemContainer)`
  border-radius: 0px;
  background: #25d366;
`;

const Item = styled.button`
  padding: 0;
  border: none;
  background: #f8fafc;
`;

const WhatsItem = styled(Item)`
  background: #25d366;
`;

const SocialMedia = () => (
  <Container>
    <ItemContainer>
      <Item>
        <CalendarIcon />
      </Item>
    </ItemContainer>
    <WhatsContainer>
      <WhatsItem>
        <WhatsIcon />
      </WhatsItem>
    </WhatsContainer>
    <ItemContainer>
      <Item>
        <EmailIcon />
      </Item>
    </ItemContainer>
    <ItemContainer>
      <Item>
        <SkypeIcon />
      </Item>
    </ItemContainer>
    <ItemContainer>
      <Item>
        <PhoneIcon />
      </Item>
    </ItemContainer>
    <ItemContainer>
      <Item>
        <ChatIcon />
      </Item>
    </ItemContainer>
  </Container>
);

export default SocialMedia;
