import type { Metadata } from "next";
import Link from "next/link";
import StayMap from "../_components/StayMap";
import StayPlanTabs from "../_components/StayPlanTabs";
import TripHeader from "../_components/TripHeader";

export const metadata: Metadata = {
  title: "숙소 C안 · 리조트 한 곳에서 4박",
  description: "성인 5명과 6세 여아 2명이 방 2개로 4박할 다낭 리조트 비교",
  openGraph: {
    title: "다낭 2027 숙소 C안 · 리조트 한 곳에서 4박",
    description: "200만 원 안팎에서 리조트 자체가 여행이 되는 후보 비교",
    url: "https://jongsolee.github.io/danang-2027/stays-c/",
    images: [{
      url: "https://jongsolee.github.io/danang-plan-c-og.png",
      width: 1731,
      height: 909,
      alt: "다낭 2027 숙소 C안: 리조트 한 곳에서 4박",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "다낭 2027 숙소 C안",
    description: "리조트 한 곳 · 방 2개 · 4박",
    images: ["https://jongsolee.github.io/danang-plan-c-og.png"],
  },
};

type Locale = "ko" | "en";
type Localized = { ko: string; en: string };

const candidates = [
  {
    rank: 1,
    score: 95,
    name: "New World Hoiana Beach Resort",
    badge: { ko: "특가 전제 1순위", en: "No. 1 with a deal" },
    price: { ko: "객실 1개·1박 목표 22–23만 원", en: "Target KRW 220–230K per room, per night" },
    reference: {
      ko: "2026년 8월 공개 세금 포함 참고가 약 25만 원 · 방 2개를 4박 쓰면 약 203만 원",
      en: "Aug 2026 public tax-inclusive reference about KRW 250K · roughly KRW 2.03M for two rooms over four nights",
    },
    fit: {
      ko: "대형 복합 리조트를 오가는 셔틀·버기 감각, 가족 풀·워터슬라이드·키즈클럽이 C안의 취지에 가장 정확히 맞습니다.",
      en: "Its large integrated campus, shuttle-and-buggy feel, family pool, waterslides and kids club best match the purpose of Plan C.",
    },
    facts: {
      ko: ["4km 해변 리조트 단지", "가족 풀·워터슬라이드", "키즈클럽", "호이안 약 15분"],
      en: ["4km beachfront complex", "Family pool and slides", "Kids club", "Hoi An about 15 min"],
    },
    tradeoff: {
      ko: "다낭 시내와 공항은 멉니다. 건물형 객실이라 풀빌라의 프라이버시는 없고, 200만 원을 지키려면 기본 객실료 합계 184만 원 안팎의 특가가 필요합니다.",
      en: "It is far from central Da Nang and uses hotel-style rooms rather than private villas. A base total around KRW 1.84M is needed to protect the KRW 2M budget.",
    },
    images: [
      "/danang-2027/stays-c/hoiana-1.jpg",
      "/danang-2027/stays-c/hoiana-2.jpg",
      "/danang-2027/stays-c/hoiana-3.jpg",
    ],
    official: "https://www.hoiana.com/hotels/new-world-hoiana-beach-resort",
  },
  {
    rank: 2,
    score: 93,
    name: "Shilla Monogram Danang",
    badge: { ko: "완성도 1순위", en: "Best polish" },
    price: { ko: "객실 1개·1박 목표 20–22만 원", en: "Target KRW 200–220K per room, per night" },
    reference: {
      ko: "2026년 8월 공개 세금 포함 참고가 약 22만 원 · 방 2개를 4박 쓰면 약 176만 원",
      en: "Aug 2026 public tax-inclusive reference about KRW 220K · roughly KRW 1.76M for two rooms over four nights",
    },
    fit: {
      ko: "청결·서비스·수영장 관리의 안정감이 강합니다. 한국 가족 후기가 많아 예상 가능한 만족도는 세 후보 중 가장 높습니다.",
      en: "Strong consistency in cleanliness, service and pool upkeep. Extensive Korean-family feedback makes the experience the easiest to predict.",
    },
    facts: {
      ko: ["가족·키즈·인피니티 풀", "데일리 액티비티", "한국어 응대", "깔끔한 객실"],
      en: ["Family, kids and infinity pools", "Daily activities", "Korean-language support", "Polished rooms"],
    },
    tradeoff: {
      ko: "리조트 영역이 비교적 compact하고 건물형 비중이 큽니다. 버기를 타고 단지를 탐험하는 재미는 Hoiana보다 약합니다.",
      en: "The grounds are relatively compact and building-led. It offers less of the roam-the-campus experience than Hoiana.",
    },
    images: [
      "/danang-2027/stays-c/shilla-1.jpg",
      "/danang-2027/stays-c/shilla-2.jpg",
      "/danang-2027/stays-c/shilla-3.jpg",
    ],
    official: "https://www.shillamonogram.com/dnmg/index.do",
  },
  {
    rank: 3,
    score: 91,
    name: "Meliá Danang Beach Resort",
    badge: { ko: "예산 안전 1순위", en: "Safest on budget" },
    price: { ko: "객실 1개·1박 목표 15–18만 원", en: "Target KRW 150–180K per room, per night" },
    reference: {
      ko: "2026년 8월 공개 세금 포함 참고가 약 15–16만 원 · 방 2개를 4박 쓰면 약 120–128만 원",
      en: "Aug 2026 public tax-inclusive reference about KRW 150–160K · roughly KRW 1.20–1.28M for two rooms over four nights",
    },
    fit: {
      ko: "저층 리조트 동선과 7개 야외 풀, 전용 해변을 누리면서 인원 추가비용을 흡수할 예산 여유가 가장 큽니다.",
      en: "Low-rise resort grounds, seven outdoor pools and a private beach leave the largest buffer for occupancy-related charges.",
    },
    facts: {
      ko: ["7개 야외 수영장", "저층 정원형 동선", "키즈클럽", "전용 해변"],
      en: ["7 outdoor pools", "Low-rise garden layout", "Kids club", "Private beach"],
    },
    tradeoff: {
      ko: "하얏트·인터컨티넨탈급의 서비스 밀도와 객실 고급감에는 못 미칩니다. 객실 위치와 관리 상태에 관한 후기 편차가 있습니다.",
      en: "Service density and room luxury sit below Hyatt or InterContinental. Reviews show some variation in room location and upkeep.",
    },
    images: [
      "/danang-2027/stays-b/melia-1.jpg",
      "/danang-2027/stays-b/melia-2.jpg",
      "/danang-2027/stays-b/melia-3.jpg",
    ],
    official: "https://www.melia.com/en/hotels/vietnam/da-nang/melia-danang-beach-resort",
  },
  {
    rank: 4,
    score: 88,
    name: "Sheraton Grand Danang",
    badge: { ko: "수영장 상향안", en: "Pool upgrade" },
    price: { ko: "객실 1개·1박 참고 약 25만 원", en: "Reference about KRW 250K per room, per night" },
    reference: {
      ko: "2026년 공개 세금 포함 참고가 $181 수준 · 방 2개를 4박 쓰면 기본 객실료만 약 199만 원",
      en: "2026 public tax-inclusive reference around USD 181 · about KRW 1.99M for two rooms over four nights before other charges",
    },
    fit: {
      ko: "250m 인피니티풀과 미니 워터파크는 아이 기억에 남을 장면이 분명하고, 남쪽 리조트 벨트의 휴양감도 좋습니다.",
      en: "The 250m infinity pool and mini waterpark create a clear memory for children, with a strong southern-resort atmosphere.",
    },
    facts: {
      ko: ["250m 인피니티풀", "미니 워터파크", "키즈클럽", "전용 해변"],
      en: ["250m infinity pool", "Mini waterpark", "Kids club", "Private beach"],
    },
    tradeoff: {
      ko: "공개 참고가만으로 예산이 거의 찹니다. 최근 객실 관리 상태 평가는 엇갈려, 강한 특가가 아니면 Shilla보다 우선할 이유가 약합니다.",
      en: "The public reference almost consumes the whole budget. Mixed recent upkeep feedback makes it hard to rank above Shilla without a deep discount.",
    },
    images: [
      "/danang-2027/stays-c/sheraton-1.jpg",
      "/danang-2027/stays-c/sheraton-2.jpg",
      "/danang-2027/stays-c/sheraton-3.jpg",
    ],
    official: "https://www.marriott.com/en-us/hotels/dadsi-sheraton-grand-danang-beach-resort-and-spa/experiences/",
  },
  {
    rank: 5,
    score: 86,
    name: "Pullman Danang Beach Resort",
    badge: { ko: "위치 상향안", en: "Location upgrade" },
    price: { ko: "객실 1개·1박 참고 약 28만 원", en: "Reference about KRW 280K per room, per night" },
    reference: {
      ko: "2026년 공개 세금 포함 참고가 $205 수준 · 방 2개를 4박 쓰면 기본 객실료만 약 226만 원",
      en: "2026 public tax-inclusive reference around USD 205 · about KRW 2.26M for two rooms over four nights before other charges",
    },
    fit: {
      ko: "저층 열대 정원, 해변, 인피니티풀을 갖추면서 미케비치와 시내 접근이 후보 중 가장 편합니다.",
      en: "Tropical low-rise grounds, beach and infinity pool combine with the easiest access to My Khe and central Da Nang.",
    },
    facts: {
      ko: ["저층 열대 정원", "키즈클럽", "인피니티풀", "시내 접근 우수"],
      en: ["Low-rise tropical grounds", "Kids club", "Infinity pool", "Best city access"],
    },
    tradeoff: {
      ko: "기본 객실료부터 상한을 넘고, 성인 추가·엑스트라베드 비용도 높은 편입니다. 200만 원 기준에서는 비교 후보에 가깝습니다.",
      en: "The base reference already exceeds the ceiling, and adult or extra-bed charges can be substantial. It remains a benchmark at this budget.",
    },
    images: [
      "/danang-2027/stays-c/pullman-1.jpg",
      "/danang-2027/stays-c/pullman-2.jpg",
      "/danang-2027/stays-c/pullman-3.jpg",
    ],
    official: "https://www.pullman-danang.com/",
  },
] as const;

const finalists = [
  {
    candidate: candidates[0],
    subtitle: { ko: "리조트 자체가 여행이 되는 선택", en: "The resort itself becomes part of the trip" },
    verdict: {
      ko: "이번 가족이 원하는 ‘숙소 안에서 타고, 보고, 놀 거리’를 가장 많이 남깁니다. 다낭 시내 동선보다 숙소 경험을 우선한다면 C안의 최종 선택입니다.",
      en: "It gives this family the strongest sense of riding, exploring and playing within the resort. If the stay matters more than central Da Nang access, this is Plan C's final pick.",
    },
    total: { ko: "특가 목표 176–184만 원", en: "Deal target KRW 1.76–1.84M" },
    math: { ko: "방 2개 · 4박 기본 객실료", en: "Base rate for two rooms over four nights" },
    strengths: {
      ko: ["가족 풀·슬라이드·키즈클럽의 밀도", "넓은 Hoiana 단지를 오가는 재미", "호이안 휴양 동선과 잘 맞음", "최근 가족 후기의 서비스·조식 호평"],
      en: ["Dense mix of family pool, slides and kids club", "Fun of moving around the wider Hoiana complex", "Works well with a Hoi An-focused stay", "Recent family praise for service and breakfast"],
    },
    checks: {
      ko: ["방 2개 총액 184만 원 안팎", "가족형 4인실 + 성인 3인실 조합", "조식·엑스트라베드 포함 최종 200만 원 안팎", "시내 외출을 매일 잡지 않기"],
      en: ["Two-room base total around KRW 1.84M", "One family room for four + one room for three adults", "Final total near KRW 2M after breakfast and extra beds", "Do not plan central Da Nang every day"],
    },
  },
  {
    candidate: candidates[1],
    subtitle: { ko: "깔끔함과 서비스 예측 가능성을 우선", en: "Choose cleanliness and predictable service" },
    verdict: {
      ko: "예산 200만 원을 더 엄격하게 지키면서 객실·수영장·서비스의 완성도를 원하면 가장 합리적입니다. 단지 탐험의 재미는 줄지만 실패 확률도 낮아집니다.",
      en: "The most rational choice when the KRW 2M ceiling is strict and polished rooms, pools and service matter most. Less campus exploration, but lower execution risk.",
    },
    total: { ko: "목표 160–176만 원", en: "Target KRW 1.60–1.76M" },
    math: { ko: "방 2개 · 4박 기본 객실료", en: "Base rate for two rooms over four nights" },
    strengths: {
      ko: ["청결·친절 후기의 높은 일관성", "아이·가족·인피니티 풀 분리", "한국 가족이 쓰기 쉬운 운영", "추가비용을 남길 수 있는 가격선"],
      en: ["Highly consistent cleanliness and service reviews", "Separate kids, family and infinity pools", "Operations well suited to Korean families", "Room to absorb occupancy-related charges"],
    },
    checks: {
      ko: ["건물형 숙소에 대한 가족 선호", "4인·3인 객실 정원과 침대", "씨뷰·패밀리룸 업그레이드 가격", "시내까지 약 25–30분"],
      en: ["Family comfort with a building-led resort", "Room capacity and beds for four and three guests", "Cost of sea-view or family-room upgrades", "About 25–30 min to central Da Nang"],
    },
  },
  {
    candidate: candidates[2],
    subtitle: { ko: "저층 휴양감과 예산 여유를 우선", en: "Choose low-rise resort feel and budget room" },
    verdict: {
      ko: "고급감의 천장은 낮지만 이번 인원 구조에서 가장 편하게 200만 원 안쪽을 지킬 수 있습니다. 객실보다 정원·풀·해변에서 오래 보낼 가족에게 맞습니다.",
      en: "Its luxury ceiling is lower, but it most comfortably protects the budget for this group. Best for a family that will spend more time in gardens, pools and on the beach than in the room.",
    },
    total: { ko: "목표 120–144만 원", en: "Target KRW 1.20–1.44M" },
    math: { ko: "방 2개 · 4박 기본 객실료", en: "Base rate for two rooms over four nights" },
    strengths: {
      ko: ["저층 정원형 리조트 느낌", "7개 풀과 전용 해변", "인원·침대 추가비용 흡수", "A·B안과 비교해도 가장 큰 예산 여유"],
      en: ["Low-rise garden-resort atmosphere", "Seven pools and a private beach", "Best buffer for extra people and beds", "Largest budget cushion across Plans A, B and C"],
    },
    checks: {
      ko: ["최근 객실 관리 상태", "원하는 객실동과 풀 접근", "The Level 선택 시 총액", "조식 혼잡 시간대"],
      en: ["Recent room upkeep", "Preferred building and pool access", "Total if choosing The Level", "Busy breakfast periods"],
    },
  },
] as const;

const locations = [
  { id: "P", name: "Pullman Danang Beach Resort", latitude: 16.0406291, longitude: 108.250121, note: { ko: "시내 접근 1순위", en: "Best city access" }, map: "https://www.google.com/maps/search/?api=1&query=Pullman%20Danang%20Beach%20Resort" },
  { id: "M", name: "Meliá Danang Beach Resort", latitude: 15.99968, longitude: 108.26973, note: { ko: "예산 안전 1순위", en: "Safest on budget" }, map: "https://www.google.com/maps/search/?api=1&query=Melia%20Danang%20Beach%20Resort" },
  { id: "S", name: "Sheraton Grand Danang", latitude: 15.98117, longitude: 108.27853, note: { ko: "수영장 상향안", en: "Pool upgrade" }, map: "https://www.google.com/maps/search/?api=1&query=Sheraton%20Grand%20Danang" },
  { id: "SM", name: "Shilla Monogram Danang", latitude: 15.9629566, longitude: 108.2889999, note: { ko: "완성도 1순위", en: "Best polish" }, map: "https://www.google.com/maps/search/?api=1&query=Shilla%20Monogram%20Danang" },
  { id: "NW", name: "New World Hoiana Beach Resort", latitude: 15.83262, longitude: 108.40669, note: { ko: "C안 최종 1순위", en: "Plan C final pick" }, map: "https://www.google.com/maps/search/?api=1&query=New%20World%20Hoiana%20Beach%20Resort" },
] as const;

const sources = [
  {
    title: { ko: "New World Hoiana", en: "New World Hoiana" },
    links: [
      { label: { ko: "공식 · 가족 풀과 리조트 시설", en: "Official · family pool and resort facilities" }, href: "https://www.hoiana.com/recreation" },
      { label: { ko: "공식 · 키즈클럽 이용 정보", en: "Official · kids club information" }, href: "https://www.hoiana.com/facilities/play-kids-club" },
      { label: { ko: "Tripadvisor · 최근 가족 후기", en: "Tripadvisor · recent family reviews" }, href: "https://www.tripadvisor.co.uk/Hotel_Review-g21138670-d25423585-Reviews-New_World_Hoiana_Beach_Resort-Duy_Hai_Quang_Nam_Province.html" },
      { label: { ko: "Expedia · 공개 가격 참고", en: "Expedia · public price reference" }, href: "https://www.expedia.com/Duy-Xuyen-Hotels-New-World-Hoiana-Beach-Resort.h91445044.Hotel-Information" },
    ],
  },
  {
    title: { ko: "Shilla Monogram", en: "Shilla Monogram" },
    links: [
      { label: { ko: "공식 · 수영장 구성", en: "Official · pool facilities" }, href: "https://www.shillahotels.com/en/shillamonogram/danang/facilities/outdoorPool.do" },
      { label: { ko: "공식 · 데일리 액티비티", en: "Official · daily activities" }, href: "https://www.shillamonogram.com/dnmg/activities/gao/listGao.do" },
      { label: { ko: "Tripadvisor · 최근 한국 가족 후기", en: "Tripadvisor · recent Korean-family reviews" }, href: "https://www.tripadvisor.com/Hotel_Review-g298085-d20100319-Reviews-Shilla_Monogram_Danang-Da_Nang.html" },
      { label: { ko: "Expedia · 공개 가격 참고", en: "Expedia · public price reference" }, href: "https://www.expedia.co.uk/Da-Nang-Hotels-Shilla-Monogram-Quangnam-Danang.h45631547.Hotel-Information" },
    ],
  },
  {
    title: { ko: "Meliá · Sheraton · Pullman", en: "Meliá · Sheraton · Pullman" },
    links: [
      { label: { ko: "Meliá 공식 · 7개 풀과 전용 해변", en: "Meliá official · seven pools and private beach" }, href: "https://www.melia.com/en/hotels/vietnam/da-nang/melia-danang-beach-resort" },
      { label: { ko: "Sheraton 공식 · 250m 풀과 가족 시설", en: "Sheraton official · 250m pool and family facilities" }, href: "https://www.marriott.com/en-us/hotels/dadsi-sheraton-grand-danang-beach-resort-and-spa/experiences/" },
      { label: { ko: "Pullman 공식 · 저층 리조트와 키즈클럽", en: "Pullman official · low-rise resort and kids club" }, href: "https://www.pullman-danang.com/lifestyle/kid-club/" },
    ],
  },
  {
    title: { ko: "품질·가격 기준점", en: "Quality and price benchmarks" },
    links: [
      { label: { ko: "하얏트 공식 · 가족 시설", en: "Hyatt official · family facilities" }, href: "https://www.hyatt.com/hyatt-regency/en-US/danhr-hyatt-regency-danang-resort-and-spa/family-stay-and-activities" },
      { label: { ko: "하얏트 공개 가격 참고", en: "Hyatt public price reference" }, href: "https://www.expedia.com/Da-Nang-Hotels-Hyatt-Regency-Danang-Resort-And-Spa.h4624340.Hotel-Information" },
      { label: { ko: "인터컨티넨탈 공개 가격 참고", en: "InterContinental public price reference" }, href: "https://www.expedia.com/Da-Nang-Hotels-InterContinental-Danang-Sun-Peninsula-Resort.h4583505.Hotel-Information" },
    ],
  },
] as const;

const copy = {
  ko: {
    status: "가족 검토용 C안",
    updated: "조사 기준 · 2026. 8. 2",
    heroFirst: "이동 없이 한 리조트에서,",
    heroSecond: "4박을 여행처럼.",
    heroDesc: "방 2개는 4박 내내 그대로 유지합니다. 하얏트·인터컨티넨탈의 만족감을 기준으로 삼되, 200만 원 안팎에서 아이가 숙소를 기억할 후보를 찾았습니다.",
    heroAlt: "New World Hoiana Beach Resort 가족 수영장",
    verdictBadge: "C안 최종 1순위",
    verdictTitle: "New World Hoiana\nBeach Resort · 4박",
    verdictText: "풀빌라의 프라이버시는 없지만, 넓은 복합 단지와 셔틀·버기 감각, 가족 풀·슬라이드·키즈클럽이 이번 가족이 원하는 ‘리조트 안의 작은 여행’에 가장 가깝습니다.",
    verdictPrice: "기본 객실료 특가 목표 176–184만 원",
    verdictNote: "방 2개를 4박 · 조식·인원·침대 조건을 더한 최종 총액은 200만 원 안팎으로 판단",
    ruleTitle: "이 가격선을 넘으면 2순위로 전환",
    rules: [
      ["New World", "방 2개·4박 기본 객실료 184만 원 안팎"],
      ["최종 총액", "조식·성인 추가·엑스트라베드 포함 200만 원 안팎"],
      ["대체 선택", "조건을 넘으면 Shilla Monogram을 우선 비교"],
    ],
    benchmarkTitle: "반얀트리·하얏트의 무엇을 남길 것인가",
    benchmarkDesc: "브랜드 이름이 아니라 실제 만족도를 만드는 요소를 기준으로 C안을 골랐습니다.",
    benchmark: [
      ["01", "리조트 안의 이동", "방–풀–해변–키즈 시설을 오가는 과정 자체가 아이에게 장면이 되는가"],
      ["02", "정돈된 서비스", "객실·조식·수영장 관리와 직원 응대가 4박 내내 안정적인가"],
      ["03", "가족이 흩어질 여유", "어른은 쉬고 아이는 놀 수 있는 공간이 충분히 분리되어 있는가"],
      ["04", "숙소의 기억", "시내 관광을 줄여도 ‘여기 와서 좋았다’는 느낌이 남는가"],
    ],
    towerNote: "솔직한 한계 · 200만 원에 인터컨티넨탈의 독립 빌라·산비탈 규모를 그대로 재현할 수는 없습니다. C안은 프라이버시보다 리조트 단지와 시설 경험을 남기는 선택입니다.",
    roomTitle: "방은 2개, 목요일부터 월요일까지 그대로",
    roomDesc: "A팀이 먼저 들어오고 B팀이 금요일 합류하지만 세 번째 방을 만들지 않습니다. 아래는 비교를 위한 권장 배치이며, 실제 침대 구성에 맞춰 가족끼리 바꿀 수 있습니다.",
    budgetTitle: "200만 원을 지키는 계산",
    budgetDesc: "기본 객실료를 낮게 잡아야 금요일부터 늘어나는 인원·침대·조식 조건을 흡수할 수 있습니다.",
    candidateTitle: "5개 리조트 후보",
    candidateDesc: "하얏트·인터컨티넨탈과 얼마나 비슷한지가 아니라, 이번 인원과 예산에서 실제 만족도가 얼마나 남는지로 점수를 매겼습니다.",
    photo: "실제 숙소 사진 · 공식 사이트",
    tradeoff: "선택 전에 볼 점",
    official: "공식 정보 보기 →",
    finalistTitle: "최종 3선",
    finalistDesc: "1순위는 리조트 경험, 2순위는 완성도, 3순위는 예산 안정성으로 성격이 분명히 다릅니다.",
    strengths: "선정 이유",
    checks: "결제 전 확인할 조건",
    locationTitle: "위치는 숙소 선택의 다음 기준",
    locationDesc: "숙소 경험을 먼저 평가한 뒤, 다낭 시내와 호이안 중 어느 쪽을 더 자주 갈지로 마지막 순서를 조정합니다.",
    mapOpen: "지도 열기 ↗",
    mapNote: "위치는 숙소 간 거리 감각을 보기 위한 표시입니다. 실제 차량 시간은 설 연휴 교통에 따라 달라질 수 있습니다.",
    mapAria: "다낭 숙소 C안 리조트 후보 위치 지도",
    flowTitle: "4박 동안 숙소를 이렇게 씁니다",
    flowDesc: "동선표가 아니라 C안을 골랐을 때 숙소 경험이 어떻게 이어지는지 보여주는 참고 흐름입니다.",
    sourceTitle: "검토 근거",
    sourceDesc: "공식 시설, 최근 가족 후기, 2026년 8월 공개 가격을 나눠 확인했습니다.",
    disclaimer: "가격은 2026년 8월 공개 비교가를 원화로 환산한 참고치이며 2027년 설 실제 결제가는 달라질 수 있습니다. 같은 객실명과 취소 조건으로 세금, 조식, 성인 추가, 어린이·엑스트라베드 비용을 모두 합친 최종 총액을 비교해야 합니다.",
    finalTitle: "C안 안에서는 New World Hoiana입니다",
    finalDesc: "200만 원을 조금 넘나드는 경계선이지만 ‘아이들이 리조트 자체를 기억하는 경험’을 C안 후보 중 가장 잘 만듭니다. 기본 객실료가 184만 원 안팎으로 내려오지 않으면 Shilla Monogram으로 바꾸고, 한 숙소 4박의 반복감이 더 걱정되면 종합 1순위 D안을 선택하는 것이 맞습니다.",
    bLink: "D안과 비교하기",
    home: "← 여행 홈",
    footer: "가격과 객실 조건은 결제 직전에 다시 확인합니다.",
  },
  en: {
    status: "Plan C for family review",
    updated: "Research snapshot · Aug 2, 2026",
    heroFirst: "Stay in one resort,",
    heroSecond: "make all four nights part of the trip.",
    heroDesc: "The same two rooms remain for all four nights. Hyatt and InterContinental set the experience benchmark; the goal is a memorable family resort near KRW 2M.",
    heroAlt: "Family pool at New World Hoiana Beach Resort",
    verdictBadge: "Plan C final pick",
    verdictTitle: "New World Hoiana\nBeach Resort · 4 nights",
    verdictText: "It lacks a private villa, but the broad integrated complex, shuttle-and-buggy feel, family pool, slides and kids club come closest to the family's idea of a small journey within the resort.",
    verdictPrice: "Base-rate deal target KRW 1.76–1.84M",
    verdictNote: "Two rooms for four nights · aim for a final total near KRW 2M after breakfast, occupancy and bed terms",
    ruleTitle: "Switch to No. 2 above these lines",
    rules: [
      ["New World", "Base rate around KRW 1.84M for two rooms over four nights"],
      ["Final total", "Near KRW 2M after breakfast, adult and extra-bed charges"],
      ["Fallback", "Compare Shilla Monogram first when these limits are exceeded"],
    ],
    benchmarkTitle: "What to preserve from Banyan Tree and Hyatt",
    benchmarkDesc: "Plan C is judged by the things that create satisfaction, not simply by the brand name.",
    benchmark: [
      ["01", "Movement inside the resort", "Do the routes between rooms, pools, beach and kids facilities become memorable scenes?"],
      ["02", "Polished service", "Will room, breakfast, pool upkeep and staff service remain consistent for four nights?"],
      ["03", "Space to spread out", "Can adults rest while children play in clearly separated areas?"],
      ["04", "A memorable stay", "Will it still feel special even if the family reduces city sightseeing?"],
    ],
    towerNote: "Honest limit · KRW 2M cannot reproduce InterContinental's private villas and hillside scale. Plan C trades privacy for the experience of a larger resort campus and facilities.",
    roomTitle: "Keep the same two rooms from Thursday to Monday",
    roomDesc: "Team A arrives first and Team B joins Friday, but no third room is added. This is a suggested comparison layout and can be adjusted around the actual bed setup.",
    budgetTitle: "How to protect the KRW 2M ceiling",
    budgetDesc: "The base rate must stay low enough to absorb added occupancy, beds and breakfast from Friday onward.",
    candidateTitle: "Five resort candidates",
    candidateDesc: "Scores reflect the experience left within this group's budget, not simple similarity to Hyatt or InterContinental.",
    photo: "Actual property photos · official sites",
    tradeoff: "What to consider",
    official: "Open official information →",
    finalistTitle: "Final three",
    finalistDesc: "No. 1 prioritises the resort experience, No. 2 polish, and No. 3 budget resilience.",
    strengths: "Why it was selected",
    checks: "Terms to verify before payment",
    locationTitle: "Location comes after the stay itself",
    locationDesc: "Evaluate the property experience first, then adjust the order based on whether central Da Nang or Hoi An matters more.",
    mapOpen: "Open map ↗",
    mapNote: "Pins show the relative geography. Driving time can change during the holiday period.",
    mapAria: "Map of resort candidates for Da Nang stay Plan C",
    flowTitle: "How four resort nights would feel",
    flowDesc: "This is not the main itinerary; it simply shows how the resort experience could build over the stay.",
    sourceTitle: "Evidence library",
    sourceDesc: "Official facilities, recent family reviews and Aug 2026 public prices were checked separately.",
    disclaimer: "Prices are reference figures converted from public comparisons checked in Aug 2026; the final Lunar New Year 2027 price can differ. Compare the same room and cancellation terms, then include tax, breakfast, additional adults, child terms and extra beds in the final total.",
    finalTitle: "Within Plan C, choose New World Hoiana",
    finalDesc: "It sits near the budget edge, but best creates the core Plan C experience: children remembering the resort itself. Switch to Shilla Monogram if the base total does not fall near KRW 1.84M; choose overall No. 1 Plan D if four similar nights are the bigger concern.",
    bLink: "Compare Plan D",
    home: "← Trip home",
    footer: "Reconfirm prices and room terms immediately before payment.",
  },
} as const;

function localize(value: Localized, locale: Locale) {
  return value[locale];
}

export function StaysCPageContent({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <main className="trip-page stays-c-page" lang={locale}>
      <TripHeader active="stays" locale={locale} languageSegment="stays-c/" />
      <StayPlanTabs active="c" locale={locale} />

      <section className="stays-hero stays-c-hero">
        <img src="/danang-2027/stays-c/hoiana-2.jpg" alt={c.heroAlt} />
        <div className="stays-hero-overlay" />
        <div className="site-shell stays-hero-copy">
          <div className="status-line light-line"><span className="status-badge review">{c.status}</span><span>{c.updated}</span></div>
          <p className="overline">STAY PLAN C · ONE RESORT · FOUR NIGHTS</p>
          <h1>{c.heroFirst}<br />{c.heroSecond}</h1>
          <p>{c.heroDesc}</p>
        </div>
      </section>

      <section className="site-shell b-verdict-panel">
        <div className="b-verdict-copy">
          <p className="overline">CURRENT RECOMMENDATION</p>
          <span className="status-badge available">{c.verdictBadge}</span>
          <h2>{c.verdictTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{c.verdictText}</p>
          <div className="verdict-price"><strong>{c.verdictPrice}</strong><span>{c.verdictNote}</span></div>
        </div>
        <div className="b-budget-rules">
          <h3>{c.ruleTitle}</h3>
          {c.rules.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><p><b>{title}</b>{description}</p></div>)}
        </div>
      </section>

      <section className="site-shell banyan-standard c-benchmark-section">
        <div className="section-heading compact"><p className="overline">EXPERIENCE BENCHMARK</p><h2>{c.benchmarkTitle}</h2><p>{c.benchmarkDesc}</p></div>
        <div className="banyan-standard-grid">
          {c.benchmark.map(([number, title, description]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}
        </div>
        <p className="tower-note">{c.towerNote}</p>
      </section>

      <section className="site-shell b-team-section">
        <div className="section-heading compact"><p className="overline">TWO ROOMS · FOUR NIGHTS</p><h2>{c.roomTitle}</h2><p>{c.roomDesc}</p></div>
        <div className="b-team-grid c-room-grid">
          <article>
            <span>THU · TEAM A</span>
            <h3>{english ? "Mother in one room, couple in the other" : "장모님 1실 · 처제 부부 1실"}</h3>
            <p>{english ? "Three adults check in first. Both rooms stay under the same four-night booking." : "성인 3명이 먼저 체크인합니다. 두 객실 모두 월요일까지 같은 4박 조건으로 유지합니다."}</p>
            <b>{english ? "2 rooms remain fixed" : "방 2개 그대로 유지"}</b>
          </article>
          <article>
            <span>FRI–MON · ROOM A</span>
            <h3>{english ? "Suggested: 2 adults + 2 children" : "권장안 · 성인 2명 + 어린이 2명"}</h3>
            <p>{english ? "Use a family-capable room with suitable beds or a child-bed setup." : "4인이 편하게 잘 수 있는 패밀리형 객실이나 어린이 침대 구성을 비교합니다."}</p>
            <b>{english ? "Family-capable room" : "4인 가족 수용 객실"}</b>
          </article>
          <article className="accent">
            <span>FRI–MON · ROOM B</span>
            <h3>{english ? "Suggested: 3 adults" : "권장안 · 성인 3명"}</h3>
            <p>{english ? "Use a triple-capable room with a proper third bed. The exact family split can change later." : "성인용 세 번째 침대가 들어가는 객실을 비교합니다. 실제 가족 배치는 나중에 바꿔도 됩니다."}</p>
            <b>{english ? "Triple-capable room" : "성인 3인 수용 객실"}</b>
          </article>
        </div>
      </section>

      <section className="b-budget-section">
        <div className="site-shell">
          <div className="section-heading compact"><p className="overline">BUDGET GUARDRAIL</p><h2>{c.budgetTitle}</h2><p>{c.budgetDesc}</p></div>
          <div className="b-budget-math">
            <div><span>01</span><small>{english ? "Base room rate" : "기본 객실료"}</small><strong>{english ? "≤ KRW 220–230K" : "방 1개·1박 22–23만"}</strong><p>{english ? "Average per room, per night" : "객실 1개·1박 평균"}</p></div>
            <i>×</i>
            <div><span>02</span><small>{english ? "Stay structure" : "숙박 구성"}</small><strong>{english ? "2 rooms · 4 nights" : "방 2개 · 4박"}</strong><p>{english ? "Same rooms throughout" : "목요일부터 월요일까지"}</p></div>
            <i>→</i>
            <div className="total"><span>03</span><small>{english ? "Final ceiling" : "최종 상한"}</small><strong>{english ? "Near KRW 2M" : "200만 원 안팎"}</strong><p>{english ? "Include occupancy, beds and breakfast" : "인원·침대·조식 포함"}</p></div>
          </div>
        </div>
      </section>

      <section className="site-shell b-resort-section">
        <div className="section-heading compact"><p className="overline">RESORT SHORTLIST</p><h2>{c.candidateTitle}</h2><p>{c.candidateDesc}</p></div>
        <div className="b-resort-grid c-resort-grid">
          {candidates.map((resort) => (
            <article className="b-resort-card" key={resort.name}>
              <div className="candidate-gallery">
                {resort.images.map((src, index) => <div className="candidate-image" key={src}><img src={src} alt={`${resort.name} ${index + 1}`} loading="lazy" decoding="async" /></div>)}
                <span className={`status-badge ${resort.rank <= 2 ? "available" : resort.rank === 3 ? "watch" : "ready"}`}>{localize(resort.badge, locale)}</span>
                <b>{resort.rank}</b><small>{c.photo}</small>
              </div>
              <div className="candidate-copy">
                <div className="score-line"><span>PLAN C SCORE</span><strong>{resort.score}</strong><small>/100</small></div>
                <h3>{resort.name}</h3>
                <p className="candidate-price">{localize(resort.price, locale)}</p>
                <small>{localize(resort.reference, locale)}</small>
                <p className="candidate-fit">{localize(resort.fit, locale)}</p>
                <div className="tag-list">{resort.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div>
                <p className="b-risk"><b>{c.tradeoff}</b>{localize(resort.tradeoff, locale)}</p>
                <a className="text-link" href={resort.official} target="_blank" rel="noreferrer">{c.official}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="b-pairing-section c-finalist-section">
        <div className="site-shell">
          <div className="section-heading compact"><p className="overline">FINAL THREE</p><h2>{c.finalistTitle}</h2><p>{c.finalistDesc}</p></div>
          <div className="b-pairing-list">
            {finalists.map((finalist, index) => (
              <article className="finalist-card" key={finalist.candidate.name}>
                <div className="finalist-header">
                  <div className="finalist-rank"><span>0{index + 1}</span><b>FINALIST</b></div>
                  <div className="finalist-title"><h3>{finalist.candidate.name}</h3><p>{localize(finalist.subtitle, locale)}</p></div>
                  <div className="finalist-score"><strong>{finalist.candidate.score}</strong><span>/100</span></div>
                </div>
                <div className="photo-grid">{finalist.candidate.images.map((src, imageIndex) => <img src={src} alt={`${finalist.candidate.name} ${imageIndex + 1}`} loading="lazy" decoding="async" key={src} />)}<span>{c.photo}</span></div>
                <div className="finalist-verdict"><p>{localize(finalist.verdict, locale)}</p><div><strong>{localize(finalist.total, locale)}</strong><span>{localize(finalist.math, locale)}</span></div></div>
                <div className="finalist-info-grid b-pairing-info">
                  <div><h4>{c.strengths}</h4><ul className="positive-list">{finalist.strengths[locale].map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>{c.checks}</h4><ul className="risk-list">{finalist.checks[locale].map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell location-section">
        <div className="section-heading compact"><p className="overline">LOCATION</p><h2>{c.locationTitle}</h2><p>{c.locationDesc}</p></div>
        <div className="location-layout">
          <StayMap locations={locations} label={c.mapAria} />
          <div className="location-list">
            {locations.map((location) => <a href={location.map} target="_blank" rel="noreferrer" key={location.id}><span>{location.id}</span><div><b>{location.name}</b><small>{localize(location.note, locale)}</small></div><i>{c.mapOpen}</i></a>)}
          </div>
        </div>
        <p className="map-note">{c.mapNote}</p>
      </section>

      <section className="b-schedule-section">
        <div className="site-shell b-schedule-layout">
          <div className="section-heading inverse"><p className="overline">FOUR-NIGHT RESORT FLOW</p><h2>{c.flowTitle}</h2><p>{c.flowDesc}</p></div>
          <ol className="b-schedule-list">
            <li><span>THU · 2/4</span><p><b>{english ? "Team A settles into two rooms" : "A팀이 방 2개에 먼저 적응"}</b>{english ? "Keep dinner light and learn the nearest pool, beach and breakfast routes." : "가볍게 저녁을 먹고 객실에서 가까운 풀·해변·조식 동선만 익힙니다."}</p></li>
            <li><span>FRI · 2/5</span><p><b>{english ? "Team B joins the resort day" : "B팀 합류 뒤 리조트 온전한 하루"}</b>{english ? "Redistribute seven guests across the same two rooms, then prioritise pools and kids facilities." : "7명이 같은 두 객실로 나눠 들어가고, 수영장과 키즈 시설을 우선합니다."}</p></li>
            <li><span>SAT · 2/6</span><p><b>{english ? "Explore beyond the nearest pool" : "숙소 안에서 다른 장면 찾기"}</b>{english ? "Use another pool zone, beach activity or resort programme instead of repeating Friday." : "금요일과 다른 풀 구역·해변 활동·리조트 프로그램을 골라 숙소를 넓게 씁니다."}</p></li>
            <li><span>SUN · 2/7</span><p><b>{english ? "One optional half-day outside" : "선택형 반나절 외출"}</b>{english ? "Choose Hoi An from Hoiana, or central Da Nang from Pullman; keep the other half at the resort." : "Hoiana면 호이안, Pullman이면 다낭 시내처럼 숙소 위치에 맞춰 반나절만 다녀옵니다."}</p></li>
            <li><span>MON · 2/8</span><p><b>{english ? "Calm breakfast and checkout" : "여유 있게 조식 후 체크아웃"}</b>{english ? "No accommodation move means the final morning stays simple." : "숙소 이동이 없으므로 마지막 아침까지 짐과 체력을 아낄 수 있습니다."}</p></li>
          </ol>
        </div>
      </section>

      <section className="site-shell evidence-library">
        <div className="section-heading compact"><p className="overline">SOURCES</p><h2>{c.sourceTitle}</h2><p>{c.sourceDesc}</p></div>
        <div className="evidence-grid">
          {sources.map((group) => <article key={group.title.ko}><h3>{localize(group.title, locale)}</h3>{group.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}><span>{localize(link.label, locale)}</span><b>↗</b></a>)}</article>)}
        </div>
        <p className="research-disclaimer">{c.disclaimer}</p>
      </section>

      <section className="site-shell b-final-callout">
        <div><p className="overline">BOTTOM LINE</p><h2>{c.finalTitle}</h2><p>{c.finalDesc}</p></div>
        <Link className="secondary-link" href={`${base}stays-d/`}>{c.bLink}</Link>
      </section>

      <footer className="trip-footer site-shell"><Link href={base}>{c.home}</Link><span>{c.footer}</span></footer>
    </main>
  );
}

export default function StaysCPage() {
  return <StaysCPageContent locale="ko" />;
}
