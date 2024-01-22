/* eslint-disable */
import * as s from "./styles";
import LinkIcon from "../../images/common/LinkIcon.svg";

const Banner = () => {
  const onClickBtn = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfVjXycd48Ugg-Yjb9Srj5yZQU7hSTE575CncXCQqtRVJZh-Q/viewform",
      "_blank"
    );
  };

  return (
    <s.Wrapper>
      <s.ContentBox>
        <s.GuideMent>KUSITMS 29기 학회원 리크루팅 중</s.GuideMent>
        <s.LinkBtn onClick={onClickBtn}>
          지원 바로가기
          <s.Linkicon src={LinkIcon} alt="link" />
        </s.LinkBtn>
      </s.ContentBox>
    </s.Wrapper>
  );
};

export default Banner;
