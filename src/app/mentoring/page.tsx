import { Favicon128, FooterDesktopLogo } from "@kusitms.com/icons";
import { Label } from "@kusitms.com/ui";
import Button from "@/components/mentoring/Button";
import InputField from "@/components/mentoring/InputField";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Favicon128 width={128} height={128} />
      <div className="flex items-center flex-col gap-4 pb-[33px]">
        <FooterDesktopLogo viewBox="0 0 121.794 35" width={121.794} height={35} />
        <Label className="!self-center lg:!w-auto lg:!h-auto !px-3">멘토링 서비스</Label>
      </div>
      <div className="flex w-full flex-col gap-5">
        <InputField label="아이디" type="id" placeholder="아이디를 입력해주세요" />
        <InputField label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <Button className="text-black">button</Button>
    </div>
  );
};

export default page;
