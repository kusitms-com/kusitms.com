import React, { useState } from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import { useIsMobile } from "hooks/useIsMobile";

import polygon from "../../images/recruit/Polygon.svg";
import book from "../../images/recruit/apply-book.svg";
import calendar from "../../images/recruit/apply-calendar.svg";
import ranking from "../../images/recruit/apply-ranking.svg";

import mbook from "../../images/recruit/mobile-book.svg";
import mcalendar from "../../images/recruit/mobile-calendar.svg";
import mranking from "../../images/recruit/mobile-ranking.svg";

import RecruitProcess from "components/recruit/RecruitProcess";
import RecruitAccordion from "components/recruit/RecriutAccordion";

interface applyType {
  icon: string;
  text: string;
}

const RECRUIT_UNDERTITLE =
  "큐시즘은 혼자서는 해낼 수 없는 일들을 함께 이루어내고 있어요.\n멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.\n우리와 함께할래요?";
const MOBILE_RECRUIT_UNDERTITLE =
  "큐시즘은 혼자서는 해낼 수 없는 일들을\n함께 이루어내고 있어요.\n멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.\n우리와 함께할래요?";

// ↓ 운영진 모집 시 지원 조건 3번째를 아래 문구로 변경
// const RECRUIT_WHO_APPLY_STAFF3 = "활동 기간 동안 운영진 활동 및 학회 활동에\n적극적으로 참석 가능한 분",

const RECRUIT_TITLE_1 = "누가 지원할 수 있어요?";
const RECRUIT_TITLE_2 = "어떤 파트를 모집해요?";
const RECRUIT_TITLE_3 = "언제 어디서 모여요?";
const RECRUIT_TITLE_4 = "모집 절차가 어떻게 돼요?";

const RECRUIT_PART_1 = "기획";
const RECRUIT_PART_2 = "개발";
const RECRUIT_PART_3 = "디자인";
// 운영진 모집 시
// const RECRUIT_PART_1 = "경영총괄팀";
// const RECRUIT_PART_2 = "교육기획팀";
// const RECRUIT_PART_3 = "대외홍보팀";

const PART_UNDER_SUB = "* 파트별 인원 수는 매 기수 달라질 수 있어요 :)";
const MOBILE_PART_UNDER_SUB = "* 팀별 인원 수는 매 기수 달라질 수 있어요 :)";
// const MOBILE_PART_SECOND_UNDER_SUB = "* 운영진도 학회원 활동에 참여해요.";
const WHERE_SUB = "일시: 매주 토요일 15시 ~ 18시\n장소: 서울 지역 내";
const MOBILE_WHEN_SUB = "토요일 15시 ~ 18시";
const MOBILE_WHERE_SUB = "서울 지역 내";

const WHERE_UNDER_SUB =
  "* 활동 장소와 시간은\n 커리큘럼에 따라 변경될 수 있어요 :)";

const RECRUIT_ALARM = [
  // 모집 전
  {
    title: "모집 알림을 받아볼게요!",
    msg: "아쉽게도 지금은 모집 기간이 아니에요!\n알림 신청을 통해 28기 모집 알림을 받아보세요. :)",
    btn: "28기 모집 알림 신청하기",
  },
  // 학회원 모집 중
  {
    title: "이제 지원해볼게요!",
    msg: "큐시즘 28기 신규 학회원 리크루팅이 시작되었어요.\n큐시즘과 함께 성장할 열정 가득한 여러분을 기다려요!",
    btn: "함께하러 가기",
  },
  // 운영진 모집 중
  {
    title: "이제 지원해볼게요!",
    msg: "큐시즘 28기 신규 운영진 리크루팅이 시작되었어요.\n큐시즘과 함께 성장할 열정 가득한 여러분을 기다려요!",
    btn: "함께하러 가기",
  },
];

