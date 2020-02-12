import React from "react";
import styled from "styled-components";

import IconButton from "./icon-button";
import ContactImg from "../../assets/contact.png";
import Edit from "../components/icons/edit";
import Delete from "../components/icons/delete";
import Whats from "../components/icons/whats";
import Skype from "../components/icons/skype";
import Email from "../components/icons/email";

const Container = styled.div`
  background: #fff;
  height: 100%;
  width: 20%;
  border-left: 1px solid rgba(0, 0, 0, 0.04);
  padding-left: 20px;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.span`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 14px;
  color: #222222;
`;

const JobText = styled.span`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  color: #222222;
  font-size: 11px;
  color: #00a7cf;
`;

const StyledContactImage = styled.img`
  height: 60px;
  width: 60px;
  padding: 20px 10px 20px 0px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonIconWrapper = styled.div`
  padding-right: 10px;
`;

const LastConversations = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  color: #79accd;
  margin-left: 20px;
`;

const LastConversationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LastConversationsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  padding-right: 8px;
`;

const DateRow = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #222222;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
`;

const NotesTitle = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  line-height: 0px;
  font-size: 12px;
  color: #79accd;
`;

const NotesText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #222222;
  padding-right: 15px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactIconWrapper = styled.div`
  display: flex;
  align-self: center;
  padding-right: 16px;
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 0px;
  color: #8fbad6;
`;

const ContactDetails = () => (
  <Container>
    <ContactInfoContainer>
      <StyledContactImage src={ContactImg} alt="User" />
      <ContactInfo>
        <NameText>João da Silva</NameText>
        <JobText>ACME INC</JobText>
      </ContactInfo>
    </ContactInfoContainer>
    <IconContainer>
      <ButtonIconWrapper>
        <IconButton Icon={<Edit />} />
      </ButtonIconWrapper>
      <IconButton Icon={<Delete />} />
    </IconContainer>
    <LastConversations>ÚLTIMAS CONVERSAS</LastConversations>
    <LastConversationsContainer>
      <LastConversationsRow>
        <IconWrapper>
          <Whats width={16} height={16} color="#A7B6C2" />
        </IconWrapper>
        <DateRow>25/09/2019 (10 dias atrás)</DateRow>
      </LastConversationsRow>
      <LastConversationsRow>
        <IconWrapper>
          <Whats width={16} height={16} color="#A7B6C2" />
        </IconWrapper>
        <DateRow>15/09/2019 (20 dias atrás)</DateRow>
      </LastConversationsRow>
      <LastConversationsRow>
        <IconWrapper>
          <Skype width={16} height={16} color="#A7B6C2" />
        </IconWrapper>
        <DateRow>15/06/2019 (100 dias atrás)</DateRow>
      </LastConversationsRow>
    </LastConversationsContainer>
    <NotesContainer>
      <NotesTitle>OBSERVAÇÕES:</NotesTitle>
      <NotesText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lacus, et
        potenti nisl viverra a, feugiat. Eget ultrices elit faucibus arcu
        volutpat vulputate.
      </NotesText>
    </NotesContainer>
    <ContactContainer>
      <ContactRow>
        <ContactIconWrapper>
          <Whats width={24} height={24} color="#A7B6C2" />
        </ContactIconWrapper>
        <TitleContainer>
          <ContactTitle>WHATSAPP</ContactTitle>
          <DateRow>55 (19) 1234-5678</DateRow>
        </TitleContainer>
      </ContactRow>

      <ContactRow>
        <ContactIconWrapper>
          <Email width={24} height={24} color="#A7B6C2" />
        </ContactIconWrapper>
        <TitleContainer>
          <ContactTitle>EMAIL</ContactTitle>
          <DateRow>joao@silva.com.br</DateRow>
        </TitleContainer>
      </ContactRow>

      <ContactRow>
        <ContactIconWrapper>
          <Skype width={24} height={24} color="#A7B6C2" />
        </ContactIconWrapper>
        <TitleContainer>
          <ContactTitle>SKYPE</ContactTitle>
          <DateRow>@joao_silva</DateRow>
        </TitleContainer>
      </ContactRow>
    </ContactContainer>
  </Container>
);

export default ContactDetails;
