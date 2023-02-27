/* eslint-disable */
import React, { useState } from "react";
import * as s from "./styles";
import { IMeetupProject } from "pages/Projects/ProjectsPage";
import { ReactComponent as InstagramIcon} from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon} from "../../images/projects/icons/GithubIcon.svg";


const ProjectCard = ({meetup_id, poster_url, logo_url, cardinal, name, one_line_intro, instagram_url, github_url, app_url}: IMeetupProject) => {
  return (
    <s.Wrapper>
      <s.PosterImg src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />

      <s.LogoImg src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />

      <s.ProjectInfoWapper>
        <s.Cardinal>26기</s.Cardinal>
        <s.ProjectName>프로젝트 명</s.ProjectName>
        <s.OneLineIntro>공백포함 최대40자 공백포함 최대40자 공백포함 최대40자 공백포함 최대40자  </s.OneLineIntro>

        <s.IconContainer>
          <s.IconBackground>
            <InstagramIcon />
          </s.IconBackground>

          <s.IconBackground>
            <GithubIcon />
          </s.IconBackground>
        </s.IconContainer>
      </s.ProjectInfoWapper>
    </s.Wrapper>
  )
};

export default ProjectCard;
