/* eslint-disable */
import * as s from "./styles";
import { ICompanyProject } from "pages/Projects/ProjectsPage";

const MeetupProjectCard = ({corporate_id, banner_url, logo_url, cardinal, name, content, category}: ICompanyProject) => {
  return (
    <s.Wrapper>
      <s.PosterImg src={banner_url} />

      <s.LogoImg src={logo_url} />

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
