/* eslint-disable */
import * as s from "./styles";
import {ReactComponent as CompanyProjectSticker} from "../../images/projects/sticker/CompanyProjectSticker.svg";
import tmpImg from "../../images/projects/tmp/tmpImg.png";

const ImageSticker = () => {
  return (
    <s.Wrapper>
      <s.StickerWrapper>
        <CompanyProjectSticker />
      </s.StickerWrapper>

      <s.ImgWrapper>
        <s.ImgContent src={tmpImg} />
      </s.ImgWrapper>
    </s.Wrapper>
  )
};

export default ImageSticker;
