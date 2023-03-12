/* eslint-disable */
import ImageSticker from "components/ImageSticker";
import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { ReactComponent as MeetupHighlightIcon } from "../../images/projects/icons/MeetupHighlightIcon.svg";
import { ReactComponent as CompanyHighlightIcon } from "../../images/projects/icons/CompanyHighlightIcon.svg";
import { ReactComponent as MeetupIcons } from "../../images/projects/icons/MeetupIcons.svg";
import { ReactComponent as CompanyIcons } from "../../images/projects/icons/CompanyIcons.svg";
import MeetupProjectCard from "components/MeetupProjectCard";
import company_tmpImg from "../../images/projects/tmp/company_tmpImg.png";
import meetup_tmpImg from "../../images/projects/tmp/meetup_tmpImg.png";
import CompanyProjectCard from "components/CompanyProjectCard";
import companyTmpData from "tmpdata/tmpCompanyData";
import ProjectsAPI from "api/ProjectsAPI";

export interface IMeetupList {
  meetup_count: number;
  meetup_list: IMeetupProject[];
};

export interface IMeetupProject {
  meetup_id: number;
  poster_url: string;
  logo_url: string;
  cardinal: number;
  name: string;
  one_line_intro: string;
  instagram_url: string;
  github_url: string;
  app_url?: string | null
};

export interface ICompanyList {
  corporateCount: number;
  corporateList: ICompanyProject[];
}

export interface ICompanyProject {
  corporate_id: number;
  banner_url: string;
  logo_url: string;
  cardinal: number;
  name: string;
  content: string;
  category: string[];
}

export interface IStickerProps {
  isMeetupSelected: boolean,
  meetupImgURL: string,
  companyImgURL: string
};

