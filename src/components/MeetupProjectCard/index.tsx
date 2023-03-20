/* eslint-disable */
import * as s from "./styles";
import { IMeetupProject } from "pages/Projects/ProjectsPage";
import { ReactComponent as InstagramIcon } from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/projects/icons/GithubIcon.svg";

const MeetupProjectCard = ({
  meetup_id,
  poster_url,
  logo_url,
  cardinal,
  name,
  one_line_intro,
  instagram_url,
  github_url,
  app_url,
}: IMeetupProject) => {
  const handleIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("아이콘 클릭됨");
  };
  const handleProject = () => {
    console.log("프로젝트 전체 클릭됨");
  };
  return (
    <s.Wrapper onClick={handleProject}>
      <s.PosterImg src={poster_url} loading="lazy" decoding="async" />

      <s.LogoImg src={logo_url} />

      <s.ProjectInfoWapper>
        <s.Cardinal>{cardinal}기</s.Cardinal>
        <s.ProjectName>{name}</s.ProjectName>
        <s.OneLineIntro>{one_line_intro}</s.OneLineIntro>

        <s.IconContainer>
          <s.IconBackground onClick={handleIcon}>
            <InstagramIcon />
          </s.IconBackground>

          <s.IconBackground>
            <GithubIcon />
          </s.IconBackground>
        </s.IconContainer>
      </s.ProjectInfoWapper>
    </s.Wrapper>
  );
};

export default MeetupProjectCard;
