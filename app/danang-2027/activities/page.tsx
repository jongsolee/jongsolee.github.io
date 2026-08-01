import type { Metadata } from "next";
import PendingPage from "../_components/PendingPage";

export const metadata: Metadata = { title: "다낭 액티비티" };

export default function ActivitiesPage() {
  return <PendingPage active="activities" eyebrow="ACTIVITIES" title="가족 액티비티" description="아이들이 좋아할 것과 어른들이 쉬고 싶은 시간을 분리해, 꼭 할 것만 남깁니다." items={["리조트 안에서 할 수 있는 프로그램", "만 6세 아이가 즐길 수 있는 물놀이", "바나힐·호이안·오행산 비교", "마사지·식사·쇼핑 후보"]} />;
}
