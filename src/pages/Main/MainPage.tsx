/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/jsx-key */
import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import { useIsMobile } from "hooks/useIsMobile";

import mainImage from "../../images/main/main-image.svg";
import mainImageMobile from "../../images/main/mobile/main-image.png";
import { ReactComponent as EmphasisImage } from "../../images/main/emphasis-image.svg";
import { ReactComponent as EmphasisImageWhite } from "../../images/main/emphasis-image-white.svg";
import designIcon from "../../images/main/icon-design.svg";
import developIcon from "../../images/main/icon-develop.svg";
import planIcon from "../../images/main/icon-plan.svg";
import rightArrowIcon from "../../images/main/icon-right-arrow.svg";

import { ReactComponent as MainLogoImage } from "../../images/main/logo-kusitms-main.svg";
import { ReactComponent as UpdownImage } from "../../images/main/up-down-image.svg";

import backgroundImage from "../../images/main/background-image.png";
import backgroundImageMobile from "../../images/main/mobile/background-image.png";

import managementImage1 from "../../images/main/management-image-1.png";
import managementImage2 from "../../images/main/management-image-2.png";
import managementImage3 from "../../images/main/management-image-3.png";

import managementImageMobile1 from "../../images/main/mobile/management-image-1.png";
import managementImageMobile2 from "../../images/main/mobile/management-image-2.png";
import managementImageMobile3 from "../../images/main/mobile/management-image-3.png";

import introduceProgramImage1 from "../../images/main/introduce-program-image-1.png";
import introduceProgramImage2 from "../../images/main/introduce-program-image-2.png";
import introduceProgramImage3 from "../../images/main/introduce-program-image-3.png";
import introduceProgramImage4 from "../../images/main/introduce-program-image-4.png";

import introduceProgramImageMobile1 from "../../images/main/mobile/introduce-program-image-1.png";
import introduceProgramImageMobile2 from "../../images/main/mobile/introduce-program-image-2.png";
import introduceProgramImageMobile3 from "../../images/main/mobile/introduce-program-image-3.png";
import introduceProgramImageMobile4 from "../../images/main/mobile/introduce-program-image-4.png";

import introduceActivityImage1 from "../../images/main/introduce-activity-image-1.png";
import introduceActivityImage2 from "../../images/main/introduce-activity-image-2.png";
import introduceActivityImage3 from "../../images/main/introduce-activity-image-3.png";
import introduceActivityImage4 from "../../images/main/introduce-activity-image-4.png";

import introduceActivityImageMobile1 from "../../images/main/mobile/introduce-activity-image-1.png";
import introduceActivityImageMobile2 from "../../images/main/mobile/introduce-activity-image-2.png";
import introduceActivityImageMobile3 from "../../images/main/mobile/introduce-activity-image-3.png";
import introduceActivityImageMobile4 from "../../images/main/mobile/introduce-activity-image-4.png";

import lectureImage1 from "../../images/main/lecture-image-1.png";
import lectureImage2 from "../../images/main/lecture-image-2.png";

import lectureImageMobile1 from "../../images/main/mobile/lecture-image-1.png";
import lectureImageMobile2 from "../../images/main/mobile/lecture-image-2.png";

import partnerImage from "../../images/main/partner-image.png";
import partnerMobileImage from "../../images/main/mobile/partner-image.png";

import { ReactComponent as ActivityTop } from "../../images/main/activity-top.svg";
import { ReactComponent as ActivityBottom } from "../../images/main/activity-bottom.svg";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Header from "components/Header";
import Footer from "components/Footer";

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

const MAINTEXT = ["비", "전", "을", " 가", "지", "고"];
const MAINTEXT2 = ["함", "께", " 성", "장", "하", "는", " 학", "회"];
const WORTHTEXT1 = "Vision";
const WORTHTEXT2 = "Growth";
const WORTHTEXT3 = "Together";
const KUSTIMS = "Korean University Students\nIT, Management Society";
const INTRODUCTION_TITLE_1 = "함께하는\n큐밀리";
const INTRODUCTION_TITLE_2 = "학회 프로그램 소개";
const INTRODUCTION_TITLE_3 = "학회 활동 소개";
const INTRODUCTION_TITLE_4 = "지난 기수 연사님";

const MOBILE_INTRODUCTION_DESCRIPTION_1 =
  "KUSITMS은 기획, 개발, 디자인 팀으로 구성되어 있어요.\n각 팀에서 모인 팀원들이 하나의 조가 되어\n함께 프로젝트를 진행해요.";

