/* eslint-disable */
import * as s from './styles';
import LinkIcon from "../../images/common/LinkIcon.svg";

const Banner = () => {
  const onClickBtn = () => {
    window.open(
      "https://forms.gle/ssoBW9swWhqr2rhs6",
      "_blank"
    );
  };

  return (
    <s.Wrapper>
      <s.ContentBox>
        <s.GuideMent>KUSITMS 29기 운영진 리크루팅 중</s.GuideMent>
        <s.LinkBtn onClick={onClickBtn}>
          지원 바로가기
          <s.Linkicon src={LinkIcon} alt='link' />
        </s.LinkBtn>
      </s.ContentBox>
    </s.Wrapper>
  )
};

export default Banner;
