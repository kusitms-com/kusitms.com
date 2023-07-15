/* eslint-disable */
import * as s from './styles';
import LinkIcon from "../../images/common/LinkIcon.svg";

const Banner = () => {
  const onClickBtn = () => {
    window.open(
      process.env.REACT_APP_KUSITMS_28TH_ALRAM_URL,
      "_blank"
    );
  };

  return (
    <s.Wrapper>
      <s.ContentBox>
        <s.GuideMent>KUSITMS 28기 학회원 모집 중</s.GuideMent>
        <s.LinkBtn onClick={onClickBtn}>
          지원 하기
          <s.Linkicon src={LinkIcon} alt='link' />
        </s.LinkBtn>
      </s.ContentBox>
    </s.Wrapper>
  )
};

export default Banner;