const INTRODUCTION_DESCRIPTION_1 =
  "KUSITMS은 기획, 개발, 디자인 팀으로 구성되어 있어요.\n각 팀에서 모인 팀원들이 하나의 조가 되어 함께 프로젝트를 진행해요.";
const INTRODUCTION_DESCRIPTION_2 =
  "KUSITMS에서는 학회원이 새로운 경험을 통해 성장할 수 있도록\n다양한 프로그램을 진행해요.";
const INTRODUCTION_DESCRIPTION_3 =
  "KUSITMS은 학술적인 프로그램 외에도\n다양한 활동을 통해 친목을 다져요.";

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
      "아이디어를 제품화하기 위해 UI 기획, 설계, 구현까지 비주얼적인 부분을 담당해요.\n사용하기 쉬운 UX를 고민하고, 확장성 있는 제품 개발을 위해 디자인 시스템을 구축하는 역할을 맡아요.",
  },
];

const MOBILE_INTRODUCTION_GROUPS = [
  {
    img: planIcon,
    title: "기획팀",
    content:
      "각 조에서 탄생한 아이디어를 바탕으로 실제 IT 서비스를 기획해요.\n개발팀과 디자인팀과의 협업을 통해 개발 가능성 있는 기능들을\n사용자 관점에서 기획할 수 있어요.",
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
      "아이디어를 제품화하기 위해 UI 기획, 설계, 구현까지 비주얼적인 부분을 담당해요. 사용하기 쉬운 UX를\n고민하고, 확장성 있는 제품 개발을 위해 디자인 시스템을 구축하는 역할을 맡아요.",
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
    img: managementImage3,
    title: "교육기획팀",
    content:
      "초청 강연, 기업 프로젝트, 밋업데이 등\n학회의 전반적인 교육 커리큘럼을\n주관 및 진행하고, 학회원을 대상으로\n정기 교육 세션을 실시해요.",
  },
  {
    img: managementImage2,
    title: "대외홍보팀",
    content:
      "학회 행사와 관련된 콘텐츠를 제작하고,\n전반적인 SNS 관리 및 마케팅,\n외부 기관과의 컨택 및 협찬제안을 담당해요.",
  },
];

const MOBILE_MANAGEMENT_CONTENTS = [
  {
    img: managementImageMobile1,
    title: "경영총괄팀",
    content:
      "OT/LT, 큐시즘 데이, 큐시즘의 밤 등\n학회 행사를 기획하고,\n회원 관리, 장소 대관, 예산 관리 등\n학회 경영 관련 업무를 총괄해요.",
  },
  {
    img: managementImageMobile2,
    title: "교육기획팀",
    content:
      "초청 강연, 기업 프로젝트, 밋업데이 등\n학회의 전반적인 교육 커리큘럼을\n주관 및 진행하고, 학회원을 대상으로\n정기 교육 세션을 실시해요.",
  },
  {
    img: managementImageMobile3,
    title: "대외홍보팀",
    content:
      "학회 행사와 관련된 콘텐츠를 제작하고,\n전반적인 SNS 관리 및 마케팅,\n외부 기관과의 컨택 및 협찬제안을 담당해요.",
  },
];

const INTRODUCE_YOUTUBE_LINK = "https://youtu.be/B19m5WRdMjw";

const INTRODUCE_PROGRAMS = [
  introduceProgramImage1,
  introduceProgramImage2,
  introduceProgramImage3,
  introduceProgramImage4,
];

const MOBILE_INTRODUCE_PROGRAMS = [
  introduceProgramImageMobile1,
  introduceProgramImageMobile2,
  introduceProgramImageMobile3,
  introduceProgramImageMobile4,
];

const INTRODUCE_ACTIVITIES = [
  introduceActivityImage1,
  introduceActivityImage2,
  introduceActivityImage3,
  introduceActivityImage4,
];

const MOBILE_INTRODUCE_ACTIVITIES = [
  introduceActivityImageMobile1,
  introduceActivityImageMobile2,
  introduceActivityImageMobile3,
  introduceActivityImageMobile4,
];

