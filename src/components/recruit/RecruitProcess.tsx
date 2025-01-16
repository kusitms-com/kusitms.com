import React from "react";
import styled from "styled-components";
import level1 from "../../images/recruit/recruit-level-1.svg";
import level2 from "../../images/recruit/recruit-level-2.svg";
import level3 from "../../images/recruit/recruit-level-3.svg";
import level4 from "../../images/recruit/recruit-level-4.svg";
import level5 from "../../images/recruit/recruit-level-5.svg";

import mblevel1 from "../../images/recruit/mobile-recruit-level-1.svg";
import arrow from "../../images/recruit/recruit-arrow.svg";

import mbarrow1 from "../../images/recruit/mobile-arrow1.svg";
import mbarrow2 from "../../images/recruit/mobile-arrow2.svg";

import mblevel2 from "../../images/recruit/mobile-recruit-level-2.svg";
import mblevel3 from "../../images/recruit/mobile-recruit-level-3.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

interface processInfo {
  img: string;
  period: string;
}

const KUSITMS_YEAR = "31기 활동";
const PROCESS_INFO = [
  {
    img: level1,
    period: "1월 16일(목) ~ 1월 25일(토) 23:59 마감",
  },
  {
    img: level2,
    period: "1월 28일(화) 합격자/불합격자 개별 연락",
  },
  {
    img: level3,
    period: "2월 1일(토) ~ 2월 2일(일)\n서류 합격자 개별 안내",
  },
  {
    img: level4,
    period: "2월 9일(일)\n합격자/불합격자 개별 연락",
  },
];
const KUSITMS_PERIOD = "선발 직후 ~ 6월 첫째 주 주말";

const RecruitProcess = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div>
        <div>
          <img src={mblevel1} />
          <MobileTextBox>
            <MobileText>{PROCESS_INFO[0].period}</MobileText>
            <MobileText>{PROCESS_INFO[1].period}</MobileText>
          </MobileTextBox>
        </div>
        <div style={{ textAlign: "right", padding: "40px 60px 40px 0" }}>
          <img src={mbarrow1} alt="recruit-process1" />
        </div>
        <div>
          <img src={mblevel2} alt="recruit-process2" />
          <MobileTextBox>
            <MobileText>{PROCESS_INFO[3].period}</MobileText>
            <MobileText>{PROCESS_INFO[2].period}</MobileText>
          </MobileTextBox>
        </div>
        <div style={{ textAlign: "left", padding: "45px 0 15px 75px" }}>
          <img src={mbarrow2} />
        </div>
        <div>
          <MobileLastContainer>
            <MobileLastContext>{KUSITMS_YEAR}</MobileLastContext>
            <img src={mblevel3} alt="recruit-process3" />
          </MobileLastContainer>
          <div style={{ textAlign: "center" }}>
            <MobileText>{KUSITMS_PERIOD}</MobileText>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ProcessBox>
      {PROCESS_INFO.map((info: processInfo, index: number) => (
        <Process key={index}>
          <ProcessInnerBox>
            <div>
              <img src={info.img} />
            </div>
            <Period>{info.period}</Period>
          </ProcessInnerBox>
          <img src={arrow} style={{ padding: "94px 17px 0 17px" }} />
        </Process>
      ))}
      <ProcessLast>
        <ProcessLastContainer>
          <LastContext>{KUSITMS_YEAR}</LastContext>
          <img src={level5} style={{ marginBottom: "14px" }} />
        </ProcessLastContainer>
        <Period>{KUSITMS_PERIOD}</Period>
      </ProcessLast>
    </ProcessBox>
  );
};

export default RecruitProcess;

const MobileTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 345px;
`;

const MobileLastContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 94px;
`;

const MobileText = styled.p`
  padding-top: 24px;
  white-space: pre-wrap;
  color: #ffffff;
  font-size: 14px;
  font-family: "SUIT";
  line-height: 24px;
  text-align: center;
  font-weight: 400;
`;

const MobileLastContext = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
  font-family: "SUIT";
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
  color: #ffffff;
  z-index: 999;
`;

const ProcessBox = styled.div`
  display: flex;
  margin-top: 100px;
  /* postion: relative; */
`;

const ProcessInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

const ProcessLast = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20px;
  // margin-bottom: 50px;
`;

const ProcessLastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const LastContext = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
  font-family: "SUIT";
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  color: #ffffff;
  z-index: 999;
`;

const Process = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
`;

const Period = styled.p`
  line-height: 25px;
  margin-top: 36px;
  color: #fff;
`;