const QNA = [
  {
    question: "모집 시기가 언제인가요?",
    answer:
      "큐시즘은 상반기, 하반기 총 2번 신규 운영진 및 학회원을 모집해요.\n운영진 리크루팅 이후 학회원 리크루팅이 시작되니\n모집 시기를 놓치고 싶지 않다면 홈페이지 상단에 있는 배너를 클릭해서 미리 알림을 받아보세요.",
  },
  {
    question: "경쟁률이 어떻게 되나요?",
    answer:
      "매 기수 모집마다 경쟁률이 상이하게 나타나요. 따라서 경쟁률은 말씀드리기 어려운 점 양해부탁드려요.",
  },
  {
    question: "토요일 활동 시간대가 어떻게 되나요?",
    answer:
      "정규 세션은 3~6시에 진행되나, 행사 및 커리큘럼에 따라 12~6시 사이에 진행되기도 해요.\n따라서 토요일 오후 시간에는 큐시즘 활동이 가능해야 해요!",
  },
  {
    question: "졸업예정 학부생도 지원이 가능한가요?",
    answer:
      "큐시즘은 한 기수동안 재학생, 휴학생, 졸업 유예자처럼 대학생 신분을 유지하는 사람들만 지원이 가능해요.",
  },
  {
    question: "학회 수료 시, 수료증을 받을 수 있나요?",
    answer:
      "네, 학회의 마지막 커리큘럼에서 수료 기준을 충족한 학회원에게 수료증을 제공하고 있어요.",
  },
  {
    question: "정기 커리큘럼에 불참하게 되면 어떻게 되나요?",
    answer:
      "정기 커리큘럼에 불참하면 정관에 따라 벌점이 부과돼요.\n최대 벌점을 초과하면 수료를 못하게 될 수 있어요. 정기 커리큘럼에는 최대한 참여해야 수료에 지장이 없어요.",
  },
  {
    question:
      "이전 기수 활동하신 분들이 그대로 팀을 꾸려 서비스를 이어나가고 있는지 궁금해요.",
    answer:
      "매 기수마다 차이가 있지만, 밋업데이 이후 꾸준히 프로젝트를 이어나가는 팀이 존재해요.\n자세한 이야기는 ",
  },
  {
    question: "운영진과 학회원의 차이가 무엇인가요?",
    answer:
      "운영진은 학회원의 일원으로써 일반 학회원과 동일하게 모든 행사에 참여해요.\n다만, 운영진은 큐시즘 행사 전반에 대해 관리하고 운영하는 역할을 하며 더욱 큐시즘을 알차게 보낼 수 있게 해줘요!",
  },
  {
    question: "큐시즘이 처음인데 운영진부터 지원해도 되나요?",
    answer:
      "네, 물론이에요 :)\n큐시즘 활동을 하면서 더 많은 경험을 쌓고 알차게 보내고 싶은 분이라면 언제나 환영이에요.\n매 기수 신규 운영진으로 들어와 함께 하는 분들이 많기 때문에\n큐시즘에 대한 열정만 있으시다면 전혀 부담가지실 필요 없어요!",
  },
  {
    question:
      "운영진 지원 후 불합격이 되었을 때, 일반 학회원으로 재신청해도 불이익은 없나요?",
    answer:
      "네, 전혀 불이익 없어요!\n모든 지원 서류는 모집이 끝난 후 즉시 폐기하므로 학회원으로 재신청하셔도 전혀 문제되지 않아요.",
  },
];
const RecruitPage = () => {
  const [active, setActive] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const WHO_APPLY = [
    {
      icon: isMobile ? mbook : book,
      text: "활동 기간 동안 대학생 신분을 유지하는 분\n(졸업 유예자, 휴학생, 수료생 포함)",
    },
    {
      icon: isMobile ? mcalendar : calendar,
      text: "매주 토요일 서울 지역에서\n진행되는 세션에 빠짐없이 참석 가능한 분",
    },
    {
      icon: isMobile ? mranking : ranking,
      text: "활동 기간 동안 팀 모임에\n적극적으로 참석 가능한 분",
    },
  ];

  if (isMobile) {
    return (
      <Layout>
        <MobileRecruitContainer>
          <MobileTopText>KUSITMS</MobileTopText>
          <MobileRecruitText>Recruitment</MobileRecruitText>
          <MobileRecruitUnderText>
            {MOBILE_RECRUIT_UNDERTITLE}
          </MobileRecruitUnderText>
          <div style={{ margin: "100px 0" }}>
            <img src={polygon} />
          </div>
          <MobileRecruitTitle>{RECRUIT_TITLE_1}</MobileRecruitTitle>
          <MobileApplyBoxs>
            {WHO_APPLY.map((apply: applyType, index: number) => (
              <MobileApplyBox key={index}>
                <MobileIconBox>
                  <img src={apply.icon} />
                </MobileIconBox>
                <MobileSquareBox>{apply.text}</MobileSquareBox>
              </MobileApplyBox>
            ))}
          </MobileApplyBoxs>

          <MobileRecruitTitle>{RECRUIT_TITLE_2}</MobileRecruitTitle>
          <MobileSquareBigBox>
            <MobileParts>
              <span>{RECRUIT_PART_1}</span>
              <span>{RECRUIT_PART_2}</span>
              <span>{RECRUIT_PART_3}</span>
            </MobileParts>
            <MobileUnderSub>{MOBILE_PART_UNDER_SUB}</MobileUnderSub>
            {/* <MobileUnderSub>{MOBILE_PART_SECOND_UNDER_SUB}</MobileUnderSub> */}
          </MobileSquareBigBox>

          <MobileRecruitTitle>{RECRUIT_TITLE_3}</MobileRecruitTitle>
          <MobileWhenSquareBigBox>
            <MobileWhenBox>
              <MobileSmallSub>일시:</MobileSmallSub>
              <MobileBigSub>{MOBILE_WHEN_SUB}</MobileBigSub>
              <MobileSmallSub>장소:</MobileSmallSub>
              <MobileBigSub>{MOBILE_WHERE_SUB}</MobileBigSub>
              <MobileUnderSub>{WHERE_UNDER_SUB}</MobileUnderSub>
            </MobileWhenBox>
          </MobileWhenSquareBigBox>

          <MobileRecruitTitle>{RECRUIT_TITLE_4}</MobileRecruitTitle>
          <RecruitProcess />

          <div style={{ margin: "100px 0" }}>
            <img src={polygon} />
          </div>
          <MobileRecruitStateBox>
            <MobileRecruitTitle>{RECRUIT_ALARM[1].title}</MobileRecruitTitle>
            <MobileRecruitStateMsg>
              {RECRUIT_ALARM[1].msg}
            </MobileRecruitStateMsg>
            <MobileRecruitBtn
              onClick={() => {
                window.open("https://forms.gle/gHHXmANWABWR5TUR6/", "_blank");
              }}
            >
              {RECRUIT_ALARM[1].btn}
            </MobileRecruitBtn>
          </MobileRecruitStateBox>
        </MobileRecruitContainer>
        <MobileQnaBox>
          <MobileQnaTitle>궁금한게 있어요!</MobileQnaTitle>
          {QNA.map((qna: any, index: number) => (
            <RecruitAccordion
              key={index}
              index={index}
              active={active}
              setActive={setActive}
              question={qna.question}
              answer={qna.answer}
            />
          ))}
        </MobileQnaBox>
      </Layout>
    );
  }

  return (
    <Layout>
      <RecruitContainer>
        <RecruitInner>
          <TopText>KUSITMS</TopText>
          <RecruitText>Recruitment</RecruitText>
          <RecruitUnderText>{RECRUIT_UNDERTITLE}</RecruitUnderText>
          <div style={{ margin: "100px 0" }}>
            <img src={polygon} />
          </div>
          <RecruitTitle>{RECRUIT_TITLE_1}</RecruitTitle>
          <ApplyBoxs>
            {WHO_APPLY.map((apply: applyType, index: number) => (
              <ApplyBox key={index}>
                <IconBox>
                  <img src={apply.icon} />
                </IconBox>
                <SquareBox>{apply.text}</SquareBox>
              </ApplyBox>
            ))}
          </ApplyBoxs>

          <RecruitTitle>{RECRUIT_TITLE_2}</RecruitTitle>
          <SquareBigBox>
            <Parts>
              <span>{RECRUIT_PART_1}</span>
              <span>{RECRUIT_PART_2}</span>
              <span>{RECRUIT_PART_3}</span>
            </Parts>
            <UnderSub>{PART_UNDER_SUB}</UnderSub>
          </SquareBigBox>

          <RecruitTitle>{RECRUIT_TITLE_3}</RecruitTitle>
          <SquareBigBox>
            <SquareSub>{WHERE_SUB}</SquareSub>
            <UnderSub>{WHERE_UNDER_SUB}</UnderSub>
          </SquareBigBox>

          <RecruitTitle>{RECRUIT_TITLE_4}</RecruitTitle>
          <RecruitProcess />
          <div style={{ margin: "100px 0" }}>
            <img src={polygon} />
          </div>
          <RecruitStateBox>
            <RecruitTitle>{RECRUIT_ALARM[1].title}</RecruitTitle>
            <RecruitStateMsg>{RECRUIT_ALARM[1].msg}</RecruitStateMsg>
            <RecruitBtn
              onClick={() => {
                window.open(
                  process.env.REACT_APP_KUSITMS_28TH_ALRAM_URL,
                  "_blank"
                );
              }}
            >
              {RECRUIT_ALARM[1].btn}
            </RecruitBtn>
          </RecruitStateBox>
        </RecruitInner>
      </RecruitContainer>
      <QnaBox>
        <QnaTitle>궁금한게 있어요!</QnaTitle>

        {QNA.map((qna: any, index: number) => (
          <RecruitAccordion
            key={index}
            index={index}
            active={active}
            setActive={setActive}
            question={qna.question}
            answer={qna.answer}
          />
        ))}
      </QnaBox>
    </Layout>
  );
};

