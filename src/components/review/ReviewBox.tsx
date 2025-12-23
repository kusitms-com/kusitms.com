import type { Review } from "@/service/reviews";

export default function ReviewBox(props: Review) {
  return (
    <div className="p-5 bg-dark-blue-50 rounded-[16px]">
      <h3 className="text-body-3 text-gray-900 mb-1">{props.name}</h3>
      <h4 className="text-body-8 tablet:mb-5 mb-3 text-dark-blue-500">{props.team}</h4>
      <p className="text-body-8 text-gray-700">{props.review}</p>
    </div>
  );
}
