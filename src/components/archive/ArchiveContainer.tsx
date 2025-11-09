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
              <p className="text-body-1 font-bold mb-[10px] text-gray-700">{item.title}</p>
              <p className="text-gray-500 text-body-8 mb-9">{item.description}</p>
              <Image
                src={item.src}
                alt={item.alt}
                priority
                width={368}
                height={245}
                className={"rounded-[16px] min-w-[368px] min-h-[245px]"}
              />
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </main>
  );
}
