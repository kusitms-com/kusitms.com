/* eslint-disable react/jsx-key */
import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import mainImage from "../../images/main/main-image.svg";
import mainSubImage from "../../images/main/sub-main-image.svg";
import imphasisImage from "../../images/main/emphasis-image.svg";
import designIcon from "../../images/main/icon-design.svg";
import developIcon from "../../images/main/icon-develop.svg";
import planIcon from "../../images/main/icon-plan.svg";
import rightArrowIcon from "../../images/main/icon-right-arrow.svg";

import managementImage1 from "../../images/main/management-image-1.png";
import managementImage2 from "../../images/main/management-image-2.png";
import managementImage3 from "../../images/main/management-image-3.png";

import introduceProgramImage1 from "../../images/main/introduce-program-image-1.png";
import introduceProgramImage2 from "../../images/main/introduce-program-image-2.png";
import introduceProgramImage3 from "../../images/main/introduce-program-image-3.png";
import introduceProgramImage4 from "../../images/main/introduce-program-image-4.png";

interface introductionGroupType {
  img: string;
  title: string;
  content: string;
}

interface managementContentType {
  img: string;
  title: string;
  content: string;
}

const MAINTEXT = "비전을 가지고\n함께 성장하는 학회";
const WORTHTEXT = "Vision\nGrowth\nTogether";
const KUSTIMS = "Korean University Students\nIT, Management Society";
const INTRODUCTION_TITLE_1 = "함께하는\n큐밀리";
const INTRODUCTION_TITLE_2 = "학회 프로그램 소개";
const INTRODUCTION_DESCRIPTION_1 =
  "KUSITMS은 기획, 개발, 디자인 팀으로 구성되어 있어요\n각 팀에서 모인 팀원들이 하나의 조가 되어 함께 프로젝트를 진행해요";
const INTRODUCTION_DESCRIPTION_2 =
  "KUSITMS에서는 학회원이 새로운 경험을 통해 성장할 수 있도록\n다양한 프로그램을 진행해요.";

const INTRODUCTION_GROUPS = [
  {
    img: planIcon,
    title: "기획팀",
    content:
      "각 조에서 탄생한 아이디어를 바탕으로 실제 IT 서비스를 기획해요.\n개발팀과 디자인팀과의 협업을 통해 개발 가능성 있는 기능들을 사용자 관점에서 기획할 수 있어요.",
  },
  {
    img: developIcon,
    title: "개발팀",
    content:
      "팀에서 정의한 문제를 기술적으로 해결하는 과정에 참여해요.\n아이디어에 가장 효과적인 플랫폼을 선택하고, 기획팀 그리고 디자인팀과 협력하며 서비스를 구체화해요.",
  },
  {
    img: designIcon,
    title: "디자인팀",
    content:
      "아이디어를 제품화하기 위해 UI기획부터 설계, 구현까지 비주얼적인 부분을 담당해요.\n사용하기 쉬운 UX를 고민하고, 확장성 있는 제품 개발을 위해 디자인 시스템을 구축하는 역할을 맡아요.",
  },
];

const MANAGEMENT_TITLE =
  "KUSITMS 활동을 이끄는 운영진이에요.\n학회원 활동과 운영진 활동을 함께해요.";

const MANAGEMENT_CONTENTS = [
  {
    img: managementImage1,
    title: "경영총괄팀",
    content:
      "OT/LT, 큐시즘 데이, 큐시즘의 밤 등\n학회 행사를 기획하고,\n회원 관리, 장소 대관, 예산 관리 등\n학회 경영 관련 업무를 총괄해요.",
  },
  {
    img: managementImage2,
    title: "교육기획팀",
    content:
      "초청 강연, 기업 프로젝트, 밋업데이 등\n학회의 전반적인 교육 커리큘럼을\n주관 및 진행하고, 학회원을 대상으로\n정기 교육 세션을 실시해요.",
  },
  {
    img: managementImage3,
    title: "대외홍보팀",
    content:
      "학회 행사와 관련된 콘텐츠를 제작하고,\n전반적인 SNS 관리 및 마케팅,\n외부 기관과의 컨택 및 협찬제안을 담당해요.",
  },
];

const INTRODUCE_PROGRAMS = [
  introduceProgramImage1,
  introduceProgramImage2,
  introduceProgramImage3,
  introduceProgramImage4,
];

