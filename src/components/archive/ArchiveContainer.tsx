import Image from "next/image";
import { TIMELINE_DATA } from "@/constants/timeLineData";
import TimelineContainer from "./interaction/TimelineContainer";
import TimelineHeader from "./interaction/TimelineHeader";
import TimelineItem from "./interaction/TimelineItem";

export default function ArchiveContainerPage() {
  return (
    <main>
      <TimelineHeader />
      <TimelineContainer>
        {TIMELINE_DATA.map((item, index) => {
          return (
            <TimelineItem key={index} isLeft={item.isLeft}>
              <p className="desktop:text-body-1 text-body-5 font-bold mb-[10px] text-gray-700">
                {item.title}
              </p>
              <p className="text-gray-500 text-body-8 desktop:mb-9 mb-8">{item.description}</p>
              <Image
                src={item.src}
                alt={item.alt}
                priority
                width={368}
                height={245}
                className={
                  "desktop:rounded-[16px] rounded-[12px] w-[288px] h-[192px] desktop:min-w-[368px] desktop:min-h-[245px]"
                }
              />
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </main>
  );
}
