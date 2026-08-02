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
    label: "숙소 A안",
    status: "한 곳 집중",
    statusTone: "review",
    title: "풀빌라 한 곳에서 4박",
    description: "짐 이동 없이 3베드룸과 전용 풀을 온전히 누리는 가장 편안한 안입니다.",
    meta: "안별 1순위 · The Ocean Villas · 약 200만 원",
  },
  {
    href: "/danang-2027/stays-b/",
    label: "숙소 B안",
    status: "휴양 전환",
    statusTone: "review",
    title: "리조트 2박 + 풀빌라 2박",
    description: "A팀 선입실과 B팀 금요일 합류를 반영해 리조트 방 2개를 2박 쓰고 풀빌라로 옮기는 조합을 비교합니다.",
    meta: "안별 1순위 · Meliá + The Ocean Villas · 164–176만 원",
  },
  {
    href: "/danang-2027/stays-c/",
    label: "숙소 C안",
    status: "이동 최소",
    statusTone: "review",
    title: "리조트 한 곳에서 4박",
    description: "방 2개를 4박 유지하면서 이동 없이 리조트 자체를 여행처럼 누릴 후보를 비교합니다.",
    meta: "안별 1순위 · New World Hoiana · 특가 176–184만 원",
  },
  {
    href: "/danang-2027/stays-d/",
    label: "숙소 D안",
    status: "종합 1순위",
    statusTone: "available",
    title: "로컬 시내 2박 + 풀빌라 2박",
    description: "앞 2박은 시장·카페·한강 생활권, 뒤 2박은 3베드룸 전용 풀로 여행의 온도를 바꿉니다.",
    meta: "종합 1순위 · Cozy + The Ocean Villas · 149–170만 원",
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
          <div><dt>선택 기준</dt><dd>어른과 아이 모두 기억할 변화</dd><span>깨끗함 · 로컬 경험 · 풀빌라 힐링</span></div>
        </dl>
      </section>

      <section className="site-shell latest-decision">
        <div className="latest-image">
          <img
            src="/danang-2027/stays-d/cozy-1.jpg"
            alt="다낭 시내의 Cozy Danang Boutique Hotel"
          />
        </div>
        <div className="latest-copy">
          <p className="overline">LATEST DECISION</p>
          <span className="status-badge available">종합 1순위 · D안</span>
          <h2>앞은 다낭답게,<br />뒤는 확실히 쉽니다.</h2>
          <p>
            4박을 한 숙소에서 보내면 편하지만 장면이 반복될 수 있습니다. D안은 Cozy에서 시장·카페·한강을
            걸어서 누린 뒤 The Ocean Villas로 옮겨, 성인은 로컬과 휴식을 모두 얻고 아이는 여행이 한 번 더
            시작되는 느낌을 받습니다. 예상 숙박비도 149–170만 원으로 가장 균형이 좋습니다.
          </p>
          <Link className="primary-link" href="/danang-2027/stays-d/">D안 상세 검토 →</Link>
        </div>
      </section>

      <section className="site-shell plan-overview" aria-labelledby="plan-overview-title">
        <div className="section-title-row"><div><p className="overline">A–D AT A GLANCE</p><h2 id="plan-overview-title">네 안은 장점이 서로 다릅니다.</h2></div><span>현재 가족 의견까지 반영한 판단</span></div>
        <div className="plan-overview-grid">
          <Link href="/danang-2027/stays/"><b>A</b><h3>가장 편안함</h3><p>짐 이동 0회 · 전용 풀 4박</p><small>단점 · 장면이 반복될 수 있음</small></Link>
          <Link href="/danang-2027/stays-b/"><b>B</b><h3>리조트도 풀빌라도</h3><p>시설형 리조트 2박 · 사적 휴양 2박</p><small>단점 · 앞 2박도 휴양지라 대비는 중간</small></Link>
          <Link href="/danang-2027/stays-c/"><b>C</b><h3>가장 안정적</h3><p>좋은 리조트 한 곳 · 방 2개 유지</p><small>단점 · 프라이버시와 변화가 적음</small></Link>
          <Link className="recommended" href="/danang-2027/stays-d/"><b>D</b><h3>가장 다채로움</h3><p>로컬 생활 2박 · 풀빌라 힐링 2박</p><small>종합 1순위 · 어른과 아이의 기억 균형</small></Link>
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
