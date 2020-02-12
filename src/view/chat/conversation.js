import React from "react";
import styled from "styled-components";

import ContactImg from "../../assets/contact.png";
import UserImg from "../../assets/user.png";
import Check from "../components/icons/check";

const Container = styled.div`
  position: relative;
  background: #f8fafc;
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Line = styled.div`
  position: absolute;
  height: 1px;
  width: 90%;
  background: #dddddd;
  top: 40px;
  display: flex;
  align-self: center;
`;

const ServiceDate = styled.div`
  background: #dbf3f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  margin-top: 20px;
  z-index: 5;
`;

const ServiceDateText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: #636466;
`;

const TextBold = styled(ServiceDateText)`
  font-weight: bold;
`;

const ReceivedMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReceivedMessageDateContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 20px;
  padding-top: 10px;
`;

const StyledContactImg = styled.img`
  max-height: 24px;
  max-width: 24px;
  padding-right: 10px;
`;

const ReceivedMessageDateText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #636466;
`;

const ReceivedCheckWrapper = styled.div`
  display: flex;
  align-self: center;
  padding-left: 10px;
`;

const ReceivedMessageBoxContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  margin: 20px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px 10px 10px;
`;

const ReceivedMessageBoxText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #333333;
  padding: 0px 20px;
`;

const SentMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const SentMessageDateContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  align-self: flex-end;
`;

const SentMessageDateText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #636466;
`;

const SentMessageBoxContainer = styled.div`
  background: #caeac5;
  display: flex;
  justify-content: flex-start;
  align-self: flex-end;
  flex-direction: column;
  width: 50%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 10px 10px 10px;
  padding: 20px;
  margin-right: 20px;
`;

const SentMessageBoxText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  color: #333333;
`;

const SentCheckWrapper = styled.div`
  display: flex;
  align-self: center;
  padding-right: 10px;
`;

const StyledUserImg = styled.img`
  max-height: 24px;
  max-width: 24px;
  padding: 20px;
`;

const Conversation = () => (
  <Container>
    <Line />
    <ServiceDate>
      <ServiceDateText>
        Atendimento Finalizado em <TextBold>07/10/2019</TextBold>
      </ServiceDateText>
    </ServiceDate>
    <ReceivedMessageContainer>
      <ReceivedMessageDateContainer>
        <StyledContactImg src={ContactImg} alt="Contact" />
        <ReceivedMessageDateText>
          <TextBold>João da Silva - </TextBold>07/10/2019 14h10
        </ReceivedMessageDateText>
        <ReceivedCheckWrapper>
          <Check />
        </ReceivedCheckWrapper>
      </ReceivedMessageDateContainer>
      <ReceivedMessageBoxContainer>
        <ReceivedMessageBoxText>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim. Phasellus ullamcorper orci ac lorem
          ultrices, ac fringilla nisi bibendum. Integer quis aliquam massa,
          vitae condimentum lorem. Suspendisse scelerisque cursus nisl non
          pulvinar. Donec at varius nulla. Praesent volutpat, nibh ac volutpat
          pharetra, sapien sapien scelerisque sapien, id vehicula nibh elit in
          velit.
        </ReceivedMessageBoxText>
      </ReceivedMessageBoxContainer>
    </ReceivedMessageContainer>
    <SentMessageContainer>
      <SentMessageDateContainer>
        <SentCheckWrapper>
          <Check />
        </SentCheckWrapper>
        <SentMessageDateText>
          <TextBold>Carlos Corrêa - </TextBold> 07/10/2019 14h12
        </SentMessageDateText>
        <StyledUserImg src={UserImg} alt="User" />
      </SentMessageDateContainer>
      <SentMessageBoxContainer>
        <SentMessageBoxText>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim. Phasellus ullamcorper orci ac lorem
          ultrices, ac fringilla nisi bibendum. Integer quis aliquam massa,
          vitae condimentum lorem. Suspendisse scelerisque cursus nisl non
          pulvinar. Donec at varius nulla. Praesent volutpat, nibh ac volutpat
          pharetra, sapien sapien scelerisque sapien, id vehicula nibh elit in
          velit.
        </SentMessageBoxText>
      </SentMessageBoxContainer>
    </SentMessageContainer>
    <ReceivedMessageContainer>
      <ReceivedMessageDateContainer>
        <StyledContactImg src={ContactImg} alt="Contact" />
        <ReceivedMessageDateText>
          <TextBold>João da Silva - </TextBold> 07/10/2019 14h10
        </ReceivedMessageDateText>
        <ReceivedCheckWrapper>
          <Check />
        </ReceivedCheckWrapper>
      </ReceivedMessageDateContainer>
      <ReceivedMessageBoxContainer>
        <ReceivedMessageBoxText>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim
        </ReceivedMessageBoxText>
      </ReceivedMessageBoxContainer>
    </ReceivedMessageContainer>
  </Container>
);

export default Conversation;
