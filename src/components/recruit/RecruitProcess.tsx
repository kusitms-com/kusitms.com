import React from "react";
import styled from "styled-components";
import level1 from "../../images/recruit/recruit-level-1.svg";
import level2 from "../../images/recruit/recruit-level-2.svg";
import level3 from "../../images/recruit/recruit-level-3.svg";
import level4 from "../../images/recruit/recruit-level-4.svg";
import level5 from "../../images/recruit/recruit-level-5.svg";
import arrow from "../../images/recruit/recruit-arrow.svg";

interface processInfo {
  img: string;
  period: string;
}

const KUSITMS_YEAR = "27기 활동";
const PROCESS_INFO = [
  {
    img: level1,
    period: "1월 23일(월) ~ 2월 12일(일)\n자정 마감",
  },
  {
    img: level2,
    period: "2월 15일(수)\n합격자/불합격자 전체 연락",
  },
  {
    img: level3,
    period: "2월 18일(토) ~ 2월 19일(일)\n서류 합격자 개별 안내",
  },
  {
    img: level4,
    period: "2월 21일(화)\n합격자/불합격자 전체 연락",
  },
];

const KUSITMS_PERIOD = "2월 25일(토) ~ 5월 27일(토)";

const RecruitProcess = () => {
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

const ProcessBox = styled.div`
  display: flex;
  margin-top: 100px;
  postion: relative;
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
  justify-contents: center;
  align-items: center;

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