const MainPage = () => {
  const isMobile = useIsMobile();
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    setTimeout(function () {
      AOS.init();
    }, 1000);
  }, []);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
    console.log(inView);
  }, [inView]);

  if (isMobile) {
    return (
      <CustomContainer>
        <MobileContainer>
          <Header />
          <MobileTopContainer>
            <MobileMainText>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                {MAINTEXT.map((s: string, index: number) => {
                  return (
                    <MovingComponent
                      type={"flash"}
                      duration={"10000ms"}
                      timing={"ease"}
                      delay={`${index * 400}ms`}
                      fillMode="backwards"
                    >
                      {s}
                    </MovingComponent>
                  );
                })}
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                {MAINTEXT2.map((s: string, index: number) => {
                  return (
                    <MovingComponent
                      type={"flash"}
                      duration={"10000ms"}
                      timing={"ease"}
                      delay={`${index * 400}ms`}
                      direction="reverse"
                    >
                      {s}
                    </MovingComponent>
                  );
                })}
              </div>
            </MobileMainText>
            <img
              src={mainImageMobile}
              style={{ marginTop: "40px", height: "136px", width: "342px" }}
            />
            <MobileWorthContainer>
              <MobileLeftContainer>
                <div>
                  <MobileWortText
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-anchor="#defaultWorthText"
                    data-aos-once="false"
                    data-aos-easing="ease-in-sine"
                  >
                    {WORTHTEXT1}
                  </MobileWortText>
                  <MobileWortText
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-anchor="#defaultWorthText"
                    data-aos-once="false"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                  >
                    {WORTHTEXT2}
                  </MobileWortText>
                  <MobileWortText
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-anchor="#defaultWorthText"
                    data-aos-once="false"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="600"
                  >
                    {WORTHTEXT3}
                  </MobileWortText>
                </div>
                <MobileKusitmsText id="defaultWorthText">
                  {KUSTIMS}
                </MobileKusitmsText>
              </MobileLeftContainer>
              <div style={{ position: "relative" }}>
                <UpDownCustomImage
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-anchor="#defaultWorthText"
                  className="defaultImage"
                  data-aos-once="false"
                  data-aos-delay="800"
                  style={{ width: "140px", height: "97px" }}
                />
                <MainLogoImage
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    top: "-66px",
                    left: "124px",
                    width: "60px",
                    height: "224px",
                  }}
                />
              </div>
            </MobileWorthContainer>
          </MobileTopContainer>
          <MobileNumberContainer>
            <MobileNumberTitle>{"Since 2009"}</MobileNumberTitle>
            <div style={{ display: "flex", gap: "55px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Circle />
                <MobileNumber>
                  <div style={{ width: "53px", textAlign: "right" }}>
                    {true && (
                      <CountUp
                        start={0}
                        end={1402}
                        duration={1.5}
                        useEasing={true}
                      />
                    )}
                  </div>
                  {"명"}
                </MobileNumber>
                <MobileNumberSubTitle>{"누적 회원 수"}</MobileNumberSubTitle>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Circle />
                <MobileNumber>
                  <div style={{ width: "37px", textAlign: "right" }}>
                    {true && (
                      <CountUp
                        start={0}
                        end={203}
                        duration={1.2}
                        delay={1.2}
                        useEasing={true}
                      />
                    )}
                  </div>
                  {"개"}
                </MobileNumber>
                <MobileNumberSubTitle>{"프로젝트 결과물"}</MobileNumberSubTitle>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Circle />
                <MobileNumber>
                  <div style={{ width: "36px", textAlign: "right" }}>
                    {true && (
                      <CountUp
                        start={0}
                        end={100}
                        duration={1.5}
                        delay={2}
                        useEasing={true}
                      />
                    )}
                  </div>
                  {"개"}
                </MobileNumber>
                <MobileNumberSubTitle>{"참여 대학 수"}</MobileNumberSubTitle>
              </div>
            </div>
          </MobileNumberContainer>
          <MobileIntroduceContainer>
            <TitleTextContainer data-aos="fade-up" data-aos-duration="3000">
              <MobileTitleText>{INTRODUCTION_TITLE_1}</MobileTitleText>
              <EmphasisImage
                style={{
                  width: "110px",
                  height: "11px",
                  marginLeft: "-14px",
                  marginTop: "4px",
                }}
              />
            </TitleTextContainer>
            <MobileDescriptionText data-aos="fade-up" data-aos-duration="3000">
              {MOBILE_INTRODUCTION_DESCRIPTION_1}
            </MobileDescriptionText>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {MOBILE_INTRODUCTION_GROUPS.map(
                (group: introductionGroupType, index: number) => {
                  return <MobileIntroductionCard {...group} />;
                }
              )}
            </div>
            <a href={INTRODUCE_YOUTUBE_LINK} target="_blank" rel="noreferrer">
              <MobileButton>
                {"학회 소개영상 보러가기"}
                <img src={rightArrowIcon} width={20} height={8} />
              </MobileButton>
            </a>
            <MobileManagementContainer>
              <MobileManagementTitle
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {MANAGEMENT_TITLE}
              </MobileManagementTitle>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexDirection: "column",
                  marginTop: "40px",
                }}
              >
                {MOBILE_MANAGEMENT_CONTENTS.map(
                  (content: managementContentType, index: number) => {
                    return <MobileManagementCard {...content} />;
                  }
                )}
              </div>
            </MobileManagementContainer>
          </MobileIntroduceContainer>
          <MobileIntroduceProgramContainer>
            <div
              style={{ marginBottom: "98px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <MobileTitleText>{INTRODUCTION_TITLE_2}</MobileTitleText>
              <EmphasisImage
                style={{
                  width: "110px",
                  height: "11px",
                  marginLeft: "114px",
                  marginTop: "8px",
                }}
              />
              <MobileDescriptionText>
                {
                  "KUSITMS에서는 학회원이 새로운 경험을 통해\n성장할 수 있도록 다양한 프로그램을 진행해요."
                }
              </MobileDescriptionText>
            </div>
            {MOBILE_INTRODUCE_PROGRAMS.map((program: string, index: number) => {
              return (
                <img
                  width={321}
                  height={400}
                  src={program}
                  style={{ marginTop: "-38px" }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                />
              );
            })}
          </MobileIntroduceProgramContainer>
          <MobileIntroduceActivityContainer>
            <div
              style={{ marginBottom: "123px" }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <MobileTitleText>{INTRODUCTION_TITLE_3}</MobileTitleText>
              <EmphasisImageWhite
                style={{
                  width: "110px",
                  height: "11px",
                  marginLeft: "44px",
                  marginTop: "8px",
                }}
              />
              <MobileDescriptionText>
                {INTRODUCTION_DESCRIPTION_3}
              </MobileDescriptionText>
            </div>
            {MOBILE_INTRODUCE_ACTIVITIES.map(
              (activity: string, index: number) => {
                return (
                  <img
                    width={325}
                    height={400}
                    src={activity}
                    style={{ marginTop: "-38px" }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                  />
                );
              }
            )}
          </MobileIntroduceActivityContainer>
          <MobileLectureContainer>
            <div
              style={{
                width: "390px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "80px 0 100px 0",
              }}
            >
              <div
                className="defaultTitle4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="false"
                style={{ marginBottom: "80px" }}
              >
                <MobileTitleText style={{ color: "#151519" }}>
                  {INTRODUCTION_TITLE_4}
                </MobileTitleText>
                <EmphasisImage
                  style={{
                    width: "120px",
                    height: "20px",
                    marginLeft: "18px",
                    marginTop: "8px",
                  }}
                />
              </div>
              <MobileLectureTag>{"전문가 초청 강연"}</MobileLectureTag>
              <img src={lectureImageMobile1} width="300px" height="260px" />
              <MobileLectureTag
                color="#000"
                backgroundColor="#62EFE5"
                style={{ marginTop: "100px" }}
              >
                {"OB 초청 강연"}
              </MobileLectureTag>
              <img src={lectureImageMobile2} width="300px" height="260px" />
            </div>
          </MobileLectureContainer>
          <MobilePartnerContainer>
            <div
              className="defaultTitle5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
              style={{ marginBottom: "60px" }}
            >
              <MobileTitleText>{"파트너사"}</MobileTitleText>
              <EmphasisImage
                style={{
                  width: "123px",
                  height: "20px",
                  marginLeft: "50px",
                  marginTop: "8px",
                }}
              />
              <MobileDescriptionText>
                {"KUSITMS과 함께하는 파트너사를 소개해요."}
              </MobileDescriptionText>
            </div>
            <img src={partnerMobileImage} width="240px" height="428px" />
          </MobilePartnerContainer>
        </MobileContainer>
        <Footer />
      </CustomContainer>
    );
  }

  return (
    <Layout>
      <MainContainer>
        <MainText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
            }}
          >
            {MAINTEXT.map((s: string, index: number) => {
              return (
                <MovingComponent
                  type={"flash"}
                  duration={"5000ms"}
                  timing={"ease"}
                  delay={`${index * 400}ms`}
                  fillMode="backwards"
                >
                  {s}
                </MovingComponent>
              );
            })}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {MAINTEXT2.map((s: string, index: number) => {
              return (
                <MovingComponent
                  type={"flash"}
                  duration={"5000ms"}
                  timing={"ease"}
                  delay={`${index * 400}ms`}
                  direction="reverse"
                >
                  {s}
                </MovingComponent>
              );
            })}
          </div>
        </MainText>
        <img src={mainImage} width={1430} />
        <WorthContainer>
          <LeftContainer>
            <div>
              <WorthText
                className="defaultWorthText"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-anchor="defaultWorthText"
                data-aos-once="false"
                data-aos-easing="ease-in-sine"
              >
                {WORTHTEXT1}
              </WorthText>
              <WorthText
                className="defaultWorthText"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-anchor="defaultWorthText"
                data-aos-once="false"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
              >
                {WORTHTEXT2}
              </WorthText>
              <WorthText
                id="defaultWorthText"
                className="defaultWorthText"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-anchor="defaultWorthText"
                data-aos-once="false"
                data-aos-delay="1000"
                data-aos-easing="ease-in-sine"
              >
                {WORTHTEXT3}
              </WorthText>
            </div>
            <KustimsText>{KUSTIMS}</KustimsText>
          </LeftContainer>
          <div style={{ position: "relative" }}>
            <UpDownCustomImage
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              data-aos-anchor="defaultWorthText"
              className="defaultImage"
              data-aos-once="false"
              data-aos-delay="800"
            />
            <MainLogoImage
              style={{
                position: "absolute",
                top: "-210px",
                left: "320px",
                zIndex: 0,
              }}
            />
          </div>
        </WorthContainer>
      </MainContainer>
      <NumberContainer>
        <NumberTitle>{"Since 2009"}</NumberTitle>
        <div style={{ display: "flex", gap: "55px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PCCircle />
            <Number ref={ref}>
              <div style={{ width: "156px", textAlign: "right" }}>
                {isInView && (
                  <CountUp
                    start={0}
                    end={1402}
                    duration={1.2}
                    useEasing={true}
                  />
                )}
              </div>
              {"명"}
            </Number>
            <NumberSubTitle>{"누적 회원 수"}</NumberSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PCCircle />

            <Number>
              <div style={{ width: "108px", textAlign: "right" }}>
                {isInView && (
                  <CountUp
                    start={0}
                    end={203}
                    duration={1.2}
                    delay={0.8}
                    useEasing={true}
                  />
                )}
              </div>
              {"개 프로젝트"}
            </Number>
            <NumberSubTitle>{"프로젝트 결과물"}</NumberSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PCCircle />
            <Number>
              <div style={{ width: "103px", textAlign: "right" }}>
                {isInView && (
                  <CountUp
                    start={0}
                    end={100}
                    duration={1.5}
                    delay={1.4}
                    useEasing={true}
                  />
                )}
              </div>
              {"개 대학"}
            </Number>
            <NumberSubTitle>{"참여 대학 수"}</NumberSubTitle>
          </div>
        </div>
      </NumberContainer>
      <IntroductionContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TitleTextContainer
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <TitleText>{INTRODUCTION_TITLE_1}</TitleText>
            <EmphasisImage style={{ marginLeft: "-140px" }} />
          </TitleTextContainer>
          <DescriptionText
            className="defaultTitle1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            {INTRODUCTION_DESCRIPTION_1}
          </DescriptionText>
        </div>
      </IntroductionContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          marginBottom: "180px",
        }}
      >
        {INTRODUCTION_GROUPS.map(
          (group: introductionGroupType, index: number) => {
            return <IntroductionCard {...group} />;
          }
        )}
        <a href={INTRODUCE_YOUTUBE_LINK} target="_blank" rel="noreferrer">
          <Button>
            {"학회 소개영상 보러가기"}
            <img src={rightArrowIcon} />
          </Button>
        </a>
      </div>
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
        <div>
          <TitleTextContainer
            className="defaultTitle2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <TitleText>{INTRODUCTION_TITLE_2}</TitleText>
            <EmphasisImage style={{ width: "161px" }} />
          </TitleTextContainer>
          <DescriptionText
            className="defaultTitle2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="300"
          >
            {INTRODUCTION_DESCRIPTION_2}
          </DescriptionText>
          <IntroduceProgramCardContainer>
            {INTRODUCE_PROGRAMS.map((program: string, index: number) => {
              return (
                <IntroudceImageCard
                  data-aos="flip-down"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  data-aos-delay={index * 300}
                  index={index}
                  className="imageDefault"
                >
                  <img src={program} />
                </IntroudceImageCard>
              );
            })}
          </IntroduceProgramCardContainer>
        </div>
      </IntroduceProgramContainer>
      <IntroduceActivityContainer>
        <IntroduceActivityTitleDiv>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <TitleText id="activityContainer">{INTRODUCTION_TITLE_3}</TitleText>
            <EmphasisImageWhite style={{ marginLeft: "53px" }} />
          </div>
          <DescriptionText
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="300"
          >
            {INTRODUCTION_DESCRIPTION_3}
          </DescriptionText>
        </IntroduceActivityTitleDiv>
        <IntroduceActivityContainerInside>
          <ActivityWrapperImageTop />
          <ActivityWrapperImageBottom />
          <ActivityCardContainer>
            {INTRODUCE_ACTIVITIES.map((activity: string, index: number) => {
              return (
                <div
                  data-aos="flip-down"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  data-aos-delay={index * 300}
                >
                  <img src={activity} />
                </div>
              );
            })}
          </ActivityCardContainer>
        </IntroduceActivityContainerInside>
      </IntroduceActivityContainer>
      <LectureContainer>
        <IntroduceActivityTitleDiv
          className="defaultTitle4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <TitleText style={{ color: "#151519" }}>
            {INTRODUCTION_TITLE_4}
          </TitleText>
          <EmphasisImage />
        </IntroduceActivityTitleDiv>
        <LectureTag data-aos="fade-up" data-aos-duration="1000">
          {"전문가 초청 강연"}
        </LectureTag>
        <img data-aos="fade-up" data-aos-duration="1000" src={lectureImage1} />
        <LectureTag
          data-aos="fade-up"
          data-aos-duration="1000"
          color="#000"
          backgroundColor="#62EFE5"
        >
          {"OB 초청 강연"}
        </LectureTag>
        <img data-aos="fade-up" data-aos-duration="1000" src={lectureImage2} />
      </LectureContainer>
      <PartnerContainer>
        <IntroduceActivityTitleDiv className="defaultTitle5">
          <div data-aos="fade-up" data-aos-duration="1000">
            <TitleText>{"파트너사"}</TitleText>
            <EmphasisImage />
          </div>
          <DescriptionText data-aos="fade-up" data-aos-duration="1000">
            {"KUSITMS과 함께하는 파트너사를 소개해요."}
          </DescriptionText>
        </IntroduceActivityTitleDiv>
        <img src={partnerImage} data-aos="fade-up" data-aos-duration="1000" />
      </PartnerContainer>
    </Layout>
  );
};

