import React from "react";
import styled from "styled-components";
import logoText from "../images/common/logo-text.svg";
import iconMail from "../images/common/icon-mail.svg";
import iconGithub from "../images/common/icon-github.svg";
import iconYoutube from "../images/common/icon-youtube.svg";
import iconInstagram from "../images/common/icon-instagram.svg";
import iconCafe from "../images/common/icon-cafe.svg";
import iconBlog from "../images/common/icon-blog.svg";
import { useIsMobile } from "hooks/useIsMobile";

interface SNSGroupsType {
  img: string;
  link: string;
}

const ARTICLE = {
  title: "학회 정관",
  link: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/KUSITMS_29th_constitution.pdf",
};

const RIGHTS =
  "KUSITMS (큐시즘, 한국대학생IT경영학회)\nⓒ 2023. KUSITMS. All rights reserved.";

const SNSGROUPS = [
  {
    img: iconMail,
    link: "kusitms@gmail.com ",
  },
  {
    img: iconInstagram,
    link: "https://www.instagram.com/kusitms_official/",
  },
  {
    img: iconYoutube,
    link: "https://www.youtube.com/@KUSITMS",
  },
  {
    img: iconCafe,
    link: "https://cafe.naver.com/kusitms",
  },
  {
    img: iconBlog,
    link: "https://blog.naver.com/kusitms10",
  },
  {
    img: iconGithub,
    link: "https://github.com/kusitms-com",
  },
];

const Footer = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <MobileFooterContainer>
        <MobileMainContainer>
          <MobileTopContainer>
            <img src={logoText} width={129} style={{ marginBottom: "23px" }} />
            <MobileText>
              <a href={ARTICLE.link} target="_blank" rel="noreferrer">
                {ARTICLE.title}
              </a>
            </MobileText>
            <SubText>{RIGHTS}</SubText>
          </MobileTopContainer>
          <MobileBottomContainer>
            <ContactContainer style={{ marginBottom: "24px" }}>
              {"Contact"}
            </ContactContainer>
            <CircleContainer>
              {SNSGROUPS.map((group: SNSGroupsType, index: number) => {
                if (index === 0) {
                  return (
                    <Circle key={index}>
                      <a
                        href={`mailto:${group.link}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={group.img} />
                      </a>
                    </Circle>
                  );
                }
                return (
                  <Circle key={index}>
                    <a href={group.link} target="_blank" rel="noreferrer">
                      <img src={group.img} />
                    </a>
                  </Circle>
                );
              })}
            </CircleContainer>
          </MobileBottomContainer>
        </MobileMainContainer>
      </MobileFooterContainer>
    );
  }
  return (
    <FooterContainer>
      <LeftContainer>
        <img src={logoText} width={129} />
        <Text>
          <a href={ARTICLE.link} target="_blank" rel="noreferrer">
            {ARTICLE.title}
          </a>
        </Text>
        <SubText>{RIGHTS}</SubText>
      </LeftContainer>
      <RightContainer>
        <ContactContainer>{"Contact"}</ContactContainer>
        <CircleContainer>
          {SNSGROUPS.map((group: SNSGroupsType, index: number) => {
            if (index === 0) {
              return (
                <Circle key={index}>
                  <a
                    href={`mailto:${group.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={group.img} />
                  </a>
                </Circle>
              );
            }
            return (
              <Circle key={index}>
                <a href={group.link} target="_blank" rel="noreferrer">
                  <img src={group.img} />
                </a>
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
  width: 100%;
  height: 252px;

  padding: 0px 369px;
  gap: 618px;

  justify-content: center;
  align-items: flex-end;
  padding-bottom: 56px;

  background: #151519;
  font-family: "SUIT";
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
  gap: 20px;
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

/// /////////////////////////////

const MobileFooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 477px;

  background: #151519;
  justify-content: center;
`;

const MobileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 477px;

  padding: 60px 0px 100px 28px;

  background: #151519;
  font-family: "SUIT";
  gap: 60px;
`;

const MobileTopContainer = styled.div`
  width: 264px;
  height: 164px;

  padding-top: 23px;
`;
const MobileBottomContainer = styled.div`
  width: 350px;
  height: 93px;
`;

const MobileText = styled.p`
  font-family: "SUIT";
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-decoration-line: underline;
  color: #ffffff;
  margin-top: 16px;
`;
