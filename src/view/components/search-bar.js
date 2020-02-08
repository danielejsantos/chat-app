import React from "react";
import styled from "styled-components";

import SearchIcon from "./icons/search";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 230px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  background: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const IconWrapper = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  right: 10px;
`;

const SearchBar = ({ backgroundColor, iconColor }) => (
  <Container>
    <SearchInput backgroundColor={backgroundColor} type="text" />
    <IconWrapper>
      <SearchIcon color={iconColor} />
    </IconWrapper>
  </Container>
);

export default SearchBar;