export default MainPage;

const fadeInTop = keyframes`
  0% {
      opacity: 0;
      transform: translateY(500px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;

  background: #151519;

  font-family: "SUIT";
  height: 1802px;
`;

const MainText = styled.div`
  font-weight: 800;
  font-size: 72px;
  line-height: 96px;

  text-align: center;
  letter-spacing: -1px;

  color: #ffffff;

  white-space: pre;
  font-family: "SUIT";

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WorthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 236px;

  padding-top: 100px;
  width: 100%;
`;

const WorthText = styled.p.attrs((props) => ({
  className: props.className,
}))`
  font-size: 72px;
  line-height: 96px;
  letter-spacing: -1px;

  color: #ffffff;

  white-space: pre;
  font-family: "SUIT";
  font-weight: 800;
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

  width: 436px;
  font-family: "SUIT";
  font-weight: 400;
`;

const IntroduceActivityContainer = styled.div`
  background-color: #0055ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0px;
  padding-bottom: 400px;
  height: 2013px;
  width: 100%;
`;

const ActivityWrapperImageTop = styled(ActivityTop)`
  position: absolute;
  top: -100px;
  left: -140px;
`;

const ActivityWrapperImageBottom = styled(ActivityBottom)`
  position: absolute;
  top: 900px;
  right: -290px;
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 280px;
  width: 100%;
  background-color: #151519;
`;

const TitleTextContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.fadeInTitle {
    animation: ${fadeInTop} 2s;
  }
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleText = styled.h3`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;

  color: #ffffff;

  margin-bottom: 8px;

  font-family: "SUIT";
  text-align: center;
`;

const DescriptionText = styled.p.attrs((props) => ({
  className: props.className,
}))`
  &.fadeInTitle {
    animation: ${fadeInTop} 2s;
  }
  margin-top: 48px;
  margin-bottom: 80px;
  font-weight: 400;

  font-size: 20px;
  line-height: 30px;
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

  font-family: "SUIT";
`;

const ManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const ManagementTitle = styled.p`
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.2px;

  color: #ffffff;

  white-space: pre;

  margin-bottom: 80px;
  font-family: "SUIT";
`;

const IntroduceProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProgramCardFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1000px);
  }
  to {
    opacity: 1;
    transform: translateY(-800px);
  }
`;

const IntroduceProgramCardContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.programCardContainer {
    animation: ${ProgramCardFadeInUp} ease 10s;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 908px;
  margin-bottom: 200px;

  & > div {
    width: 50%;
  }

  & > div:nth-child(2) {
    margin-top: 164px;
    margin-left: -10px;
  }

  & > div:nth-child(3) {
    margin-top: -144px;
  }

  & > div:nth-child(4) {
    margin-top: 40px;
    margin-left: -38px;
  }
`;

