/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 72px; 
  width: 100%;
  height: 72px;
  background: linear-gradient(167deg, #0058FF 13.62%, #01E5E3 100%);
  font-family: 'SUIT';
`;

export const ContentBox = styled.div`
  display: flex;
  width: 480px;
  justify-content: space-between;
  align-items: center;
`;

export const GuideMent = styled.h1`
  display: flex;
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

export const LinkBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #05f;
  font-weight: 600;
  padding-left: 28px;
  padding-right: 28px;
  height: 40px;
  background-color: white;
  border-radius: 75px;
  cursor: pointer;
`;

export const Linkicon = styled.img`
  display: flex;
  width: 20px;
  height: 8px;
  margin-left: 10px;
`;