const ProjectsPage = () => {
  const ProjectIntroText = "KUSITMS의 다양한 프로젝트를 구경해보세요!";
  const ProjectIntroSubText = "개의 프로젝트를 볼 수 있어요";

  const MeetupIntroTitle = "밋업(Meet-up)데이란?";
  const MeetupIntroDetail = "큐시즘의 파이널 프로젝트인 밋업데이는, 아이디어톤 행사인 큐넥팅을 통해 발제된 아이디어를 9명의 기획자 개발자 디자이너로 구성된 8개의 팀이 3개월 동안 준비해서 발표하는 큐시즘의 메인 프로그램이에요.";

  const CompanyIntroTitle = "기업프로젝트란?";
  const CompanyIntroDetail = "큐시즘과 기업이 협업하여 실제 기업이 고민하고 있는 경영/마케팅 문제나 개발과 관련된 아이디어를 제시 받아, 조 단위로 과제를 수행하는 프로젝트에요. 26기 기준으로 큐시즘은 3개의 기업과 5개의 과제로 팀이 구성되었어요."
  
  const [isMeetupSelected, setIsMeetupSelected] = useState(true);
  const selectedColors = ["#0055FF","#62EFE5", "#2F3038"];
  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMeetupSelected(!isMeetupSelected);
  };


  /* 필터링 디폴트값: 최신순 */
  const [isNewestSelected, setIsNewestSelected] = useState(true);
  const filterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsNewestSelected(!isNewestSelected);
  };

  const [meetupList, setMeetupList] = useState<IMeetupProject[]>([]);
  const [meetupCount, setMeetupCount] = useState(0);

  const [corporateList, setCorporateList] = useState<ICompanyProject[]>([]);
  const [corporateCount, setCorporateCount] = useState(0);

  useEffect(() => {
    const meetup: Promise<any> = ProjectsAPI.getMeetupList();
    meetup.then((data: IMeetupList) => {
      setMeetupCount(data.meetup_count);
      setMeetupList([...data.meetup_list])
      console.log({meetupList});
    });

    const corporate: Promise<any> = ProjectsAPI.getCorporateList();
    corporate.then((data: ICompanyList) => {
      setCorporateCount(data.corporateCount);
      setCorporateList([...data.corporateList]);
      console.log({corporateList});
    });
  }, []);

  return (
    <Layout>
      <s.Wrapper>
        <s.ProjectIntroContainer>
          <s.ProjectIntroText>{ProjectIntroText}</s.ProjectIntroText>
          <s.ProjectIntroSubText>
            { isMeetupSelected ? <s.ProjectNumText>{meetupCount}</s.ProjectNumText> : <s.ProjectNumText>{corporateCount}</s.ProjectNumText>}
            {ProjectIntroSubText}
            </s.ProjectIntroSubText>
        </s.ProjectIntroContainer>

        <s.SelectBox>
          {
            isMeetupSelected ? 
            <s.SelectBoxItem color={selectedColors[0]} onClick={selectHandler}>밋업데이</s.SelectBoxItem> :
            <s.SelectBoxItem color={selectedColors[2]} onClick={selectHandler}>밋업데이</s.SelectBoxItem>
          }

          {
            isMeetupSelected ? 
            <s.SelectBoxItem color={selectedColors[2]} onClick={selectHandler}>기업 프로젝트</s.SelectBoxItem> :
            <s.SelectBoxItem color={selectedColors[1]} about={"black"} onClick={selectHandler}>기업 프로젝트</s.SelectBoxItem>
          }
        </s.SelectBox>

        {
          isMeetupSelected ?
          <s.EventContainer>
            <s.EventIntroContainer>
              <ImageSticker isMeetupSelected={isMeetupSelected} meetupImgURL={meetup_tmpImg} companyImgURL={company_tmpImg}/>

              <s.IntroText>
                <s.IntroTitleWrapper>
                  <s.IntroTitle>{MeetupIntroTitle}</s.IntroTitle>
                  <MeetupHighlightIcon />
                </s.IntroTitleWrapper>

                <s.IntroDetail>{MeetupIntroDetail}</s.IntroDetail>

                <MeetupIcons />
              </s.IntroText>
            </s.EventIntroContainer>

            <s.ProjectsWrapper>
              <s.ProjectFilterWrapper>
                <s.ProjectFilterContainer>
                  <s.ProjectFilterItem aria-checked={isNewestSelected} onClick={filterHandler}>최신순</s.ProjectFilterItem> 
                  <s.ProjectFilterItem aria-checked={!isNewestSelected} onClick={filterHandler}>오래된 순</s.ProjectFilterItem>
                </s.ProjectFilterContainer>
              </s.ProjectFilterWrapper>

              <s.ProjectListWrapper>
                {
                  meetupList.map((d, i) => {
                    return <MeetupProjectCard meetup_id={d.meetup_id} poster_url={d.poster_url} logo_url={d.logo_url} cardinal={d.cardinal} name={d.name} one_line_intro={d.one_line_intro} instagram_url={d.instagram_url} github_url={d.github_url} app_url={d.app_url}/>
                  })
                }

              </s.ProjectListWrapper>
            </s.ProjectsWrapper>
          </s.EventContainer> :

          <s.EventContainer>
            <s.EventIntroContainer>
              <ImageSticker isMeetupSelected={isMeetupSelected} meetupImgURL={meetup_tmpImg} companyImgURL={company_tmpImg}/>

              <s.IntroText>
                <s.IntroTitleWrapper>
                  <s.IntroTitle>{CompanyIntroTitle}</s.IntroTitle>
                  <CompanyHighlightIcon />
                </s.IntroTitleWrapper>

                <s.IntroDetail>{CompanyIntroDetail}</s.IntroDetail>

                <CompanyIcons />
              </s.IntroText>
            </s.EventIntroContainer>

            <s.ProjectsWrapper>
              <s.ProjectFilterWrapper>
                <s.ProjectFilterContainer>
                  <s.ProjectFilterItem aria-checked={isNewestSelected} onClick={filterHandler}>최신순</s.ProjectFilterItem> 
                  <s.ProjectFilterItem aria-checked={!isNewestSelected} onClick={filterHandler}>오래된 순</s.ProjectFilterItem>
                </s.ProjectFilterContainer>
              </s.ProjectFilterWrapper>

              <s.ProjectListWrapper>
                {
                  corporateList.map((d, i) => {
                    return <CompanyProjectCard corporate_id={d.corporate_id} banner_url={d.banner_url} logo_url={d.logo_url} cardinal={d.cardinal} name={d.name} content={d.content} category={d.category} />
                  })
                }
              </s.ProjectListWrapper>
            </s.ProjectsWrapper>

          </s.EventContainer>
        }
        
      </s.Wrapper>
    </Layout>
  );
};

export default ProjectsPage;