// //

const ActivityCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 950px;
  & > div {
    width: 50%;
  }

  & > div:nth-child(2) {
    margin-top: 164px;
    margin-left: -10px;
  }

  & > div:nth-child(3) {
    margin-top: -144px;
  }

  & > div:nth-child(4) {
    margin-top: 40px;
    margin-left: -38px;
  }
`;

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  padding: 200px 0;
  width: 100%;
`;

interface LectureTagProps {
  color?: string;
  backgroundColor?: string;
}

const LectureTag = styled.div<LectureTagProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 28px;
  gap: 10px;

  height: 48px;

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#0055ff"};
  border-radius: 75px;

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.2px;

  color: ${(props) => (props.color ? props.color : "#FFF")};

  margin-top: 100px;
  font-family: "SUIT";
`;

const IntroductionCard = (group: introductionGroupType) => {
  return (
    <IntroductionCardContainer
      data-aos={group.title === "개발팀" ? "fade-right" : "fade-left"}
      data-aos-duration="1000"
      data-aos-once="false"
      flexDirection={group.title === "개발팀"}
      data-aos-delay={
        group.title === "개발팀" ? 300 : group.title === "디자인팀" ? 600 : 0
      }
    >
      <img
        src={group.img}
        height={group.title === "디자인팀" ? "124px" : "96px"}
        style={{
          marginTop: `${group.title === "디자인팀" ? "-15px" : "0px"}`,
        }}
      />
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
  padding: 56px 64px;
  gap: 40px;

  width: 980px;
  height: 208px;

  background: #ffffff;
  border-radius: 32px;

  & > img {
    flex-grow: 0;
  }
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
  line-height: 26px;
  letter-spacing: -0.5px;

  color: #000000;

  white-space: pre;
  font-family: "SUIT";
`;

