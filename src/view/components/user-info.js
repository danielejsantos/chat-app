import React from "react";
import styled from "styled-components";

import UnreadMessage from "./unread";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 15px;
`;

const StyledContactImage = styled.img`
  max-height: 48px;
  max-width: 48px;
`;

const ContactWithoutImage = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.2);
`;

const NameContainer = styled.div`
  max-width: 120px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
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

const UnreadWrapper = styled.div`
  display: flex;
  padding-left: 60px;
  justify-content: center;
  padding-top: 9px;
`;

const UserInfo = ({ image, name, job, unreadNumber }) => (
  <Container>
    {image && <StyledContactImage src={image} alt="" />}
    {!image && <ContactWithoutImage />}
    <NameContainer>
      <NameText>{name}</NameText>
      <Job>{job}</Job>
    </NameContainer>
    {unreadNumber && (
      <UnreadWrapper>
        <UnreadMessage number={unreadNumber} />
      </UnreadWrapper>
    )}
  </Container>
);

export default UserInfo;
