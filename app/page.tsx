import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jongsolee Pages",
  description: "가족과 함께 검토하고 정리하는 페이지 모음",
};

export default function PageHub() {
  return (
    <main className="pages-home">
      <header className="pages-header site-shell">
        <strong>JONGSOLEE PAGES</strong>
        <span>가족과 함께 보는 페이지 모음</span>
      </header>

      <section className="pages-intro site-shell">
        <p className="overline">PERSONAL WEB COLLECTION</p>
        <h1>필요한 자료를<br />한곳에서 같이 봅니다.</h1>
        <p>
          여행 준비와 비교 자료를 주제별로 나누고, 결정이 바뀌면 계속 업데이트합니다.
        </p>
      </section>

      <section className="site-shell pages-list" aria-labelledby="pages-title">
        <div className="section-title-row">
          <h2 id="pages-title">진행 중인 페이지</h2>
          <span>1개</span>
        </div>

        <Link className="travel-project-card" href="/danang-2027/">
          <div className="travel-project-image">
            <img
              src="https://dmaevvtdousx6.cloudfront.net/uploads/2018/08/1b.1.jpg"
              alt="다낭 오션 빌라 3베드룸 풀빌라"
            />
            <span>검토 중</span>
          </div>
          <div className="travel-project-copy">
            <p className="overline">FAMILY TRIP · FEB 2027</p>
            <h2>2027 설<br />다낭 가족여행</h2>
            <p>
              숙소, 일정, 액티비티와 준비물을 각각 나눠 가족이 함께 검토하는 여행 허브입니다.
            </p>
            <dl>
              <div><dt>기간</dt><dd>2027. 2. 4–8 · 4박</dd></div>
              <div><dt>인원</dt><dd>성인 5 · 6세 어린이 2</dd></div>
              <div><dt>현재</dt><dd>숙소 후보 검토 중</dd></div>
            </dl>
            <span className="text-link">여행 준비실 열기 →</span>
          </div>
        </Link>
      </section>

      <footer className="pages-footer site-shell">
        <span>jongsolee.github.io</span>
        <span>내용은 검토 과정에서 계속 바뀝니다.</span>
      </footer>
    </main>
  );
}
