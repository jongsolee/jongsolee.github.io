import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2027 설 다낭 풀빌라 최종 3선",
  description:
    "성인 5명과 6세 어린이 2명을 위한 3박 4일 다낭 풀빌라 비교 리포트",
};

const stays = [
  {
    rank: "01",
    badge: "숙소 최우선 정답",
    name: "Fusion Resort & Villas Da Nang",
    room: "Three-Bedroom Pool Villa",
    image:
      "https://fusionresorts.com/danang/wp-content/uploads/2024/07/Three-Bedroom-Ocean-Premium-Pool-Villa-4-2-scaled.jpg",
    imageSource: "Fusion 공식",
    imageLink:
      "https://fusionresorts.com/danang/accomodation/three-bedroom-pool-villa/",
    score: "9.4",
    review: "Booking 9.6 · 청결 9.8",
    tone: "best",
    summary:
      "세 곳 중 반얀트리에서 느낀 ‘새것의 쾌적함 + 빌라 프라이버시 + 리조트 서비스’에 가장 가깝습니다.",
    facts: [
      "2024년 오픈 · 370–431㎡ · 침실 3 · 전용 수영장",
      "기본 구성 2 King + 2 Twin — 가족별 방 배치가 가장 편함",
      "대형 인피니티풀·비치풀·키즈클럽·스파, 단지 내 이동 서비스",
    ],
    why: [
      "최근 오픈이라 객실·욕실·공용부 컨디션 리스크가 가장 낮음",
      "실투숙 평가에서 청결·안락함·시설이 모두 9.8 이상",
      "2월에 전용풀이 차가워도 공용 시설과 실내 웰니스 공간이 보완",
    ],
    caution:
      "2026 공개 참고가는 3BR 약 26.2M VND/박이며 휴일 할증이 별도라, 2027 Tet 3박은 200만원을 크게 넘을 가능성이 높습니다. 7번째 투숙객의 엑스트라베드·조식 조건도 확인해야 합니다.",
    source:
      "https://www.booking.com/reviews/vn/hotel/fusion-resort-and-villas-da-nang.html",
    sourceLabel: "검증 후기",
    priceSource: "https://en.tgroup.vn/hotel/fusion-resort-villas-da-nang",
  },
  {
    rank: "02",
    badge: "리조트 완성도",
    name: "Danang Marriott Resort & Spa",
    room: "Three-Bedroom Private Pool Villa",
    image:
      "https://cache.marriott.com/is/image/marriotts7prod/mc-dadmr-villa-07599-20807%3AWide-Hor?fit=constrain&wid=1200",
    imageSource: "Marriott 공식",
    imageLink:
      "https://www.marriott.com/en-us/hotels/dadmr-danang-marriott-resort-and-spa/rooms/pool-villas/",
    score: "9.0",
    review: "Booking 9.1 · 시설 9.4",
    tone: "strong",
    summary:
      "빌라 안에만 갇히지 않고 대형 리조트의 수영장·해변·키즈 시설을 안정적으로 누리는 선택입니다.",
    facts: [
      "575㎡ · 침실 3 · 전용 수영장 · 넓은 거실과 다이닝",
      "기본 구성 2 King + 2 Twin — 성인 5명 배치가 편안함",
      "넓은 공용 수영장군·전용 해변·키즈 시설·풀서비스 다이닝",
    ],
    why: [
      "세대가 섞인 7명이 각자 시간을 보내기 좋은 공용 인프라",
      "국제 체인 운영의 서비스 표준과 넓은 빌라 면적",
      "‘풀빌라 + 제대로 된 리조트’라는 요청에 가장 정석적으로 부합",
    ],
    caution:
      "Fusion보다 객실 연식 편차가 있고 일부 후기에는 유지보수 언급이 있습니다. 2027 설 3BR 공식 총액은 아직 확인되지 않았으며 200만원 이내 가능성은 낮게 봐야 합니다.",
    source:
      "https://www.booking.com/reviews/vn/hotel/da-nang-marriott-resort.html",
    sourceLabel: "검증 후기",
    priceSource:
      "https://www.marriott.com/en-us/hotels/dadmr-danang-marriott-resort-and-spa/rooms/pool-villas/",
  },
  {
    rank: "03",
    badge: "현실적 절충",
    name: "Premier Village Danang Resort",
    room: "Three-Bedroom Garden View Pool Villa",
    image:
      "https://media.vogue.com.tw/photos/5e0af9563226d20008f16097/master/w_1024%2Cc_limit/10-2.%2520Premier%2520Village%2520Danang%2520Resort%2520Managed%2520By%2520AccorHotels%25EF%25BC%2588%25E5%25B3%25B4%25E6%25B8%25AF%25E9%259B%2585%25E9%25AB%2598%25E5%25B0%258A%25E8%25B2%25B4%25E5%25BA%25A6%25E5%2581%2587%25E6%259D%2591%25EF%25BC%2589-2%25E3%2580%2582%28%25E5%259C%2596%25E7%2589%2587%25E7%2594%25B1Booking.com%25E6%258F%2590%25E4%25BE%259B%29.jpg",
    imageSource: "Booking 제공 · Vogue 게재",
    imageLink:
      "https://www.vogue.com.tw/lifestyle/galerie/%E8%B6%8A%E5%8D%97-%E5%B3%B4%E6%B8%AF-%E6%B8%A1%E5%81%87%E6%9D%91",
    score: "8.4",
    review: "Tripadvisor 4.9/5",
    tone: "value",
    summary:
      "반얀트리급 새 리조트는 아니지만, 전용풀·버기·해변·다이닝을 갖춘 3BR 중 예산 타협 가능성이 가장 큽니다.",
    facts: [
      "약 300㎡ · 침실 3 · 전용 수영장 · 전 객실 빌라형",
      "가든뷰를 우선 탐색 — 오션 액세스보다 예산 방어에 유리",
      "버기·공용풀·전용 해변·레스토랑·키즈 프로그램",
    ],
    why: [
      "7명이 한 공간에 머무는 가족여행 구조가 검증됨",
      "전용풀과 리조트 인프라를 포기하지 않는 최소 절충선",
      "환불 가능 특가가 뜰 경우 200만원대 초반 접근 가능성",
    ],
    caution:
      "숙소 연식과 빌라 배정에 따른 컨디션 편차가 핵심 약점입니다. 지하층 냄새·환기·에어컨·수리 이력을 사전 확인하고, ‘높고 통풍 좋은 빌라’를 요청해야 합니다. 참고 평균가는 3BR $555/박 수준으로, Tet에는 상한 초과 가능성이 큽니다.",
    source:
      "https://www.tripadvisor.com/Hotel_Review-g298085-d6370235-Reviews-Premier_Village_Danang_Resort-Da_Nang.html",
    sourceLabel: "최근 후기",
    priceSource:
      "https://vietnamresorts.com/resort/premier-village-danang-resort-managed-by-accor",
  },
];

