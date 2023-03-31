/* eslint-disable */
import * as s from "./styles";
import { ReactComponent as MobileCompanyProjectSticker } from "../../images/projects/sticker/MobileCompanyProjectSticker.svg";
import { ReactComponent as MobileMeetupSticker } from "../../images/projects/sticker/MobileMeetupSticker.svg";
import { IStickerProps } from "pages/Projects/ProjectsPage";

const M_ImageSticker = ({
  isMeetupSelected,
  companyImgURL,
  meetupImgURL,
}: IStickerProps) => {
  return (
    <s.Wrapper>
      <s.StickerWrapper>
        {isMeetupSelected ? <MobileMeetupSticker /> : <MobileCompanyProjectSticker />}
      </s.StickerWrapper>

      <s.ImgWrapper>
        {isMeetupSelected ? (
          <s.ImgContent src={meetupImgURL} />
        ) : (
          <s.ImgContent src={companyImgURL} />
        )}
      </s.ImgWrapper>
    </s.Wrapper>
  );
};

export default M_ImageSticker;