export default RecruitPage;

const MobileRecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  background: #151519;

  font-family: "SUIT";
`;

const RecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 3730px;
  padding-top: 192px;
  white-space: pre-wrap;
  text-align: center;
  background: #151519;

  font-family: "SUIT";
`;

const MobileTopText = styled.p`
  margin-top: 60px;
  font-size: 48px;
  color: #ffffff;
  font-weight: 800;
  line-height: 60px;
`;

const MobileRecruitText = styled.p`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
`;

const MobileRecruitUnderText = styled.p`
  font-family: "SUIT";
  margin-top: 40px;
  line-height: 25px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
`;

const MobileRecruitTitle = styled.p`
  font-size: 24px;
  font-weight: 800;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 60px;
`;

const MobileApplyBoxs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 334px;
  margin-bottom: 120px;
`;

const MobileApplyBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 334px;
  height: 190px;

  margin-bottom: 40px;
`;

const MobileIconBox = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 137px;
  top: 0px;
  background-color: #ffffff;
  z-index: 900;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileSquareBox = styled.div`
  position: absolute;
  width: 334px;
  height: 160px;
  left: 0px;
  top: 30px;

  background-color: rgba(47, 48, 56, 0.6);
  border-radius: 32px;

  padding: 56px 0;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
`;

