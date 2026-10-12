import Image from "next/image";
import Link from "next/link";
import Button from "@/components/mentoring/Button";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Image src="/mentoring/icons/CheckCircleIcon.svg" alt="" width={48} height={48} />
      <h1 className="text-label-normal text-mobile-24sb pt-4 pb-5 text-center">
        가입 신청이<span className="hidden min-[450px]:inline"> </span>
        <br className="min-[450px]:hidden" />
        완료되었어요
      </h1>
      <h2 className="text-body-16m text-label-light pb-8.5 text-center whitespace-nowrap">
        관리자 확인 후 승인이 완료되면
        <br className="min-[450px]:hidden" />
        <span className="hidden min-[450px]:inline"> </span>
        가입하신 이메일로 안내 드려요.
        <br />
        승인까지 보통 1~2일이 소요돼요
      </h2>
      <Link href="/">
        <Button size="xl" variant="strong" className="w-40 mb-4">
          홈페이지 이동
        </Button>
      </Link>
      <p className="text-label-alternative text-label-14r">문의: kusitms@gmail.com</p>
    </div>
  );
};

export default page;
