/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 494px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  font-family: 'SUIT';
  background-color: white;
`;

export const PosterImg = styled.img`
  display: flex;
  width: 380px;
  height: 285px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  src: ${props => props.src};
`;

export const LogoImg = styled.img`
  display: flex;
  position: absolute;
  margin-top: 237px;
  width: 95px;
  height: 95px;
  border-radius: 50px;
  src: ${props => props.src};
  top: 0px;
  right: 24px;
`;

export const ProjectInfoWapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-left: 24px;
`;

export const Cardinal = styled.div`
  margin-top: 22px;
  font-size: 16px;
`;

export const ProjectName = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
`;

export const OneLineIntro = styled.div`
  margin-top: 20px;
`;

export const IconContainer = styled.div`
  width: 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45464F;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  cursor: pointer;
`;