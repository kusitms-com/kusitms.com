/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 494px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  font-family: "SUIT";
  background-color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    transition: all 0.1s linear;
  }
`;

export const PosterImg = styled.img`
  display: flex;
  object-fit: cover;
  overflow: hidden;
  height: 285px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const LogoImg = styled.img`
  display: flex;
  position: absolute;
  margin-top: 235px;
  width: 95px;
  height: 95px;
  object-fit: contain;
  border-radius: 50px;
  top: 0px;
  right: 24px;
  background-color: white;
`;

export const ProjectInfoWapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
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
  margin-right: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const IconContainer = styled.div`
  width: 200px;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  bottom: 30px;
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45464f;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  cursor: pointer;
`;