const MainPage = () => {
  return (
    <Layout>
      <MainContainer>
        <MainText>{MAINTEXT}</MainText>
        <img src={mainImage} width={1430} />
        <WorthContainer>
          <LeftContainer>
            <WorthText>{WORTHTEXT}</WorthText>
            <KustimsText>{KUSTIMS}</KustimsText>
          </LeftContainer>
          <img src={mainSubImage} />
        </WorthContainer>
      </MainContainer>
      <IntroductionContainer>
        <TitleTextContainer>
          <TitleText>{INTRODUCTION_TITLE_1}</TitleText>
          <img src={imphasisImage} />
        </TitleTextContainer>
        <DescriptionText>{INTRODUCTION_DESCRIPTION_1}</DescriptionText>
      </IntroductionContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {INTRODUCTION_GROUPS.map(
          (group: introductionGroupType, index: number) => {
            return <IntroductionCard {...group} />;
          }
        )}
      </div>
      <Button>
        {"학회 소개영상 보러가기"}
        <img src={rightArrowIcon} />
      </Button>
      <ManagementContainer>
        <ManagementTitle>{MANAGEMENT_TITLE}</ManagementTitle>
        <div style={{ display: "flex", gap: "20px" }}>
          {MANAGEMENT_CONTENTS.map(
            (content: managementContentType, index: number) => {
              return <ManagementCard {...content} />;
            }
          )}
        </div>
      </ManagementContainer>
      <IntroduceProgramContainer>
        <TitleTextContainer>
          <TitleText>{INTRODUCTION_TITLE_2}</TitleText>
          <img src={imphasisImage} />
        </TitleTextContainer>
        <DescriptionText>{INTRODUCTION_DESCRIPTION_2}</DescriptionText>
        <IntroduceProgramCardContainer>
          {INTRODUCE_PROGRAMS.map((program: string, index: number) => {
            return (
              <div>
                <img src={program} />
              </div>
            );
          })}
        </IntroduceProgramCardContainer>
      </IntroduceProgramContainer>
    </Layout>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1920px;
  height: 1801px;
  padding-top: 192px;

  background: #151519;

  font-family: "SUIT", sans-serif;
`;

const MainText = styled.p`
  font-weight: 800;
  font-size: 72px;
  line-height: 96px;

  text-align: center;
  letter-spacing: -1px;

  color: #ffffff;

  white-space: pre;
  font-family: "SUIT";
`;

const WorthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 370px;

  padding: 0px 370px;
  margin-top: 39px;
`;

const WorthText = styled.p`
  font-size: 72px;
  line-height: 96px;
  letter-spacing: -1px;

  color: #ffffff;

  white-space: pre;
  font-family: "SUIT";
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const KustimsText = styled.p`
  font-size: 36px;
  line-height: 42px;

  letter-spacing: -0.2px;

  color: #ffffff;
`;

//

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleTextContainer = styled.div`
  align-self: center;
`;

const TitleText = styled.h3`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;

  color: #ffffff;

  margin-bottom: 8px;

  font-family: "SUIT";
`;

const DescriptionText = styled.p`
  margin-top: 48px;
  margin-bottom: 80px;

  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.2px;

  color: #ffffff;

  white-space: pre;
  font-family: "SUIT";
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  margin-top: 40px;
  gap: 10px;

  height: 48px;

  background: #0055ff;
  border-radius: 75px;

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.2px;

  color: #ffffff;
`;

const ManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 180px;

  margin-bottom: 200px;
`;

const ManagementTitle = styled.p`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.2px;

  /* WH */

  color: #ffffff;

  white-space: pre;

  margin-bottom: 80px;
  font-family: "SUIT";
`;

const IntroduceProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroduceProgramCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > img {
    flex: 1;
  }
`;
const IntroductionCard = (group: introductionGroupType) => {
  return (
    <IntroductionCardContainer flexDirection={group.title === "개발팀"}>
      <img src={group.img} />
      <IntroductionCardSideContainer>
        <IntroductionCardTitle textAlign={group.title === "개발팀"}>
          {group.title}
        </IntroductionCardTitle>
        <IntroductionCardContent textAlign={group.title === "개발팀"}>
          {group.content}
        </IntroductionCardContent>
      </IntroductionCardSideContainer>
    </IntroductionCardContainer>
  );
};

const IntroductionCardContainer = styled.div<{ flexDirection: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? "row-reverse" : "row")};
  justify-content: center;

  padding: 56px 64px;
  gap: 40px;

  width: 980px;
  height: 208px;

  /* WH */

  background: #ffffff;
  border-radius: 32px;
`;

const IntroductionCardSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroductionCardTitle = styled.p<{ textAlign: boolean }>`
  text-align: ${(props) => (props.textAlign ? "right" : "left")};
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;

  color: #0055ff;

  font-family: "SUIT";
`;

const IntroductionCardContent = styled.p<{ textAlign: boolean }>`
  text-align: ${(props) => (props.textAlign ? "right" : "left")};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.5px;

  /* BK */

  color: #000000;

  white-space: pre;
  font-family: "SUIT";
`;

const ManagementCard = (content: managementContentType) => {
  return (
    <ManagementCardContainer url={content.img}>
      <ManagementCardTitle>{content.title}</ManagementCardTitle>
      <ManagementCardContent>{content.content}</ManagementCardContent>
    </ManagementCardContainer>
  );
};

const ManagementCardContainer = styled.div<{ url: string }>`
  width: 347px;
  height: 520px;
  background: url(${(props) => props.url}) no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 55px;
`;

const ManagementCardTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;

  color: #ffffff;

  white-space: pre;

  margin-bottom: 24px;
  font-family: "SUIT";
`;

const ManagementCardContent = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.5px;

  color: #c5c5d0;
  white-space: pre;
  font-family: "SUIT";
`;
