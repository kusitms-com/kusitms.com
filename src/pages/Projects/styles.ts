/* eslint-disable */
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
  &.open {
    background: rgba(21, 21, 25, 0.7);
    z-index:100002;
  }
`;

export const m_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
  &.open {
    background: rgba(21, 21, 25, 0.7);
    z-index:100002;
  };
`;

export const NotDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const m_NotDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectIntroContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  width: 640px;
  margin-top: 180px;
  text-align: center;
`;

export const m_ProjectIntroContainer = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  width: 314px;
  margin-top: 94px;
  text-align: center;
`;

export const ProjectIntroText = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 60px;
`;

export const m_ProjectIntroText = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 120%;
`; 

export const ProjectNumText = styled.div`
  color: #62efe5;
  font-size: 20px;
`;

export const m_ProjectNumText = styled.div`
  color: #62efe5;
  font-size: 20px;
`;

export const ProjectIntroSubText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  font-size: 20px;
`;

export const m_ProjectIntroSubText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  font-size: 20px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const m_SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const SelectBoxItem = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  color: ${(props) => props.about || "white"};
  border: 0px solid;
  border-radius: 75px;
  cursor: pointer;
  margin: 16px;
  margin-top: 48px;
  height: 53px;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
  align-items: center;
`;

export const m_SelectBoxItem = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  color: ${(props) => props.about || "white"};
  border: 0px solid;
  border-radius: 75px;
  cursor: pointer;
  margin: 16px;
  margin-top: 60px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const EventContainer = styled.div``;

export const EventIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;

export const m_EventIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const IntroText = styled.div`
  width: 584px;
  height: 400px;
`;

export const m_IntroText = styled.div`
  width: 246px;
  height: 29px;
`;

export const IntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const m_IntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroTitle = styled.div`
  color: white;
  margin-top: 100px;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const m_IntroTitle = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const m_MeetupHighlightWrapper = styled.div`
  display: flex;
  margin-right: 130px;
  margin-top: 8px;
`;

export const m_CompanyHighlightWrapper = styled.div`
  display: flex;
  margin-right: 60px;
  margin-top: 8px;
`;

export const IntroDetail = styled.div`
  color: #90909a;
  font-size: 20px;
  margin-top: 100px;
  line-height: 150%;
  margin-bottom: 40px;
`;

export const m_IntroDetail = styled.div`
  color: #90909a;
  font-size: 14px;
  margin-top: 32px;
  line-height: 150%;
  width: 321px;
  height: 80px;
  margin-bottom: 40px;
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
`;

export const m_ProjectsWrapper = styled.div`
  width: 100%;
`;

export const ProjectFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 110px;
`;

export const m_ProjectFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const ProjectFilterContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const m_ProjectFilterContainer = styled.div`
  width: 112px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectFilterItem = styled.div`
  color: #90909a;
  ${(props) =>
    props["aria-checked"] &&
    css`
      color: #e2e2eb;
    `};
  cursor: pointer;
`;

export const m_ProjectFilterItem = styled.div`
  color: #90909a;
  ${(props) =>
    props["aria-checked"] &&
    css`
      color: #e2e2eb;
    `};
  cursor: pointer;
`;

export const ProjectListWrapper = styled.div`
  display: grid;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
`;

export const m_ProjectListWrapper = styled.div`
  display: grid;
  margin-top: 24px;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 24px;
`;

export interface CardContainer {
  visible: boolean;
}

export const CardWrapper = styled.div<CardContainer>`
  display: ${(props) => props.visible ? 'none' : 'block'};
  background-color: ${(props) => props.visible ? 'rgba(21, 21, 25, 0)' : 'rgba(21, 21, 25, 0.9)'};
`;

export const DetailWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100001;
  background-color: #151519;
  overflow: hidden;
`;

export const m_DetailWrapper = styled.div`
  width: 100vw;
  z-index: 100001;
  background-color: #151519;
  overflow: hidden;
`;
