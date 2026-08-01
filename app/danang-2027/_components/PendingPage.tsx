import Link from "next/link";
import TripHeader from "./TripHeader";

type PendingPageProps = {
  active: "itinerary" | "activities" | "checklist";
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  locale?: "ko" | "en";
};

export default function PendingPage({ active, eyebrow, title, description, items, locale = "ko" }: PendingPageProps) {
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <main className="trip-page pending-page">
      <TripHeader active={active} locale={locale} />
      <section className="site-shell pending-hero">
        <span className="status-badge ready">{english ? "Coming soon" : "준비 중"}</span>
        <p className="overline">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="pending-list">
          {items.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
        </div>
        <div className="pending-action">
          <p>{english ? "We will complete this page for family review after choosing the stay." : "숙소를 먼저 확정한 뒤 이 페이지를 가족 검토용으로 채웁니다."}</p>
          <Link className="primary-link" href={`${base}stays/`}>{english ? "Back to stay review →" : "숙소 검토로 돌아가기 →"}</Link>
        </div>
      </section>
      <footer className="trip-footer site-shell"><Link href={base}>{english ? "← Trip home" : "← 여행 홈"}</Link><span>{english ? "Content in progress" : "내용 준비 중"}</span></footer>
    </main>
  );
}
