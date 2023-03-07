/* eslint-disable */
import Layout from "components/Layout";
import * as s from "./styles";
import { ReactComponent as InstagramIcon } from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/projects/icons/GithubIcon.svg";
import { ReactComponent as DetailLinkIcon } from "../../images/projects/icons/DetailLinkIcon.svg";

const ProjectDetail = () => {
  return (
    <Layout>
      <s.Wrapper>
        <s.Container>
          <s.TopContainer>
            <s.Intro>
              <s.Title>프로젝트명</s.Title>
              <s.OneLineIntro>프로젝트 한 줄 소개</s.OneLineIntro>
            </s.Intro>

            <s.IconContainer>
              <s.IconBackground>
                <InstagramIcon />
              </s.IconBackground>

              <s.IconBackground>
                <GithubIcon />
              </s.IconBackground>

              <s.IconBackground>
                <DetailLinkIcon />
              </s.IconBackground>
            </s.IconContainer>
          </s.TopContainer>

          <s.DetailContainer>
            <s.ItemPoster src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <s.ProjectIntroduce>
              <s.ProjectAbstract>
                <s.AbstractTitle>프로젝트 요약</s.AbstractTitle>
                <s.ProjectAbstractContent>
                  <s.AbstractColumnContainer>
                    <s.AbstractColumn>진행 기수</s.AbstractColumn>
                    <s.AbstractColumn>프로젝트 형태/기간</s.AbstractColumn>
                    <s.AbstractColumn>팀 구성</s.AbstractColumn>
                  </s.AbstractColumnContainer>

                  <s.VerticalLine />

                  <s.AbstractInfoText>
                    <s.AbstractInfoTextItem>26기</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`앱 (2022.00.00 - 00.00)`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`기획 (3) : 홍길동, 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`디자인 (1) : 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`프론트엔드 (2) : 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                    <s.AbstractInfoTextItem>{`백엔드 (2) : 홍길동, 홍길동`}</s.AbstractInfoTextItem>
                  </s.AbstractInfoText>
                </s.ProjectAbstractContent>
              </s.ProjectAbstract>

              <s.ProjectIntroText>
                <s.ProjectIntroTextTitle>프로젝트 설명</s.ProjectIntroTextTitle>
                <s.ProjectIntroTextContent>
                  피크랩(pickRAP)은 스크랩의 과정을 통해 자신만의 솔직한 감성과
                  정체성을 만들어나가는 서비스입니다. 피크랩(pickRAP) 은
                  스크랩의 과정을 통해 자신만의 솔직한 감성과 정체성을
                  만들어나가는 서비스입니다. 피크랩(pickRAP)은 스크랩의 과정을
                  통해 자신만의 솔직한 감성과 정체성을 만들어나가는
                  서비스입니다. 피크랩(pickRAP) 은 스크랩의 과정을 통해 자신만의
                  솔직한 감성과 정체성을 만들어나가는 서비스입니다.
                </s.ProjectIntroTextContent>
              </s.ProjectIntroText>
            </s.ProjectIntroduce>
          </s.DetailContainer>
        </s.Container>
      </s.Wrapper>
    </Layout>
  );
};

export default ProjectDetail;
