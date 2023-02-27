/* eslint-disable */
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
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

export const ProjectIntroText = styled.div`
  font-size: 48px;
`;

export const ProjectNumText = styled.div`
  color: #62EFE5;
  font-size: 20px;
`;

export const ProjectIntroSubText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  font-size: 20px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const SelectBoxItem = styled.div`
  display: flex;
  background-color: ${props => props.color};
  color: ${props => props.about || "white"};
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

export const EventIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
`;

export const IntroText = styled.div`
  width: 584px;
  height: 400px;
`

export const IntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroTitle = styled.div`
  color: white;
  margin-top: 100px;
  font-size: 48px;
  margin-bottom: 10px;
`;

export const IntroDetail = styled.div`
  color: #90909A;
  font-size: 20px;
  margin-top: 100px;
  line-height: 150%;
  margin-bottom: 40px;
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
`;

export const ProjectFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 110px;
`;

export const ProjectFilterContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectFilterItem = styled.div`
  color: #90909A;
  ${props => 
    props["aria-checked"] && 
    css`
      color: #E2E2EB;
    `
  };
  cursor: pointer;
`;

export const ProjectListWrapper = styled.div`
  display: grid;
  margin-top: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
`;