const ManagementCard = (content: managementContentType) => {
  return (
    <ManagementCardContainer
      url={content.img}
      marginTop={content.title === "교육기획팀"}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="false"
      data-aos-delay={
        content.title === "교육기획팀"
          ? 300
          : content.title === "대외홍보팀"
          ? 600
          : 0
      }
    >
      <ManagementCardTitle>{content.title}</ManagementCardTitle>
      <ManagementCardContent>{content.content}</ManagementCardContent>
    </ManagementCardContainer>
  );
};

const ManagementCardContainer = styled.div<{
  url: string;
  marginTop?: boolean;
}>`
  width: 347px;
  height: 520px;
  background: url(${(props) => props.url}) no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 55px;

  margin-top: ${(props) => props.marginTop && "120px"};
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

const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 0 120px 0;
`;

const IntroduceActivityContainerInside = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &.programCardContainer {
    animation: ${ProgramCardFadeInUp} ease 10s;
  }
`;

const IntroduceActivityTitleDiv = styled.div`
  &.fadeInTitle {
    animation: ${fadeInTop} 2s;
  }
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const fadeTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(-200px);
  }
`;

const IntroudceImageCard = styled.div<{ index: number }>`
  &.programCardContainer {
    animation: ${ProgramCardFadeInUp} ease 10s;
  }

  &.fadeTopCard0 {
    animation: ${fadeTop} ease 2s;
    animation-delay: 0s;
    visibility: visible;
  }
  &.fadeTopCard1 {
    animation: ${fadeTop} ease 2s;
    animation-delay: 1s;
    visibility: visible;
  }
  &.fadeTopCard2 {
    animation: ${fadeTop} ease 2s;
    animation-delay: 2s;
    visibility: visible;
  }
  &.fadeTopCard3 {
    animation: ${fadeTop} ease 2s;
    animation-delay: 3s;
    visibility: visible;
  }
  /* &.imageDefault {
    visibility: hidden;
  } */
`;

/// //////////////////////////////////////////

const MobileContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MobileTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 390px;
  height: 618px;

  background: #151519;
  padding-top: 40px;
`;

const MobileMainText = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;

  text-align: center;

  color: #ffffff;

  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  width: 100vw;
  height: 239px;

  background: url(${backgroundImageMobile}) no-repeat;
  background-size: cover;
`;

const MobileTitleText = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
`;

const MobileDescriptionText = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.5px;

  color: #ffffff;

  white-space: pre-line;
  word-break: keep-all;
  word-wrap: break-word;

  margin-top: 20px;
`;

const MobileIntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 390px;
  padding-top: 60px;
`;

const MobileIntroduceProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 390px;
  padding: 80px 0;
