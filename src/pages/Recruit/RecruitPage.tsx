import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";

import polygon from "../../images/recruit/Polygon.svg";
import book from "../../images/recruit/apply-book.svg";
import calendar from "../../images/recruit/apply-calendar.svg";
import ranking from "../../images/recruit/apply-ranking.svg";
import openbtn from "../../images/recruit/qna-open.svg";
import RecruitProcess from "components/recruit/RecruitProcess";

const RECRUIT_UNDERTITLE =
  "큐시즘은 혼자서는 해낼 수 없는 일들을 함께 이루어내고 있어요.\n멋진 아이디어를 실현하고, 놀라운 결과를 만들어내요.\n우리와 함께할래요?";
const RECRUIT_TITLE_1 = "누가 지원할 수 있어요?";
const RECRUIT_TITLE_2 = "어떤 파트를 모집해요?";
const RECRUIT_TITLE_3 = "언제 어디서 모여요?";
const RECRUIT_TITLE_4 = "모집 절차가 어떻게 돼요?";

const RECRUIT_PART_1 = "기획";
const RECRUIT_PART_2 = "개발";
const RECRUIT_PART_3 = "디자인";

const PART_UNDER_SUB = "* 파트별 인원 수는 매 기수 달라질 수 있어요 :)";
const WHERE_SUB = "일시: 매주 토요일 15시 ~ 18시\n장소: 서울 지역 내";
const WHERE_UNDER_SUB =
  "* 활동 장소와 시간은 커리큘럼에 따라 변경될 수 있어요 :)";
const WHO_APPLY = [
  {
    icon: book,
    text: "활동 기간 동안 대학생 신분을 유지하는 분\n(졸업 유예자, 휴학생, 수료생 포함)",
  },
  {
    icon: calendar,
    text: "매주 토요일 서울 지역에서\n진행되는 세션에 빠짐없이 참석 가능한 분",
  },
  {
    icon: ranking,
    text: "활동 기간 동안 팀 모임에\n적극적으로 참석 가능한 분",
  },
];

const RECRUIT_ALARM = [
  {
    title: "모집 알림을 받아볼게요!",
    msg: "아쉽게도 지금은 모집 기간이 아니에요!\n알림 신청을 통해 28기 모집 알림을 받아보세요. :)",
    btn: "28기 모집 알림 신청하기",
  },
  {
    title: "이제 지원해볼게요!",
    msg: "큐시즘 28기 리크루팅이 시작되었어요.\n큐시즘과 함께 성장할 열정 가득한 여러분을 기다려요!",
    btn: "함께하러 가기",
  },
];

// const RECRUIT_ALARM

const RecruitPage = () => {
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
            {WHO_APPLY.map((apply: any, index: number) => (
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
            <RecruitTitle>{RECRUIT_ALARM[0].title}</RecruitTitle>
            <RecruitStateMsg>{RECRUIT_ALARM[0].msg}</RecruitStateMsg>
            <RecruitBtn>{RECRUIT_ALARM[0].btn}</RecruitBtn>
          </RecruitStateBox>
        </RecruitInner>
      </RecruitContainer>
      <QnaBox>
        <QnaTitle>궁금한게 있어요!</QnaTitle>
        <QnaAccordion>
          <QIcon>Q</QIcon>
          <Question>모집 기간이 언제에요?</Question>
          <QnaOpenBtn src={openbtn} />
        </QnaAccordion>
      </QnaBox>
    </Layout>
  );
};

export default RecruitPage;

const RecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1920px;
  height: 3730px;
  padding-top: 192px;
  white-space: pre-wrap;
  text-align: center;
  background: #151519;

  font-family: "SUIT";
`;

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
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.2px;
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

  width: 1180px;
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
`;

const QnaBox = styled.div`
  width: 100%;
  height: 1358px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "SUIT";
  padding-top: 162px;
`;

const QnaTitle = styled.p`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
  color: #0055ff;
  margin-bottom: 100px;
`;

const QnaAccordion = styled.div`
  width: 980px;
  height: 108px;
  background: #f2f2f8;
  border-radius: 32px;
  font-size: 20px;
  line-height: 25px;
  padding-top: 40px;
  padding-left: 48px;
  position: relative;
`;

const QIcon = styled.span`
  color: #0055ff;
  font-weight: 800;
  font-size; 20px;
  line-height: 25px;
  margin-right: 8px;
`;

const Question = styled.span`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.2px;
`;

const QnaOpenBtn = styled.img`
  vertical-align: middle;
  position: absolute;
  top: 40px;
  right: 48px;
`;
