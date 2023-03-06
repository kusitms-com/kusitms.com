/* eslint-disable */
import * as s from "./styles";
import {ReactComponent as CompanyProjectSticker} from "../../images/projects/sticker/CompanyProjectSticker.svg";
import {ReactComponent as MeetupSticker} from "../../images/projects/sticker/MeetupSticker.svg";
import { IStickerProps } from "pages/Projects/ProjectsPage";

const ImageSticker = ({isMeetupSelected, companyImgURL, meetupImgURL}: IStickerProps) => {
  return (
    <s.Wrapper>
      <s.StickerWrapper>
        { isMeetupSelected ? <MeetupSticker /> : <CompanyProjectSticker /> }
      </s.StickerWrapper>

      <s.ImgWrapper>
        {isMeetupSelected ? <s.ImgContent src={meetupImgURL} /> : <s.ImgContent src={companyImgURL} />}
      </s.ImgWrapper>
    </s.Wrapper>
  )
};

export default ImageSticker;
