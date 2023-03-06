/* eslint-disable */
import * as s from "./styles";
import { ICompanyProject } from "pages/Projects/ProjectsPage";

const MeetupProjectCard = ({corporate_id, banner_url, logo_url, cardinal, name, content, category}: ICompanyProject) => {
  return (
    <s.Wrapper>
      <s.PosterImg src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />

      <s.LogoImg src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />

      <s.ProjectInfoWapper>
        <s.Cardinal>{cardinal}기</s.Cardinal>
        <s.ProjectName>{name}</s.ProjectName>
        <s.ContentIntro>{content}</s.ContentIntro>

        <s.CategoryBoxContainer>
          {
            category &&
            category.map((d, i) => <s.CategoryBox>{d}</s.CategoryBox>)
          }
        </s.CategoryBoxContainer>
      </s.ProjectInfoWapper>
    </s.Wrapper>
  )
};

export default MeetupProjectCard;
