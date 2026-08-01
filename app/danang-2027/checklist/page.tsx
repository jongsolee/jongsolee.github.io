import type { Metadata } from "next";
import PendingPage from "../_components/PendingPage";

export const metadata: Metadata = { title: "다낭 여행 준비물" };

export default function ChecklistPage() {
  return <PendingPage active="checklist" eyebrow="CHECKLIST" title="예약·준비물 체크" description="누가 무엇을 챙기는지 정하고, 출발 전 휴대폰으로 빠르게 확인하는 목록입니다." items={["여권·항공권·숙소 바우처", "어린이 물놀이·상비약", "환전·카드·eSIM·Grab", "공항 이동·여행자 보험"]} />;
}