const MobileWhenSquareBigBox = styled.div`
  width: 334px;
  height: 311px;
  border-radius: 32px;
  background-color: rgba(47, 48, 56, 0.6);
  margin-bottom: 120px;
  font-family: "SUIT";
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 800;
  color: #ffffff;
`;

const MobileSquareBigBox = styled.div`
  width: 334px;
  height: 382px;
  border-radius: 32px;
  background-color: rgba(47, 48, 56, 0.6);
  margin-bottom: 120px;
  font-family: "SUIT";
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 800;
  color: #ffffff;
`;

const MobileParts = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 54px;
`;

const MobileUnderSub = styled.p`
  font-size: 16px;
  color: #90909a;
  font-weight: 400;
  line-height: 23px;
  padding-top: 20px;
  margin-bottom: 5px;
  white-space: pre-wrap;
`;

const MobileWhenBox = styled.div`
  margin-top: 40px;
`;

const MobileSmallSub = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 800;
  color: #5d5e67;
  margin-bottom: 8px;
`;

const MobileBigSub = styled.p`
  font-size: 24px;
  line-height: 29px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
`;

// 프로세스 하기

const MobileRecruitStateBox = styled.div`
  width: 460px;
  height: 302px;
`;

const MobileRecruitStateMsg = styled.p`
  font-family: "SUIT";
  margin: 40px 0;
  line-height: 25px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
`;

