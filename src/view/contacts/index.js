import React from "react";
import styled from "styled-components";

import UserImg from "../../assets/user.png";
import ContactImage from "../../assets/contact.png";

import ArrowDown from "../components/icons/arrow-down";
import SearchBar from "../components/search-bar";
import PlusIcon from "../components/icons/plus";
import UserInfo from "../components/user-info";

const Container = styled.div`
  height: 100%;
  width: 21%;
`;

const UserInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`;

const StyledUserImg = styled.img`
  max-height: 32px;
  max-width: 32px;
`;

const NameDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const NameText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  color: #fff;
  margin: 0px;
`;

const Job = styled(NameText)`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
`;

const IconWrapper = styled.div`
  align-self: center;
  padding-left: 5%;
`;

const SearchContainer = styled.div`
  margin-left: 15px;
  margin-top: 13px;
`;

const InProgressRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 15px;
`;

const InProgress = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
`;

const InProgressArrowIconWrapper = styled.div`
  display: flex;
  align-self: center;
  padding-left: 10px;
`;

const PlusIconWrapper = styled.div`
  display: flex;
  align-self: center;
  padding-left: 100px;
`;

const Contacts = () => (
  <Container>
    <UserInfoRow>
      <StyledUserImg src={UserImg} alt="User" />
      <NameDescriptionContainer>
        <NameText>Carlos Corrêa</NameText>
        <Job>PREMIUM PEÇAS</Job>
      </NameDescriptionContainer>
      <IconWrapper>
        <ArrowDown />
      </IconWrapper>
    </UserInfoRow>
    <SearchContainer>
      <SearchBar backgroundColor="rgba(255, 255, 255, 0.15)" iconColor="#fff" />
    </SearchContainer>
    <InProgressRow>
      <InProgress>EM ANDAMENTO</InProgress>
      <InProgressArrowIconWrapper>
        <ArrowDown />
      </InProgressArrowIconWrapper>
      <PlusIconWrapper>
        <PlusIcon />
      </PlusIconWrapper>
    </InProgressRow>
    <UserInfo
      image={ContactImage}
      name="João da Silva"
      job="ACME INC"
      unreadNumber={3}
    />
    <UserInfo name="Nome do Usuário" job="EMPRESA" />
    <UserInfo name="Nome do Usuário" job="EMPRESA" />
    <UserInfo name="Nome do Usuário" job="EMPRESA" />
    <UserInfo name="Nome do Usuário" job="EMPRESA" />
    <UserInfo name="Nome do Usuário" job="EMPRESA" />
  </Container>
);

export default Contacts;
