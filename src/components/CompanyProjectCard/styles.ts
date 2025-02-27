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

export const ContentIntro = styled.div`
  margin-top: 20px;
  margin-right: 20px;
`;

export const CategoryBoxContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  bottom: 50px;
`;

export const CategoryBox = styled.div`
  border: 1px solid #2f3038;
  border-radius: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 5px;
  color: #2f3038;
`;
