/* eslint-disable */
import * as s from "./styles";
import { IMeetupProject } from "pages/Projects/ProjectsPage";
import { ReactComponent as InstagramIcon } from "../../images/projects/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/projects/icons/GithubIcon.svg";
import { ReactComponent as LinkIcon } from "../../images/projects/icons/LinkIcon.svg";

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
  const handleIcon = (url: string, e: React.MouseEvent<HTMLDivElement>) => {
    window.open(url, "_blank");
    e.preventDefault();
  };

  return (
    <s.Wrapper>
      <s.PosterImg src={poster_url} loading="lazy" decoding="async" />

      <s.LogoImg src={logo_url} />

      <s.ProjectInfoWapper>
        <s.Cardinal>{cardinal}기</s.Cardinal>
        <s.ProjectName>{name}</s.ProjectName>
        <s.OneLineIntro>{one_line_intro}</s.OneLineIntro>

        <s.IconContainer>
          {instagram_url && (
            <s.IconBackground onClick={(e) => handleIcon(instagram_url, e)}>
              <InstagramIcon />
            </s.IconBackground>
          )}

          {github_url && (
            <s.IconBackground onClick={(e) => handleIcon(github_url, e)}>
              <GithubIcon />
            </s.IconBackground>
          )}

          {app_url && (
            <s.IconBackground onClick={(e) => handleIcon(app_url, e)}>
              <LinkIcon />
            </s.IconBackground>
          )}
        </s.IconContainer>
      </s.ProjectInfoWapper>
    </s.Wrapper>
  );
};

export default MeetupProjectCard;
