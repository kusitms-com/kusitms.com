/* eslint-disable */
import * as s from "./styles";
import { ReactComponent as InstagramIcon } from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/projects/icons/GithubIcon.svg";
import { ReactComponent as DetailLinkIcon } from "../../images/projects/icons/DetailLinkIcon.svg";
import { ReactComponent as CloseIcon } from "../../images/projects/icons/CloseIcon.svg";
// import { ReactComponent as MobileCloseIcon } from "../../images/projects/icons/MobileCloseIcon.svg";
import { IMeetupDetails } from "pages/Projects/ProjectsPage";
import { useEffect, useRef } from "react";
// import { useIsMobile } from "hooks/useIsMobile";

const ProjectDetail = ({
  cardinal,
  name,
  intro,
  type,
  team,
  // meetup_id,
  one_line_intro,
  // logo_url,
  poster_url,
  instagram_url,
  github_url,
  app_url,
  start_date,
  end_date,
  setModalOpen,
}: IMeetupDetails | any) => {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    const eveneHandler = (e: React.MouseEvent<HTMLElement> | MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", eveneHandler);
    return () => document.removeEventListener("mousedown", eveneHandler);
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIcon = (url: string) => {
    window.open(url, "_blank");
  };

  // const isMobile: boolean = useIsMobile();

  // if (isMobile) {
  //   return (
  //     <s.m_Layer>
  //       <s.m_Wrapper ref={modalRef}>
  //         <s.m_Container>
  //           <s.m_IconContainer>
  //             <s.m_LeftIcon onClick={() => closeModal()}>
  //               <MobileCloseIcon />
  //             </s.m_LeftIcon>

  //             <s.m_RightIcons>
  //               <s.m_RightIconContainer>
  //                 {instagram_url && (
  //                   <s.m_IconBackground onClick={() => handleIcon(instagram_url)}>
  //                     <InstagramIcon />
  //                   </s.m_IconBackground>
  //                 )}

  //                 {github_url && (
  //                   <s.m_IconBackground onClick={() => handleIcon(github_url)}>
  //                     <GithubIcon />
  //                   </s.m_IconBackground>
  //                 )}

  //                 {app_url && (
  //                   <s.m_IconBackground onClick={() => handleIcon(app_url)}>
  //                     <DetailLinkIcon />
  //                   </s.m_IconBackground>
  //                 )}
  //               </s.m_RightIconContainer>
  //             </s.m_RightIcons>
  //           </s.m_IconContainer>

  //           <s.m_TopContainer>
  //             <s.m_Intro>
  //               <s.m_Title>{name}</s.m_Title>
  //               <s.m_OneLineIntro>{one_line_intro}</s.m_OneLineIntro>
  //             </s.m_Intro>
  //           </s.m_TopContainer>

  //           <s.m_DetailContainer>
  //             <s.m_ItemPoster src={poster_url} />
  //             <s.m_ProjectAbstract>
  //               <s.m_AbstractTitle>프로젝트 요약</s.m_AbstractTitle>
  //               <s.m_ProjectAbstractContent>
  //                 <s.m_AbstractColumnContainer>
  //                   <s.m_AbstractColumn>진행 기수</s.m_AbstractColumn>
  //                   <s.m_AbstractColumn>프로젝트 형태/기간</s.m_AbstractColumn>
  //                   <s.m_AbstractColumn>팀 구성</s.m_AbstractColumn>
  //                 </s.m_AbstractColumnContainer>

  //                 <s.m_VerticalLine />

  //                 <s.m_AbstractInfoText>
  //                   <s.AbstractInfoTextItem>
  //                     {cardinal}기
  //                   </s.AbstractInfoTextItem>
  //                   <s.AbstractInfoTextItem>{`${type}\n(${start_date} - ${end_date})`}</s.AbstractInfoTextItem>
  //                   <s.AbstractInfoTextItem>{`기획 (${
  //                     team.planner.length
  //                   })\n: ${team.planner.map(
  //                     (member: string) => member
  //                   )}`}</s.AbstractInfoTextItem>
  //                   <s.AbstractInfoTextItem>{`디자인 (${
  //                     team.designer.length
  //                   })\n: ${team.designer.map(
  //                     (member: string) => member
  //                   )}`}</s.AbstractInfoTextItem>
  //                   {team.frontend && (
  //                     <s.AbstractInfoTextItem>{`프론트엔드 (${
  //                       team.frontend.length
  //                     })\n: ${team.frontend.map(
  //                       (member: string) => member
  //                     )}`}</s.AbstractInfoTextItem>
  //                   )}
  //                   {team.aos && (
  //                     <s.AbstractInfoTextItem>{`android (${
  //                       team.aos.length
  //                     })\n: ${team.aos.map(
  //                       (member: string) => member
  //                     )}`}</s.AbstractInfoTextItem>
  //                   )}
  //                   {team.ios && (
  //                     <s.AbstractInfoTextItem>{`ios (${
  //                       team.ios.length
  //                     })\n: ${team.ios.map(
  //                       (member: string) => member
  //                     )}`}</s.AbstractInfoTextItem>
  //                   )}
  //                   <s.AbstractInfoTextItem>{`백엔드 (${
  //                     team.backend.length
  //                   })\n: ${team.backend.map(
  //                     (member: string) => member
  //                   )}`}</s.AbstractInfoTextItem>
  //                 </s.m_AbstractInfoText>
  //               </s.m_ProjectAbstractContent>
  //             </s.m_ProjectAbstract>

  //             <s.m_ProjectIntroText>
  //               <s.m_ProjectIntroTextTitle>
  //                 프로젝트 설명
  //               </s.m_ProjectIntroTextTitle>
  //               <s.m_ProjectIntroTextContent>
  //                 {intro}
  //               </s.m_ProjectIntroTextContent>
  //             </s.m_ProjectIntroText>
  //           </s.m_DetailContainer>
  //         </s.m_Container>
  //       </s.m_Wrapper>
  //     </s.m_Layer>
  //   );
  // }

  return (
    <s.Wrapper ref={modalRef}>
      <s.Container>
        <s.TopContainer>
          <s.Intro>
            <s.Title>{name}</s.Title>
            <s.OneLineIntro>{one_line_intro}</s.OneLineIntro>
          </s.Intro>

          <s.RightIcons>
            <s.CloseIconWrapper onClick={() => closeModal()}>
              <CloseIcon />
            </s.CloseIconWrapper>
            <s.IconContainer>
              {instagram_url && (
                <s.IconBackground onClick={() => handleIcon(instagram_url)}>
                  <InstagramIcon />
                </s.IconBackground>
              )}

              {github_url && (
                <s.IconBackground onClick={() => handleIcon(github_url)}>
                  <GithubIcon />
                </s.IconBackground>
              )}

              {app_url && (
                <s.IconBackground onClick={() => handleIcon(app_url)}>
                  <DetailLinkIcon />
                </s.IconBackground>
              )}
            </s.IconContainer>
          </s.RightIcons>
        </s.TopContainer>

        <s.DetailContainer>
          <s.ItemPoster src={poster_url} />
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
                  <s.AbstractInfoTextItem>{cardinal}기</s.AbstractInfoTextItem>
                  <s.AbstractInfoTextItem>{`${type} (${start_date} - ${end_date})`}</s.AbstractInfoTextItem>
                  <s.AbstractInfoTextItem>{`기획 (${
                    team.planner.length
                  }) : ${team.planner.map(
                    (member: string) => member
                  )}`}</s.AbstractInfoTextItem>
                  <s.AbstractInfoTextItem>{`디자인 (${
                    team.designer.length
                  }) : ${team.designer.map(
                    (member: string) => member
                  )}`}</s.AbstractInfoTextItem>
                  {team.frontend && (
                    <s.AbstractInfoTextItem>{`프론트엔드 (${
                      team.frontend.length
                    }) : ${team.frontend.map(
                      (member: string) => member
                    )}`}</s.AbstractInfoTextItem>
                  )}
                  {team.aos && (
                    <s.AbstractInfoTextItem>{`android (${
                      team.aos.length
                    }) : ${team.aos.map(
                      (member: string) => member
                    )}`}</s.AbstractInfoTextItem>
                  )}
                  {team.ios && (
                    <s.AbstractInfoTextItem>{`ios (${
                      team.ios.length
                    }) : ${team.ios.map(
                      (member: string) => member
                    )}`}</s.AbstractInfoTextItem>
                  )}
                  <s.AbstractInfoTextItem>{`백엔드 (${
                    team.backend.length
                  }) : ${team.backend.map(
                    (member: string) => member
                  )}`}</s.AbstractInfoTextItem>
                </s.AbstractInfoText>
              </s.ProjectAbstractContent>
            </s.ProjectAbstract>

            <s.ProjectIntroText>
              <s.ProjectIntroTextTitle>프로젝트 설명</s.ProjectIntroTextTitle>
              <s.ProjectIntroTextContent>{intro}</s.ProjectIntroTextContent>
            </s.ProjectIntroText>
          </s.ProjectIntroduce>
        </s.DetailContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default ProjectDetail;
