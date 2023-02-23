import React from "react";
import styled from "styled-components";
import logoText from "../images/common/logo-text.svg";
import iconMail from "../images/common/icon-mail.svg";
import iconGithub from "../images/common/icon-github.svg";
import iconYoutube from "../images/common/icon-youtube.svg";
import iconInstagram from "../images/common/icon-instagram.svg";
import iconCafe from "../images/common/icon-cafe.svg";

interface SNSGroupsType {
  img: string;
  link: string;
}

const ARTICLE = {
  title: "학회 정관",
  link: "http://naver.com",
};

const RIGHTS =
  "KUSITMS (큐시즘, 한국대학생IT경영학회)\nⓒ 2023. KUSITMS. All rights reserved.";

const SNSGROUPS = [
  {
    img: iconMail,
    link: "/",
  },
  {
    img: iconInstagram,
    link: "/",
  },
  {
    img: iconYoutube,
    link: "/",
  },
  {
    img: iconCafe,
    link: "/",
  },
  {
    img: iconGithub,
    link: "/",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <img src={logoText} width={129} />
        <Text>{ARTICLE.title}</Text>
        <SubText>{RIGHTS}</SubText>
      </LeftContainer>
      <RightContainer>
        <ContactContainer>{"Contact"}</ContactContainer>
        <CircleContainer>
          {SNSGROUPS.map((group: SNSGroupsType, index: number) => {
            return (
              <Circle key={index}>
                <img src={group.img} />
              </Circle>
            );
          })}
        </CircleContainer>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 252px;

  padding: 0px 369px;

  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 56px;

  background: #151519;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-decoration-line: underline;

  color: #ffffff;

  white-space: pre;
  margin-top: 16px;
`;

const SubText = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.5px;

  color: #ffffff;
  white-space: pre;

  margin-top: 16px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactContainer = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;

  color: #ffffff;
`;

const CircleContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: #45464f;
`;
