import React, { useState, useRef } from "react";
import styled from "styled-components";
import openbtn from "../../images/recruit/qna-open.svg";
import closebtn from "../../images/recruit/qna-close.svg";
import type { Props } from "pages/Recruit/RecruitPage";

const RecruitAccordion = (props: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = React.useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "#f2f2f8";
        parentRef.current.style.marginBottom = "0px";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        // parentRef.current.style.background = "red";
        parentRef.current.style.marginBottom = "40px";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? openbtn : closebtn;

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        <QIcon>Q</QIcon>
        {props.question}
        <QnaOpenBtn src={buttonText} />
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>{props.answer}</Contents>
      </ContentsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  width: 980px;
  background: #f2f2f8;
  border-radius: 32px;
  font-size: 20px;
  line-height: 25px;
  // padding-left: 48px;
  margin-bottom: 28px;
  padding: 40px 48px 0 48px;
  position: relative;
  cursor: pointer;
`;

const QIcon = styled.span`
  color: #0055ff;
  font-weight: 800;
  font-size; 20px;
  line-height: 25px;
  margin-right: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  // height: 24px;
  // margin: 0 2rem 0 1rem;
  font-weight: 400;
  margin-bottom: 40px;
  font-size: 20px;
  letter-spacing: -0.2px;
`;

const QnaOpenBtn = styled.img`
  vertical-align: middle;
  position: absolute;
  top: 40px;
  right: 48px;
`;

const ContentsWrapper = styled.div`
  width: 900px;
  height: 0;
  // padding: 0 8px 24px 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  color: #5d5e67;
`;

const Contents = styled.div`
  margin-bottom: 20px;
  white-space: pre-wrap;
  color: "#5d5e67";
  line-height: 25px;
  font-family: "SUIT";
`;

export default RecruitAccordion;
