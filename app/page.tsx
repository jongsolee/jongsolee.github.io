import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jongsolee Pages",
  description: "필요할 때 만들고, 꺼내 쓰는 개인 웹페이지 모음",
};

export default function PageHub() {
  return (
    <main className="hub-page">
      <header className="hub-header hub-shell">
        <span className="hub-logo">JONGSOLEE / PAGES</span>
        <span>PERSONAL WEB COLLECTION</span>
      </header>

      <section className="hub-hero hub-shell">
        <div>
          <p className="hub-kicker">A SMALL COLLECTION OF USEFUL PAGES</p>
          <h1>필요할 때 만들고,<br /><em>꺼내 쓰는</em> 페이지들</h1>
        </div>
        <p className="hub-intro">
          여행 비교부터 개인 프로젝트까지, 목적이 분명한 웹페이지를 한곳에 모읍니다.
        </p>
      </section>

      <section className="hub-content hub-shell">
        <div className="hub-section-head">
          <h2>Pages</h2>
          <span>01 page</span>
        </div>

        <a className="project-card" href="/danang-2027/">
          <div className="project-cover">
            <img
              src="https://fusionresorts.com/danang/wp-content/uploads/2024/07/Three-Bedroom-Premium-Pool-Villa-12-scaled.jpg"
              alt="다낭 프라이빗 풀빌라"
            />
            <span className="project-status">DRAFT · REVIEWING</span>
          </div>
          <div className="project-copy">
            <p className="project-type">TRAVEL · FAMILY · COMPARISON REPORT</p>
            <h3>2027 설<br />다낭 풀빌라<br />최종 3선</h3>
            <p>
              성인 5명과 6세 어린이 2명을 위한 숙소 중심 비교. 실제 사진, 가격 현실성,
              리조트 완성도와 최소 동선을 한 페이지에 정리했습니다.
            </p>
            <div className="project-meta">
              <span>3박 4일</span>
              <span>3 BEDROOMS</span>
              <span>PRIVATE POOL</span>
            </div>
            <span className="project-open">페이지 열기 →</span>
          </div>
        </a>

        <p className="hub-empty">새 페이지가 생기면 이곳에 같은 방식으로 추가됩니다.</p>
      </section>

      <footer className="hub-footer hub-shell">
        <span>jongsolee.github.io</span>
        <span>Built for useful decisions.</span>
      </footer>
    </main>
  );
}

