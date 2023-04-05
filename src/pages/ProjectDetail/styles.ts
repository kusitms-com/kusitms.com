/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(21, 21, 25, 0.9);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
  color: white;
  /* max-width: 1180px; */
  max-width: 944px;
  width: 100%;
`;

export const m_Layer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const m_Wrapper = styled.div`
  display: flex;
  background-color: rgba(21, 21, 25, 0.9);
  z-index: 5;
  flex-direction: column;
  align-items: center;
  font-family: "SUIT";
  color: white;
  max-width: 320px;
  width: 320px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: 80%; */
`;

export const m_Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const m_IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
  margin-top: 20px;
`;

export const m_LeftIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45464F;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  cursor: pointer;
`;

export const m_RightIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 120px;
`;

export const m_RightIconContainer = styled.div`
  display: flex;
  flex-direction: end;
`;

export const m_IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45464F;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* margin-top: 112px; */
  margin-top: 90px;
`;

export const m_TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin-top: 24px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const m_Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const Title = styled.div`
  /* font-size: 48px; */
  font-size: 40px;
  font-weight: bold;
`;

export const m_Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const OneLineIntro = styled.div`
  /* font-size: 20px; */
  font-size: 18px;
  color: #e2e2eb;
  margin-top: 24px;
  font-weight: 400;
`;

export const m_OneLineIntro = styled.div`
  font-size: 14px;
  color: #e2e2eb;
  margin-top: 24px;
  font-weight: 400;
`;

export const RightIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 184px;
  height: 48px;
  padding-right: 8px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 184px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 13px;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45464F;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 1180px; */
  width: 944px;
  /* height: 678px; */
  height: 542px;
  /* margin-top: 40px; */
  margin-top: 36px;
`;

export const m_DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  /* height: 678px; */
  margin-top: 40px;
`;

export const ItemPoster = styled.img`
  /* width: 480px; */
  width: 384px;
  /* height: 678px; */
  height: 542px;
  border-radius: 10px;
`;

export const m_ItemPoster = styled.img`
  width: 320px;
  height: 452px;
  border-radius: 10px;
`;

export const ProjectIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 680px; */
  width: 544px;
  /* height: 678px; */
  height: 542px;
  color: white;
`;

export const ProjectAbstract = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 680px; */
  width: 544px;
  /* height: 343px; */
  height: 274px;
  border-radius: 10px;
  background-color: #5d5e67;
`;

export const m_ProjectAbstract = styled.div`
  display: flex;
  flex-direction: column;
  width: 326px;
  height: 330px;
  border-radius: 10px;
  margin-top: 24px;
  line-height: 20px;
  background-color: #5d5e67;
`;

export const AbstractTitle = styled.div`
  /* margin-top: 40px; */
  margin-top: 36px;
  /* margin-left: 40px; */
  margin-left: 36px;
  /* font-size: 24px; */
  font-size: 20px;
  font-weight: bold;
`;

export const m_AbstractTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProjectAbstractContent = styled.div`
  /* margin-top: 24px; */
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

export const m_ProjectAbstractContent = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
`;

export const AbstractColumnContainer = styled.div`
  /* height: 100px; */
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-left: 40px; */
  margin-left: 36px;
  font-weight: 400;
`;

export const m_AbstractColumnContainer = styled.div`
  width: 100px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 24px;
  font-weight: 400;
  word-break: keep-all;
`;

export const AbstractColumn = styled.div`
  /* font-size: 24px; */
  font-size: 16px;
`;

export const m_AbstractColumn = styled.div`
  font-size: 14px;
`;

export const VerticalLine = styled.div`
  border: 1px solid;
  width: 0.1px;
  /* height: 210px; */
  height: 168px;
  border-color: #90909a;
  /* margin-left: 60px; */
  margin-left: 48px;
`;

export const m_VerticalLine = styled.div`
  border: 1px solid;
  width: 0.1px;
  height: 242px;
  border-color: #90909a;
  margin-right: 4px;
`;

export const AbstractInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* font-size: 20px; */
  font-size: 16px;
  font-weight: 400;
  /* margin-left: 60px; */
  margin-left: 48px;
  /* height: 210px; */
  height: 168px;
`;

export const m_AbstractInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  height: 242px;
`;

export const AbstractInfoTextItem = styled.div`
  white-space: pre-wrap;  
`;

export const ProjectIntroText = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 680px; */
  width: 544px;
  /* height: 315px; */
  height: 252px;
  border-radius: 10px;
  background-color: #2f3038;
`;

export const m_ProjectIntroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 326px;
  height: 410px;
  border-radius: 10px;
  background-color: #2f3038;
  margin-top: 24px;
`;

export const ProjectIntroTextTitle = styled.div`
  /* margin-top: 40px; */
  margin-top: 36px;
  /* margin-left: 40px; */
  margin-left: 36px;
  /* font-size: 24px; */
  font-size: 20px;
  font-weight: bold;
`;

export const m_ProjectIntroTextTitle = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  font-size: 20px;
  font-weight: bold;
`;

export const ProjectIntroTextContent = styled.div`
  /* width: 600px; */
  width : 480px;
  line-height: 25px;
  /* margin-top: 24px; */
  margin-top: 20px;
  /* margin-left: 40px; */
  margin-left: 36px;
  /* margin-right: 40px; */
  margin-right: 36px;
  /* margin-bottom: 24px; */
  margin-bottom: 20px;
  /* font-size: 20px; */
  font-size: 16px;
  font-weight: 400;
  overflow: auto;
  white-space: pre-wrap;
  word-break: keep-all;
  &::-webkit-scrollbar {
    display: none;
  };
`;

export const m_ProjectIntroTextContent = styled.div`
  width: 278px;
  line-height: 25px;
  margin-top: 16px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  overflow: auto;
  white-space: pre-wrap;
  word-break: keep-all;
  &::-webkit-scrollbar {
    display: none;
  };
`;