const routes = [
  {
    day: "DAY 1",
    title: "리조트에 들어가서, 나오지 않기",
    detail:
      "공항 픽업 → 체크인 → 빌라·메인풀 → 리조트 저녁. 첫날부터 관광을 넣지 않습니다.",
  },
  {
    day: "DAY 2",
    title: "낮까지 숙소, 오후만 회안",
    detail:
      "늦은 아침·키즈클럽·수영 → 15:00 오행산 → 17:30 회안 올드타운 → 21:00 복귀.",
  },
  {
    day: "DAY 3",
    title: "숙소를 여행의 중심으로",
    detail:
      "하루 종일 빌라·해변·스파. 원하면 저녁에만 미케비치·한강 식사 2–3시간.",
  },
  {
    day: "DAY 4",
    title: "마지막 수영 후 공항",
    detail:
      "조식 → 수영·사진 → 체크아웃 → 공항. 비행 시간이 늦으면 레이트 체크아웃을 우선 협상합니다.",
  },
];

const sourceLinks = [
  ["2027 설 날짜", "https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431"],
  ["다낭 2월 기후", "https://danang.gov.vn/web/eng-dng/w/location-and-natural-conditions"],
  ["Fusion 3BR 공식", "https://fusionresorts.com/danang/accomodation/three-bedroom-pool-villa/"],
  ["Fusion 시설", "https://fusionresorts.com/danang/ko/%ED%8A%B9%EC%A7%95/"],
  ["Marriott 3BR 공식", "https://www.marriott.com/en-us/hotels/dadmr-danang-marriott-resort-and-spa/rooms/pool-villas/"],
  ["Premier 실숙박 후기", "https://iam-jerry.tistory.com/163"],
  ["Premier 객실·시설", "https://www.agoda.com/premier-village-danang-resort-managed-by-accor-hotels/hotel/da-nang-vn.html"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/" aria-label="전체 페이지로">
          JONGSOLEE <span>/ DA NANG 2027</span>
        </Link>
        <nav aria-label="리포트 목차">
          <a href="#verdict">최종 결론</a>
          <a href="#compare">숙소 3선</a>
          <a href="#route">참고 동선</a>
          <a href="#checklist">예약 체크</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-copy page-shell">
          <p className="eyebrow">FAMILY VILLA REPORT · 2027 SEOLLAL</p>
          <h1>
            관광보다 숙소.
            <br />
            <em>잘 머무는</em> 다낭 3박 4일
          </h1>
          <p className="hero-summary">
            성인 5명 · 6세 여아 2명 · 침실 3개 · 프라이빗 풀 · 버기와 리조트 인프라.
            반얀트리에서 느꼈던 만족도를 기준으로 3곳만 남겼습니다.
          </p>
          <div className="trip-facts" aria-label="여행 조건">
            <span>2027. 2. 6–9</span>
            <span>3박 4일</span>
            <span>5 ADULTS + 2 KIDS</span>
            <span>목표 150만 · 상한 200만</span>
          </div>
        </div>
      </section>

      <section className="verdict page-shell" id="verdict">
        <div className="section-heading">
          <p className="section-index">00 / VERDICT</p>
          <h2>제일 좋은 곳은 Fusion입니다.</h2>
          <p>
            숙소 만족도를 최우선으로 하면 결론은 명확합니다. 다만 숙소 등급과 설 연휴 가격을
            함께 보면, 현재 예산으로는 같은 결론을 살 수 없습니다.
          </p>
        </div>

        <div className="verdict-grid">
          <article className="winner-card">
            <div>
              <span className="pill light">OVERALL BEST</span>
              <h3>Fusion Resort & Villas</h3>
              <p>
                신축 컨디션, 프라이빗 3BR, 공용 수영장과 키즈·웰니스까지. 세 곳 중 ‘굳이
                밖으로 나갈 필요 없는 숙소’에 가장 가깝습니다.
              </p>
            </div>
            <div className="winner-score">
              <strong>9.4</strong>
              <span>숙소 중심 평가</span>
            </div>
          </article>

          <article className="budget-truth">
            <span className="pill dark">BUDGET REALITY</span>
            <h3>200만 원은 ‘특가 탐색선’이지 확정 가능한 예산이 아닙니다.</h3>
            <p>
              2027년 한국 설 연휴는 베트남 Tet과 겹치는 성수기입니다. 3BR 풀빌라·7인·3박을
              세금, 조식, 어린이 비용까지 200만 원 안에 맞추면서 반얀트리급 컨디션까지 얻는
              조합은 현실적으로 매우 희박합니다.
            </p>
            <div className="budget-options">
              <span><b>숙소 우선</b> Fusion 견적 후 예산 상향 판단</span>
              <span><b>상한 우선</b> Premier 환불 가능 특가만 추적</span>
            </div>
          </article>
        </div>

        <div className="weighting">
          <div><span>50%</span><p>객실·청결·신축도</p></div>
          <div><span>25%</span><p>프라이버시·리조트 완성도</p></div>
          <div><span>15%</span><p>7인 가족 적합성</p></div>
          <div><span>10%</span><p>예산 현실성</p></div>
        </div>
        <p className="weight-note">관광 위치는 순위 점수에서 제외하고, 숙소 선정 후 참고 정보로만 붙였습니다.</p>
      </section>

      <section className="compare-section" id="compare">
        <div className="page-shell">
          <div className="section-heading split">
            <div>
              <p className="section-index">01 / FINAL THREE</p>
              <h2>최종 제안 3곳</h2>
            </div>
            <p>표시 점수는 공식 등급이 아니라, 공개 정보와 실투숙 후기를 위 기준으로 재평가한 편집 점수입니다.</p>
          </div>

          <div className="stay-list">
            {stays.map((stay) => (
              <article className={`stay-card ${stay.tone}`} key={stay.rank}>
                <div className="stay-visual">
                  <img src={stay.image} alt={`${stay.name} 실제 숙소 사진`} />
                  <div className="rank">{stay.rank}</div>
                  <a href={stay.imageLink} target="_blank" rel="noreferrer" className="photo-credit">
                    실제 이미지 · {stay.imageSource} ↗
                  </a>
                </div>

                <div className="stay-main">
                  <div className="stay-topline">
                    <span className="pill">{stay.badge}</span>
                    <div className="editor-score"><b>{stay.score}</b><span>/ 10</span></div>
                  </div>
                  <h3>{stay.name}</h3>
                  <p className="room-name">추천 객실 · {stay.room}</p>
                  <p className="stay-summary">{stay.summary}</p>

                  <div className="stay-columns">
                    <div>
                      <h4>확인된 구성</h4>
                      <ul>{stay.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                    </div>
                    <div>
                      <h4>선정한 이유</h4>
                      <ul>{stay.why.map((reason) => <li key={reason}>{reason}</li>)}</ul>
                    </div>
                  </div>

                  <div className="caution">
                    <span>결정 전 확인</span>
                    <p>{stay.caution}</p>
                  </div>

                  <div className="stay-footer">
                    <span>{stay.review}</span>
                    <div>
                      <a href={stay.source} target="_blank" rel="noreferrer">{stay.sourceLabel} ↗</a>
                      <a href={stay.priceSource} target="_blank" rel="noreferrer">가격 근거 ↗</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="matrix page-shell">
        <div className="section-heading">
          <p className="section-index">02 / ONE-GLANCE</p>
          <h2>한눈에 비교</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>숙소</th>
                <th>컨디션</th>
                <th>리조트 체감</th>
                <th>7인 적합</th>
                <th>예산 적합</th>
                <th>한 줄 판단</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Fusion</th><td><b>최상</b><small>2024 오픈</small></td><td><b>최상</b><small>웰니스·키즈·대형풀</small></td><td><b>상</b><small>7번째 인원 확인</small></td><td className="bad"><b>매우 낮음</b><small>상한 크게 초과</small></td><td>돈보다 숙소면 1위</td>
              </tr>
              <tr>
                <th>Marriott</th><td><b>상</b><small>일부 연식 편차</small></td><td><b>최상</b><small>대형 풀서비스</small></td><td><b>상</b><small>575㎡, 추가 인원 확인</small></td><td className="bad"><b>낮음</b><small>공식 견적 필요</small></td><td>가족형 정석 리조트</td>
              </tr>
              <tr>
                <th>Premier</th><td><b>중상</b><small>빌라 배정 편차</small></td><td><b>상</b><small>버기·해변·다이닝</small></td><td><b>최상</b><small>가족 단체에 익숙</small></td><td className="maybe"><b>조건부</b><small>특가여도 초과 가능</small></td><td>예산과 품질의 절충</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="weather-band">
        <div className="page-shell weather-grid">
          <div>
            <p className="section-index">BEFORE YOU BOOK</p>
            <h2>2월의 전용풀은 ‘보기 좋은 풀’이 될 수 있습니다.</h2>
          </div>
          <div>
            <p>
              다낭의 12–2월 최저 기온은 대체로 18–23°C입니다. 태국·코타키나발루에서 경험한
              따뜻한 수영장 만족도를 그대로 기대하면 안 됩니다. 전용풀 온수 여부를 반드시
              서면 확인하고, 온수가 아니면 대형 공용풀·실내 웰니스가 좋은 숙소가 더 유리합니다.
            </p>
            <a href="https://danang.gov.vn/web/eng-dng/w/location-and-natural-conditions" target="_blank" rel="noreferrer">다낭시 기후 자료 ↗</a>
          </div>
        </div>
      </section>

      <section className="route page-shell" id="route">
        <div className="section-heading split">
          <div>
            <p className="section-index">03 / OPTIONAL ROUTE</p>
            <h2>숙소를 고른 뒤 붙이는 최소 동선</h2>
          </div>
          <p>숙소 70%, 관광 30%. 3박 4일에 바나힐까지 넣으면 리조트 비용을 내고 리조트를 못 누르게 됩니다.</p>
        </div>

        <div className="route-line">
          {routes.map((route) => (
            <article key={route.day}>
              <span>{route.day}</span>
              <h3>{route.title}</h3>
              <p>{route.detail}</p>
            </article>
          ))}
        </div>

        <details className="drive-times">
          <summary>숙소별 예상 이동시간 보기 <span>참고용</span></summary>
          <div className="drive-grid">
            <div><b>Fusion</b><span>공항 30분</span><span>오행산 10–15분</span><span>회안 25분</span></div>
            <div><b>Marriott</b><span>공항 20–25분</span><span>오행산 5–10분</span><span>회안 30분</span></div>
            <div><b>Premier</b><span>공항 15분</span><span>오행산 10–15분</span><span>회안 30–35분</span></div>
          </div>
          <p>Grab 기준 대략치이며 설·Tet 교통 상황에 따라 늘어날 수 있습니다. 이 시간은 순위 산정에 반영하지 않았습니다.</p>
        </details>
      </section>

      <section className="exclusions page-shell">
        <div className="section-heading">
          <p className="section-index">04 / RED TEAM</p>
          <h2>좋아 보여도 최종 3곳에서 뺀 이유</h2>
        </div>
        <div className="exclude-grid">
          <article><h3>Banyan Tree Lăng Cô</h3><p>감성 기준에는 가장 정확하지만, 다낭 밖 장거리 이동과 3BR·7인 가격이 이번 범위를 크게 벗어납니다.</p></article>
          <article><h3>InterContinental Danang</h3><p>리조트 경험은 최상급이지만 7인이 한 빌라에 머무는 3BR 재고·가격 조건이 맞지 않습니다.</p></article>
          <article><h3>The Ocean Villas</h3><p>가격은 가장 가까울 수 있으나 최근 Booking 8점대와 공용 인프라·관리 편차가 ‘정말 좋아야 한다’는 기준에 못 미칩니다.</p></article>
          <article><h3>Furama Villas</h3><p>입지는 좋지만 연식과 빌라 컨디션 편차 때문에 청결을 최우선으로 둔 이번 순위에서는 제외했습니다.</p></article>
        </div>
      </section>

      <section className="checklist-section" id="checklist">
        <div className="page-shell checklist-grid">
          <div className="section-heading">
            <p className="section-index">05 / BOOKING CHECK</p>
            <h2>예약 화면의 1박 가격보다 중요한 여섯 가지</h2>
            <p>2027 설 요금이 열리면 같은 문장으로 세 곳에 총액 견적을 요청하면 비교가 정확해집니다.</p>
          </div>
          <ol>
            <li><span>01</span><p><b>투숙객을 정확히 입력</b>성인 5명, 만 6세 어린이 2명</p></li>
            <li><span>02</span><p><b>총액으로 회신 요청</b>세금·봉사료·어린이 조식·엑스트라베드·Tet 필수 디너 포함</p></li>
            <li><span>03</span><p><b>침실 3개 전부 개방 확인</b>침대 구성과 잠긴 방 없는지 서면 확인</p></li>
            <li><span>04</span><p><b>수영장 온도 확인</b>전용풀 온수 여부와 2월 평균 수온 질문</p></li>
            <li><span>05</span><p><b>빌라 컨디션 요청</b>최근 보수, 냄새·습기 없음, 높은 층·통풍 좋은 동</p></li>
            <li><span>06</span><p><b>환불 가능으로 선점</b>공식·Booking·Agoda 총액을 다시 비교한 뒤 최종 확정</p></li>
          </ol>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-grid">
          <div>
            <p className="eyebrow">FINAL CALL</p>
            <h2>한 곳만 고른다면 Fusion.</h2>
            <p>견적이 감당 가능한지 먼저 보고, 불가능할 때만 Marriott → Premier 순서로 내려오는 것이 맞습니다.</p>
          </div>
          <div className="sources">
            <h3>검토 근거</h3>
            {sourceLinks.map(([label, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={href}>{label} ↗</a>
            ))}
            <small>가격은 2026년 8월 공개 자료의 참고값입니다. 2027 Tet 총액은 예약 오픈 후 재확인해야 합니다.</small>
          </div>
        </div>
      </footer>
    </main>
  );
}
