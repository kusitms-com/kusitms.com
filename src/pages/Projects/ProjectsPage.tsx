/* eslint-disable */
import ImageSticker from "components/ImageSticker";
import Layout from "components/Layout";
import React, { useState } from "react";
import * as s from "./styles";
import { ReactComponent as HighlightIcon } from "../../images/projects/icons/HighlightIcon.svg";
import { ReactComponent as MeetupIcons } from "../../images/projects/icons/MeetupIcons.svg";

const ProjectsPage = () => {
  const ProjectIntroText = "KUSITMS의 다양한 프로젝트를 구경해보세요!";
  const ProjectIntroSubText = "개의 프로젝트를 볼 수 있어요";
  const IntroTitle = "밋업(Meet-up)데이란?";
  const IntroDetail = "큐시즘의 파이널 프로젝트인 밋업데이는, 아이디어톤 행사인 큐넥팅을 통해 발제된 아이디어를 9명의 기획자 개발자 디자이너로 구성된 8개의 팀이 3개월 동안 준비해서 발표하는 큐시즘의 메인 프로그램이에요.";

  /* 비동기 작업필요 */
  /* '00개의 프로젝트를 볼 수 있어요' */
  const [projectNumText, setProjectNumText] = useState(0);
  

  const [isMeetupSelected, setIsMeetupSelected] = useState(true);
  const colors = ["#0055FF", "#2F3038"];
  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMeetupSelected(!isMeetupSelected);
  };

  return (
    <Layout>
      <s.Wrapper>
        <s.ProjectIntroContainer>
          <s.ProjectIntroText>{ProjectIntroText}</s.ProjectIntroText>
          <s.ProjectIntroSubText>
            <s.ProjectNumText>{projectNumText}</s.ProjectNumText>
            {ProjectIntroSubText}
            </s.ProjectIntroSubText>
        </s.ProjectIntroContainer>

        <s.SelectBox>
          {
            isMeetupSelected ? 
            <s.SelectBoxItem color={colors[0]} onClick={selectHandler}>밋업데이</s.SelectBoxItem> :
            <s.SelectBoxItem color={colors[1]} onClick={selectHandler}>밋업데이</s.SelectBoxItem>
          }

          {
            isMeetupSelected ? 
            <s.SelectBoxItem color={colors[1]} onClick={selectHandler}>기업 프로젝트</s.SelectBoxItem> :
            <s.SelectBoxItem color={colors[0]} onClick={selectHandler}>기업 프로젝트</s.SelectBoxItem>
          }
        </s.SelectBox>

        <s.EventIntroContainer>
          <ImageSticker />

          <s.IntroText>
            <s.IntroTitleWrapper>
              <s.IntroTitle>{IntroTitle}</s.IntroTitle>
              <HighlightIcon />
            </s.IntroTitleWrapper>

            <s.IntroDetail>{IntroDetail}</s.IntroDetail>

            <MeetupIcons />
          </s.IntroText>
        </s.EventIntroContainer>

        <s.ProjectsWrapper>
          
        </s.ProjectsWrapper>
      </s.Wrapper>
    </Layout>
  );
};

export default ProjectsPage;