const MobileRecruitBtn = styled.button`
  padding: 16px 32px;
  background: #0055ff;
  border-radius: 75px;
  font-family: "SUIT";
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

const MobileQnaBox = styled.div`
  width: 100%;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "SUIT";
  padding: 80px 0;
`;

const MobileQnaTitle = styled.p`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  color: #0055ff;
  margin-bottom: 60px;
`;

// Web
const RecruitInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1180px;
  height: 3419px;
`;

const TopText = styled.p`
  font-size: 72px;
  color: white;
  font-weight: 800;
  line-height: 96px;
`;

const RecruitText = styled.p`
  font-size: 72px;
  font-weight: 800;
  line-height: 96px;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
`;

const RecruitUnderText = styled.p`
  font-family: "SUIT";
  margin-top: 40px;
  line-height: 30px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.5px;
`;

const RecruitTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  color: #ffffff;
`;

const ApplyBoxs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;

  width: 100%;
  height: 260px;

  margin-top: 100px;
  margin-bottom: 200px;
`;

const ApplyBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 380px;
  height: 260px;

  margin-bottom: 200px;
`;

const IconBox = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 140px;
  top: 0px;
  background-color: #ffffff;
  z-index: 900;
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SquareBox = styled.div`
  position: absolute;
  width: 380px;
  height: 210px;
  left: 0px;
  top: 50px;

  background-color: rgba(47, 48, 56, 0.6);
  border-radius: 32px;

  padding: 90px 30px 63px 29px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.2px;
`;

const SquareBigBox = styled.div`
  width: 1180px;
  height: 240px;
  border-radius: 32px;
  background-color: rgba(47, 48, 56, 0.6);
  margin-top: 100px;
  margin-bottom: 200px;
  font-family: "SUIT";
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 800;
  color: #ffffff;
`;

const Parts = styled.div`
  width: 467px;
  display: flex;
  margin: 85.5px auto 40px auto;
  flex-direction: row;
  gap: 160px;
`;

const SquareSub = styled.p`
  line-height: 35px;
  margin-top: 55px;
  margin-bottom: 40px;
`;

const UnderSub = styled.p`
  font-size: 16px;
  color: #90909a;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
`;

const RecruitStateBox = styled.div`
  width: 460px;
  height: 302px;
`;

const RecruitStateMsg = styled.p`
  font-family: "SUIT";
  margin: 66px 0;
  line-height: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.2px;
`;

const RecruitBtn = styled.button`
  padding: 16px 32px;
  background: #0055ff;
  border-radius: 75px;
  font-family: "SUIT";
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

const QnaBox = styled.div`
  width: 100%;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "SUIT";
  padding-top: 162px;
  padding-bottom: 162px;
`;

const QnaTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  color: #0055ff;
  margin-bottom: 100px;
`;
