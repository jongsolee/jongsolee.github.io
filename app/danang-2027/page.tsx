import type { Metadata } from "next";
import Link from "next/link";
import TripHeader from "./_components/TripHeader";

export const metadata: Metadata = {
  title: "2027 설 다낭 가족여행",
  description: "숙소, 일정, 액티비티와 준비물을 가족이 함께 검토하는 여행 준비실",
};

const sections = [
  {
    href: "/danang-2027/stays/",
    label: "숙소",
    status: "검토 중",
    statusTone: "review",
    title: "풀빌라 후보와 최종 3선",
    description: "후보 6곳의 실제 가격·객실·후기·리조트 인프라를 같은 기준으로 비교합니다.",
    meta: "최종 1순위 · The Ocean Villas",
  },
  {
    href: "/danang-2027/stays-b/",
    label: "숙소 B안",
    status: "신규 검토",
    statusTone: "review",
    title: "리조트 2박 + 풀빌라 2박",
    description: "A팀 선입실과 B팀 금요일 합류를 반영해 리조트 방 2개를 2박 쓰고 풀빌라로 옮기는 조합을 비교합니다.",
    meta: "현재 1순위 · Meliá + The Ocean Villas",
  },
  {
    href: "/danang-2027/itinerary/",
    label: "일정",
    status: "준비 중",
    statusTone: "ready",
    title: "4박 5일 일정",
    description: "숙소가 확정된 뒤 이동 시간을 줄이는 방향으로 하루씩 조정합니다.",
    meta: "숙소 확정 후 작성",
  },
  {
    href: "/danang-2027/activities/",
    label: "액티비티",
    status: "준비 중",
    statusTone: "ready",
    title: "아이·어른이 함께할 것",
    description: "바나힐, 호이안, 마사지, 물놀이를 체력과 날씨 기준으로 추립니다.",
    meta: "후보 수집 예정",
  },
  {
    href: "/danang-2027/checklist/",
    label: "준비물",
    status: "준비 중",
    statusTone: "ready",
    title: "예약과 출발 체크리스트",
    description: "여권부터 어린이 물놀이 용품까지 담당자와 완료 여부를 정리합니다.",
    meta: "예약 후 공동 업데이트",
  },
];

export default function DanangTripHome() {
  return (
    <main className="trip-page">
      <TripHeader active="home" />

      <section className="trip-home-hero site-shell">
        <div>
          <div className="status-line">
            <span className="status-badge review">가족 검토용</span>
            <span>마지막 업데이트 · 2026. 8. 2</span>
          </div>
          <p className="overline">DA NANG · SEOLLAL 2027</p>
          <h1>숙소부터 정하고,<br />여행을 이어갑니다.</h1>
          <p className="lead">
            아직 확정본이 아닙니다. 가족이 같은 자료를 보고 의견을 모을 수 있도록 숙소와
            일정, 액티비티, 준비물을 페이지별로 나눴습니다.
          </p>
        </div>
        <dl className="trip-summary">
          <div><dt>숙박</dt><dd>2027. 2. 4(목)–8(월)</dd><span>4박 · 체크아웃 2월 8일</span></div>
          <div><dt>가족</dt><dd>성인 5명 · 어린이 2명</dd><span>어린이 만 6세</span></div>
          <div><dt>숙소 예산</dt><dd>150만 원 전후</dd><span>상한 200만 원 · 특가 대기 가능</span></div>
          <div><dt>숙소 조건</dt><dd>3베드룸 풀빌라 우선</dd><span>깨끗함 · 버기 · 리조트 시설</span></div>
        </dl>
      </section>

      <section className="site-shell latest-decision">
        <div className="latest-image">
          <img
            src="https://dmaevvtdousx6.cloudfront.net/uploads/2018/08/1b.1.jpg"
            alt="The Ocean Villas 3베드룸 풀빌라"
          />
        </div>
        <div className="latest-copy">
          <p className="overline">LATEST DECISION</p>
          <span className="status-badge review">숙소 검토 중</span>
          <h2>현재 1순위는<br />The Ocean Villas입니다.</h2>
          <p>
            정확한 일정으로 확인된 3베드룸 풀빌라 중, 전용 풀과 리조트 시설을 유지하면서
            예산에 가장 가까웠습니다. 세금 포함 표시가 약 208만 원이라 특가 목표를 200만 원
            이하로 잡았습니다.
          </p>
          <Link className="primary-link" href="/danang-2027/stays/">숙소 비교 전체 보기 →</Link>
        </div>
      </section>

      <section className="site-shell trip-sections" aria-labelledby="trip-sections-title">
        <div className="section-title-row">
          <h2 id="trip-sections-title">여행 준비 페이지</h2>
          <span>숙소부터 순서대로 진행</span>
        </div>
        <div className="trip-section-grid">
          {sections.map((section) => (
            <Link className="trip-section-card" href={section.href} key={section.href}>
              <div className="trip-section-top">
                <span>{section.label}</span>
                <span className={`status-badge ${section.statusTone}`}>{section.status}</span>
              </div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <small>{section.meta}</small>
            </Link>
          ))}
        </div>
      </section>

      <footer className="trip-footer site-shell">
        <Link href="/">← 전체 페이지</Link>
        <span>가족 의견과 새 가격이 확인되면 계속 업데이트합니다.</span>
      </footer>
    </main>
  );
}
