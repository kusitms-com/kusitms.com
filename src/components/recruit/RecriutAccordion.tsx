import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import openbtn from "../../images/recruit/qna-open.svg";
import closebtn from "../../images/recruit/qna-close.svg";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";

export interface Props {
  question?: string | React.ReactNode;
  answer?: string | React.ReactNode;
  index: number;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}

const RecruitAccordion = (props: Props) => {
  const isMobile = useIsMobile();

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const current: boolean = props.active === props.index;
  const handleClick = () => {
    props.setActive(props.index);
  };
  const handleButtonClick = () => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      console.log(
        "클릭중인 parentRef!!!! Height는? : ",
        parentRef.current.clientHeight
      );
      parentRef.current.style.height = "0";
      parentRef.current.style.background = "#f2f2f8";
      parentRef.current.style.marginBottom = "0px";
      parentRef.current.style.transition =
        "height 0.35s ease, background 0.35s ease";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      parentRef.current.style.marginBottom = isMobile ? "0" : "40px";
    }
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    handleButtonClick();
  }, [props.active]);

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? openbtn : closebtn;

  if (isMobile) {
    return (
      <MobileContainer onClick={handleClick}>
        <MobileHeader onClick={handleButtonClick}>
          <MobileQIcon>Q</MobileQIcon>
          <MobileQuestion>{props.question}</MobileQuestion>
          <MobileQnaOpenBtn src={buttonText} />
        </MobileHeader>
        {current ? (
          <MobileContentsWrapper ref={parentRef}>
            <MobileContents ref={childRef}>
              {props.answer}
              {props.index === 6 && (
                <Link to="/projects" style={{ color: "#0055ff" }}>
                  프로젝트 페이지
                </Link>
              )}
              {props.index === 6 && <span>에서 확인해보세요.</span>}
            </MobileContents>
          </MobileContentsWrapper>
        ) : null}
      </MobileContainer>
    );
  }

  return (
    <Container onClick={handleClick}>
      <Header onClick={handleButtonClick}>
        <QIcon>Q</QIcon>
        {props.question}
        <QnaOpenBtn src={buttonText} />
      </Header>
      {current ? (
        <ContentsWrapper ref={parentRef}>
          <Contents ref={childRef}>
            {props.answer}
            {props.index === 6 && (
              <Link to="/projects" style={{ color: "#0055ff" }}>
                프로젝트 페이지
              </Link>
            )}
            {props.index === 6 && <span>에서 확인해보세요.</span>}
          </Contents>
        </ContentsWrapper>
      ) : null}
    </Container>
  );
};

const MobileContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  width: 350px;
  background: #f2f2f8;
  border-radius: 32px;
  line-height: 25px;
  margin-bottom: 28px;
  padding: 28px;
  position: relative;
  cursor: pointer;
`;

const MobileQIcon = styled.span`
  position: absolute;
  top: 26px;
  left: 28px;
  color: #0055ff;
  font-weight: 800;
  font-size; 16px;
  line-height: 25px;
  margin-right: 8px;
`;

const MobileQuestion = styled.span`
  font-family: "SUIT";
  font-weight: 400;
  font-size: 16px;
  width: 235px;
  line-height: 20px;
  margin-left: 24px;
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  letter-spacing: -0.5px;
`;

const MobileQnaOpenBtn = styled.img`
  position: absolute;
  top: 24px;
  right: 28px;
`;

const MobileContentsWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  color: #5d5e67;
`;

const MobileContents = styled.div`
  padding-top: 20px;
  letter-spacing: -0.5px;
  color: "#5d5e67";
  line-height: 25px;
  font-family: "SUIT";
  font-size: 16px;
  white-space: normal;
`;

// web
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
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  color: #5d5e67;
`;

const Contents = styled.div`
  margin-bottom: 20px;
  white-space: pre-wrap;
  letter-spacing: -0.2px;
  color: "#5d5e67";
  line-height: 25px;
  font-family: "SUIT";
`;

export default RecruitAccordion;
