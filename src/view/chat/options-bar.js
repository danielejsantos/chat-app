import React from "react";
import styled from "styled-components";

import SearchBar from "../components/search-bar";

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 18px 0px;
  width: 100%;
`;

const SearchBarWrapper = styled.div`
  padding-left: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 20px;
`;

const TransferButton = styled.button`
  background: #fff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 1px 0px #e5e5e5;
  border-radius: 4px;
  padding: 0px 10px;
`;

const TransferText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 0px;
  color: #00a7cf;
  text-align: center;
`;

const EndService = styled.button`
  background: #00a7cf;
  margin-left: 10px;
  box-shadow: 0px 1px 0px #0794b6;
  border: none;
  border-radius: 4px;
  padding: 0px 10px;
`;

const EndServiceText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 0px;
  color: #fff;
`;

const OptionsBar = () => (
  <Container>
    <SearchBarWrapper>
      <SearchBar iconColor="#A7B6C2" />
    </SearchBarWrapper>
    <ButtonsContainer>
      <TransferButton>
        <TransferText>TRANSFERIR</TransferText>
      </TransferButton>
      <EndService>
        <EndServiceText>FINALIZAR ATENDIMENTO</EndServiceText>
      </EndService>
    </ButtonsContainer>
  </Container>
);

export default OptionsBar;
