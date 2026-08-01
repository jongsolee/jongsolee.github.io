import type { Metadata } from "next";
import PendingPage from "../_components/PendingPage";

export const metadata: Metadata = { title: "다낭 4박 5일 일정" };

export default function ItineraryPage() {
  return <PendingPage active="itinerary" eyebrow="ITINERARY" title="4박 5일 일정" description="숙소에서 보내는 시간을 충분히 남기고, 아이와 어른 모두 무리하지 않는 리듬으로 구성합니다." items={["도착·출국 항공편 기준 시간표", "숙소 위치에서 실제 이동시간 계산", "호이안·바나힐을 하루 한 곳만", "비 오는 날과 피곤한 날의 대체 일정"]} />;
}