`;

const MobileIntroductionCard = (group: introductionGroupType) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MobileIntroductionCardContainer
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-easing="ease-in-sine"
    >
      <img src={group.img} width="36px" height="36px" />
      <MobileIntroductionCardSideContainer>
        <MobileIntroductionCardTitle>{group.title}</MobileIntroductionCardTitle>
        <MobileIntroductionCardContent width={group.title === "디자인팀"}>
          {group.content}
        </MobileIntroductionCardContent>
      </MobileIntroductionCardSideContainer>
    </MobileIntroductionCardContainer>
  );
};

const MobileIntroductionCardContainer = styled.div`
  width: 322px;
  height: 209px;

  background: #fff;
  border-radius: 20px;

  display: flex;
  gap: 17px;

  padding: 40px 32px 36px 32px;
`;

const MobileIntroductionCardSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobileIntroductionCardTitle = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;

  color: #0055ff;
`;

const MobileIntroductionCardContent = styled.p<{ width: boolean }>`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  letter-spacing: -0.5px;

  color: #000000;

  white-space: pre-line;
  word-wrap: break-word;
  word-break: keep-all;

  width: ${(props) => (props.width ? "216px" : "205px")};
`;

const MobileManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;

  width: 213px;
  height: 40px;

  background: #0055ff;
  border-radius: 75px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: -0.2px;

  color: #ffffff;

  margin-top: 40px;
  margin-bottom: 60px;
`;

const MobileManagementTitle = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 14px */

  text-align: center;
  letter-spacing: -0.5px;

  color: #ffffff;

  white-space: pre-line;
`;

const MobileManagementCard = (content: managementContentType) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MobileManagementCardContainer
      url={content.img}
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-sine"
    >
      <MobileManagementCardTitle>{content.title}</MobileManagementCardTitle>
      <MobileManagementCardContent>
        {content.content}
      </MobileManagementCardContent>
    </MobileManagementCardContainer>
  );
};

const MobileManagementCardContainer = styled.div<{
  url: string;
}>`
  width: 322px;
  height: 440px;
  background: url(${(props) => props.url}) no-repeat;
  background-size: 322px 440px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 40px;
  border-radius: 20px;
`;

const MobileManagementCardTitle = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;

  text-align: center;

  color: #ffffff;
  margin-bottom: 16px;
`;

const MobileManagementCardContent = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  text-align: center;
  letter-spacing: -0.5px;

  color: #ffffff;

  white-space: pre-line;
  word-break: keep-all;
  word-wrap: break-word;
`;

const MobileIntroduceActivityContainer = styled.div`
  width: 100vw;

  background: #0055ff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

const MobileNumberTitle = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.5px;

  color: #ffffff;
  margin-bottom: 40px;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;

  background: #dce1ff;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const MobileNumber = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;

  white-space: pre-wrap;
  display: flex;
`;

const MobileNumberSubTitle = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  letter-spacing: -0.5px;

  color: #dce1ff;

  margin-top: 8px;
`;

const MobileWorthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 64px 78px 32px;
  width: 390px;
`;

const MobileLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 159px;
`;

const MobileWortText = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;

  color: #ffffff;
`;

const MobileKusitmsText = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;

  color: #ffffff;
  margin-top: 71px;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 447px;

  background-image: url(${backgroundImage});
  background-size: contain;
  width: 100%;
`;

const NumberTitle = styled.p`
  font-family: "SUIT";
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */

  text-align: center;

  /* WH */

  color: #ffffff;

  margin-bottom: 88px;

  margin-left: -89px;
`;

const Number = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 105%;
  /* identical to box height, or 63px */

  letter-spacing: -0.2px;

  /* WH */

  color: #ffffff;
  margin-bottom: 24px;
  display: flex;
`;

const PCCircle = styled.div`
  width: 8px;
  height: 8px;

  background: #dce1ff;
  border-radius: 50%;

  margin-bottom: 24px;
`;

const NumberSubTitle = styled.p`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: -0.5px;

  /* OnPrimary */

  color: #dce1ff;
`;

const fadeInBottom = keyframes`
  0% {
      opacity: 0;
      transform: translateY(-800px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`;

const UpDownCustomImage = styled(UpdownImage)`
  &.movingImage {
    animation: ${fadeInBottom} 2s;
  }
`;

const MobileLectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  background-color: #ffffff;
`;

const MobilePartnerContainer = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileLectureTag = styled.div<{
  color?: string;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;

  color: ${(props) => (props.color ? props.color : "#fff")};

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#0055ff"};
  border-radius: 75px;
  font-family: "SUIT";

  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 48px;
`;

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #151519;
  height: inherit;
`;
