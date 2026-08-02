import type { Metadata } from "next";
import Link from "next/link";
import StayMap from "../_components/StayMap";
import StayPlanTabs from "../_components/StayPlanTabs";
import TripHeader from "../_components/TripHeader";

export const metadata: Metadata = {
  title: "숙소 D안 · 로컬 시내 2박 + 풀빌라 2박",
  description: "성인 5명과 6세 여아 2명이 다낭 시내를 느낀 뒤 3베드룸 풀빌라에서 쉬는 4박 숙소 비교",
  openGraph: {
    title: "다낭 2027 숙소 D안 · 로컬 2박 + 힐링 2박",
    description: "앞 2박은 다낭 생활권, 뒤 2박은 전용 풀빌라로 나누는 가족 숙소안",
    url: "https://jongsolee.github.io/danang-2027/stays-d/",
    images: [{
      url: "https://jongsolee.github.io/danang-plan-d-og.png",
      width: 1731,
      height: 909,
      alt: "다낭 2027 숙소 D안: 로컬 2박과 풀빌라 힐링 2박",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "다낭 2027 숙소 D안",
    description: "로컬 시내 2박 · 풀빌라 힐링 2박",
    images: ["https://jongsolee.github.io/danang-plan-d-og.png"],
  },
};

type Locale = "ko" | "en";
type Localized = { ko: string; en: string };

const cityHotels = [
  {
    rank: 1,
    score: 95,
    name: "Cozy Danang Boutique Hotel",
    badge: { ko: "D안 최종 1순위", en: "Plan D final pick" },
    price: { ko: "방 2개·2박 목표 45–60만 원", en: "Target KRW 450–600K for two rooms, two nights" },
    reference: {
      ko: "2026년 공개 기본 객실은 세금 포함 약 8–9만 원대부터 · 실제 비교는 패밀리룸과 3인 수용 객실 기준",
      en: "2026 public base rooms start around KRW 80–90K tax-inclusive · compare a family room and a three-adult room for this group",
    },
    fit: {
      ko: "2022년 문을 연 작은 부티크 호텔입니다. 최근 검증 후기 9.2, 청결 9.6이고 4인 패밀리룸이 있어 시내 숙소의 깔끔함과 가족 수용력을 함께 잡습니다.",
      en: "A small boutique hotel opened in 2022. Recent verified reviews score it 9.2 overall and 9.6 for cleanliness, while a four-person family room supports the group setup.",
    },
    facts: {
      ko: ["패밀리룸 최대 4인", "드래곤브리지·참박물관", "한강 산책", "루프톱 풀"],
      en: ["Family room for four", "Dragon Bridge and Cham Museum", "Han River walks", "Rooftop pool"],
    },
    tradeoff: {
      ko: "리조트형 시설은 기대하지 않는 것이 맞고, 일부 후기에 주변 음악 소음이 언급됩니다. 성인 3명 방의 정원과 세 번째 침대 조건은 결제 전에 확인해야 합니다.",
      en: "This is not a full resort, and some reviews mention nearby music noise. Confirm the second room's three-adult capacity and proper third bed before payment.",
    },
    images: ["/danang-2027/stays-d/cozy-1.jpg", "/danang-2027/stays-d/cozy-2.jpg", "/danang-2027/stays-d/cozy-3.jpg"],
    official: "https://www.booking.com/hotel/vn/cozy-da-nang-boutique.html",
  },
  {
    rank: 2,
    score: 93,
    name: "Sanouva Danang Hotel",
    badge: { ko: "시장 생활권 1순위", en: "Best market access" },
    price: { ko: "방 2개·2박 목표 40–55만 원", en: "Target KRW 400–550K for two rooms, two nights" },
    reference: {
      ko: "2026년 공개 기본 객실 세금 포함 약 7만 원대부터 · Deluxe Triple은 더블 1 + 싱글 1",
      en: "2026 public base rooms start around KRW 70K tax-inclusive · Deluxe Triple has one double and one single bed",
    },
    fit: {
      ko: "한시장·다낭대성당·콘시장을 모두 걸어서 연결하기 가장 좋습니다. 성인 3명용 Deluxe Triple이 공식적으로 명확하고 2023년 리노베이션을 마쳤습니다.",
      en: "It best connects Han Market, Da Nang Cathedral and Con Market on foot. The official Deluxe Triple clearly fits three adults, and the hotel was renovated in 2023.",
    },
    facts: {
      ko: ["Deluxe Triple", "한시장·콘시장 도보", "2023 리노베이션", "시내 중심"],
      en: ["Deluxe Triple", "Walk to Han and Con markets", "Renovated in 2023", "True city centre"],
    },
    tradeoff: {
      ko: "외관과 일부 공용부는 Cozy보다 전통적인 도심 호텔 느낌입니다. 4인 가족이 한 방을 쓰는 정확한 객실명과 어린이 침대 조건을 맞춰야 합니다.",
      en: "Its exterior and some common areas feel more like a traditional city hotel than Cozy. Match the four-person family to the exact room and child-bed terms.",
    },
    images: ["/danang-2027/stays-d/sanouva-1.jpg", "/danang-2027/stays-d/sanouva-2.jpg", "/danang-2027/stays-d/sanouva-3.jpg"],
    official: "https://www.sanouvadanang.com/m/en/room-suite.html",
  },
  {
    rank: 3,
    score: 90,
    name: "Vanda Hotel",
    badge: { ko: "드래곤브리지 1순위", en: "Best Dragon Bridge view" },
    price: { ko: "방 2개·2박 목표 45–60만 원", en: "Target KRW 450–600K for two rooms, two nights" },
    reference: {
      ko: "2026년 공개 기본 객실 세금 포함 약 8만 원대부터 · Family Junior Suite는 퀸 1 + 싱글 1",
      en: "2026 public base rooms start around KRW 80K tax-inclusive · Family Junior Suite has one queen and one single bed",
    },
    fit: {
      ko: "드래곤브리지 머리 쪽 바로 앞이라 아이가 밤 풍경을 기억하기 좋고, 참박물관·한강·시내 식당을 걸어서 연결하기 쉽습니다.",
      en: "Directly by the head of Dragon Bridge, it gives the children a memorable night scene and easy walks to the Cham Museum, river and city restaurants.",
    },
    facts: {
      ko: ["드래곤브리지 바로 앞", "Family Junior Suite", "한강 전망", "공항 약 10분"],
      en: ["At Dragon Bridge", "Family Junior Suite", "Han River views", "Airport about 10 min"],
    },
    tradeoff: {
      ko: "대형 도로와 관광 명소 앞이라 Sanouva보다 생활 골목의 분위기는 약합니다. 4인 가족 객실과 성인 3인 객실을 각각 맞추는 조건도 더 까다롭습니다.",
      en: "The arterial-road landmark setting feels less neighbourhood-like than Sanouva. Matching one room for four and another for three adults also needs more care.",
    },
    images: ["/danang-2027/stays-d/vanda-1.jpg", "/danang-2027/stays-d/vanda-2.jpg", "/danang-2027/stays-d/vanda-3.jpg"],
    official: "https://www.vandahotel.vn/rooms/family-junior-suite/",
  },
  {
    rank: 4,
    score: 87,
    name: "Brilliant Hotel",
    badge: { ko: "한강변 상향안", en: "Riverfront upgrade" },
    price: { ko: "방 2개·2박 목표 55–75만 원", en: "Target KRW 550–750K for two rooms, two nights" },
    reference: {
      ko: "2026년 공개 기본 객실 세금 포함 약 10만 원대부터 · 엑스트라베드·조식 추가비가 큰 편",
      en: "2026 public base rooms start around KRW 100K tax-inclusive · extra-bed and breakfast charges are relatively high",
    },
    fit: {
      ko: "한강변 중심에 있어 한시장·대성당·바크당 거리를 가장 편하게 누립니다. 어른이 좋아할 강 전망과 정돈된 호텔 감각이 강점입니다.",
      en: "Its prime riverfront position makes Han Market, the Cathedral and Bach Dang Street effortless. River views and a polished hotel feel appeal to adults.",
    },
    facts: {
      ko: ["바크당 거리", "한시장 바로 옆", "한강 전망", "2베드룸 옵션"],
      en: ["Bach Dang Street", "Beside Han Market", "Han River views", "Two-bedroom options"],
    },
    tradeoff: {
      ko: "로컬 생활보다 관광 중심 한강변 호텔에 가깝고, 인원·침대·조식을 합치면 Cozy와의 가격 차이가 빠르게 커질 수 있습니다.",
      en: "It feels more like a tourist-oriented riverfront hotel than local neighbourhood life, and occupancy, beds and breakfast can quickly widen the price gap with Cozy.",
    },
    images: ["/danang-2027/stays-d/brilliant-1.jpg", "/danang-2027/stays-d/brilliant-2.jpg", "/danang-2027/stays-d/brilliant-3.jpg"],
    official: "https://brillianthotel.vn/en/rooms/",
  },
] as const;

const pairings = [
  {
    hotel: cityHotels[0],
    title: { ko: "깔끔한 로컬 베이스 + 확실한 힐링", en: "Clean local base + complete reset" },
    total: { ko: "목표 149–170만 원", en: "Target KRW 1.49–1.70M" },
    verdict: {
      ko: "D안의 종합 1순위입니다. 시내 숙소의 청결·가족룸·입지를 타협하지 않으면서도 풀빌라 예산을 넉넉히 남깁니다.",
      en: "Plan D's overall No. 1. It protects cleanliness, family-room practicality and location in the city while leaving enough budget for the pool villa.",
    },
    strengths: {
      ko: ["검증 후기 9.2·청결 9.6", "드래곤브리지와 한강 야간 산책", "4인 패밀리룸", "토요일 이동 뒤 분위기가 완전히 바뀜"],
      en: ["Verified 9.2 overall and 9.6 cleanliness", "Dragon Bridge and Han River at night", "Four-person family room", "A complete mood change after Saturday's move"],
    },
    checks: {
      ko: ["성인 3명 방의 정원과 실제 세 번째 침대", "6세 어린이 조식·침대 조건", "거리 쪽 객실의 야간 소음", "Ocean 3BR 2박 총액 110만 원 이하"],
      en: ["Three-adult room capacity and proper third bed", "Breakfast and bed terms for both six-year-olds", "Street-facing room noise", "Ocean 3BR two-night total at or below KRW 1.1M"],
    },
  },
  {
    hotel: cityHotels[1],
    title: { ko: "시장 골목 몰입 + 예산 여유", en: "Deeper market immersion + more budget room" },
    total: { ko: "목표 144–165만 원", en: "Target KRW 1.44–1.65M" },
    verdict: {
      ko: "한시장과 콘시장을 가장 많이 걸을 가족이라면 실제 1순위가 바뀔 수 있습니다. 정확한 Triple 객실과 더 낮은 가격이 강점입니다.",
      en: "This can become No. 1 for a family that plans to walk both Han and Con markets. Its explicit Triple room and lower price are meaningful advantages.",
    },
    strengths: {
      ko: ["시내 핵심 시장을 모두 도보 연결", "공식 Deluxe Triple", "2023 리노베이션", "D안 중 가장 큰 예산 여유"],
      en: ["Walk to both major city markets", "Official Deluxe Triple", "Renovated in 2023", "Largest budget cushion in Plan D"],
    },
    checks: {
      ko: ["4인 가족 객실의 정확한 침대", "객실과 공용부 최신 상태", "아이와 걸을 실제 도보 동선", "수영장보다 시내 경험이 우선인지"],
      en: ["Exact beds in the four-person family room", "Current room and common-area condition", "Real walking routes with children", "Whether city life matters more than the pool"],
    },
  },
  {
    hotel: cityHotels[2],
    title: { ko: "대표 야경 + 풀빌라", en: "Landmark nights + pool villa" },
    total: { ko: "목표 149–170만 원", en: "Target KRW 1.49–1.70M" },
    verdict: {
      ko: "아이에게 드래곤브리지라는 선명한 장면을 남기는 조합입니다. 다만 객실 배정과 생활 골목의 밀도는 앞의 두 후보보다 약합니다.",
      en: "This pairing gives the children one unmistakable city memory: Dragon Bridge. Room matching and neighbourhood depth are weaker than the first two options.",
    },
    strengths: {
      ko: ["아이 눈높이의 대표 야경", "참박물관·한강 접근", "공항과 가까움", "도시와 풀빌라의 대비가 큼"],
      en: ["A landmark night view for children", "Easy Cham Museum and river access", "Close to the airport", "Strong city-to-villa contrast"],
    },
    checks: {
      ko: ["방 2개의 4인·3인 정원", "대형 도로 쪽 소음", "강 전망 업그레이드 비용", "토요일 12시 전후 교통"],
      en: ["Four- and three-person capacity across two rooms", "Arterial-road noise", "River-view upgrade cost", "Saturday midday traffic"],
    },
  },
] as const;

const locations = [
  { id: "C", name: "Cozy Danang Boutique Hotel", latitude: 16.0616, longitude: 108.2217, note: { ko: "D안 종합 1순위", en: "Plan D overall No. 1" }, map: "https://www.google.com/maps/search/?api=1&query=Cozy%20Danang%20Boutique%20Hotel" },
  { id: "S", name: "Sanouva Danang Hotel", latitude: 16.06699, longitude: 108.22014, note: { ko: "시장 생활권 1순위", en: "Best market access" }, map: "https://www.google.com/maps/search/?api=1&query=Sanouva%20Danang%20Hotel" },
  { id: "V", name: "Vanda Hotel", latitude: 16.060793331, longitude: 108.2227681789, note: { ko: "드래곤브리지 1순위", en: "Best Dragon Bridge view" }, map: "https://www.google.com/maps/search/?api=1&query=Vanda%20Hotel%20Da%20Nang" },
  { id: "B", name: "Brilliant Hotel", latitude: 16.066797, longitude: 108.224806, note: { ko: "한강변 상향안", en: "Riverfront upgrade" }, map: "https://www.google.com/maps/search/?api=1&query=Brilliant%20Hotel%20Da%20Nang" },
  { id: "O", name: "The Ocean Villas", latitude: 15.9744903, longitude: 108.2801621, note: { ko: "토·일 3베드룸 풀빌라", en: "Sat–Sun three-bedroom pool villa" }, map: "https://www.google.com/maps/search/?api=1&query=The%20Ocean%20Villas%20Da%20Nang" },
] as const;

const sources = [
  {
    title: { ko: "Cozy Danang", en: "Cozy Danang" },
    links: [
      { label: { ko: "Booking · 최근 검증 후기와 세부 점수", en: "Booking · recent verified reviews and scores" }, href: "https://www.booking.com/reviews/vn/hotel/cozy-da-nang-boutique.en-gb.html" },
      { label: { ko: "Booking · 객실 구성", en: "Booking · room configurations" }, href: "https://www.booking.com/hotel/vn/cozy-da-nang-boutique.html" },
      { label: { ko: "Tripadvisor · 사진과 최근 후기", en: "Tripadvisor · photos and recent reviews" }, href: "https://www.tripadvisor.com/Hotel_Review-g298085-d24102969-Reviews-Cozy_Danang_Boutique_Hotel-Da_Nang.html" },
    ],
  },
  {
    title: { ko: "Sanouva · Vanda · Brilliant", en: "Sanouva · Vanda · Brilliant" },
    links: [
      { label: { ko: "Sanouva 공식 · Deluxe Triple", en: "Sanouva official · Deluxe Triple" }, href: "https://www.sanouvadanang.com/m/en/room-suite.html" },
      { label: { ko: "Vanda 공식 · Family Junior Suite", en: "Vanda official · Family Junior Suite" }, href: "https://www.vandahotel.vn/rooms/family-junior-suite/" },
      { label: { ko: "Brilliant 공식 · 객실 종류", en: "Brilliant official · room types" }, href: "https://brillianthotel.vn/en/rooms/" },
    ],
  },
  {
    title: { ko: "The Ocean Villas", en: "The Ocean Villas" },
    links: [
      { label: { ko: "공식 · 3베드룸 373㎡와 수용 인원", en: "Official · 373㎡ three-bedroom villa and capacity" }, href: "https://theoceanvillas.com.vn/accommodation/three-bedroom-pool-villa/" },
      { label: { ko: "Booking · 최근 검증 후기", en: "Booking · recent verified reviews" }, href: "https://www.booking.com/reviews/vn/hotel/the-ocean-villas.html" },
      { label: { ko: "A안 · 풀빌라 후보 전체 비교", en: "Plan A · full pool-villa comparison" }, href: "/danang-2027/stays/" },
    ],
  },
] as const;

const copy = {
  ko: {
    status: "가족 종합 1순위 D안",
    updated: "조사 기준 · 2026. 8. 2",
    heroAlt: "다낭 시내 부티크 호텔과 풀빌라를 잇는 숙소 D안",
    heroFirst: "앞 2박은 다낭답게,",
    heroSecond: "뒤 2박은 아무것도 안 하게.",
    heroDesc: "하나의 숙소에서 4박하면 지루할 수 있다는 가족 의견을 반영했습니다. 시내에서 로컬 분위기에 섞인 뒤, 토요일부터 3베드룸 풀빌라로 옮겨 여행의 온도를 완전히 바꿉니다.",
    verdictBadge: "D안 종합 1순위",
    verdictTitle: "Cozy Danang 2박 +\nThe Ocean Villas 2박",
    verdictText: "어른은 시장·카페·한강과 풀빌라 휴식을 모두 얻고, 아이는 드래곤브리지와 전용 풀이라는 서로 다른 기억을 얻습니다. 이동은 토요일 한 번뿐이고 예상 총액도 네 안 중 가장 여유롭습니다.",
    verdictPrice: "목표 149–170만 원",
    verdictNote: "시내 방 2개·2박 45–60만 + Ocean 3BR 2박 104–110만 기준",
    ruleTitle: "D안을 1순위로 보는 이유",
    rules: [["변화", "4박의 장면이 두 숙소에서 분명히 달라집니다."], ["균형", "어른의 로컬 경험과 아이의 물놀이를 모두 남깁니다."], ["예산", "200만 원 상한 아래에 30만 원 안팎의 여유가 생깁니다."]],
    conceptTitle: "숙소를 바꾸는 것이 곧 여행의 2막입니다",
    conceptDesc: "앞 2박과 뒤 2박은 역할이 겹치지 않아야 합니다. 시내 호텔에 리조트 시설을 기대하지 않고, 풀빌라에서는 관광을 줄입니다.",
    roomTitle: "시내는 방 2개, 풀빌라는 3베드룸 한 채",
    roomDesc: "목·금 시내 숙박은 같은 방 2개를 유지합니다. 금요일 B팀 합류 뒤 7명이 두 방으로 재배치되고, 토요일부터 모두 한 풀빌라로 모입니다.",
    budgetTitle: "150만 원대를 목표로, 200만 원은 넘지 않게",
    budgetDesc: "시내 2박을 합리적인 부티크 호텔로 잡기 때문에 풀빌라의 질을 낮출 필요가 없습니다.",
    candidateTitle: "로컬 2박을 맡길 시내 호텔 4곳",
    candidateDesc: "단순 최저가가 아니라 청결, 7인·방 2개 구성, 시장·한강 도보성, 어른의 만족도를 함께 평가했습니다.",
    photo: "실제 숙소 사진 · 공식/후기",
    tradeoff: "걸리는 점",
    official: "객실 정보 보기 →",
    pairingTitle: "최종 조합 3안",
    pairingDesc: "뒤 2박은 The Ocean Villas 3베드룸으로 고정하고, 앞 2박의 성격을 비교했습니다.",
    strengths: "이 조합이 남기는 것",
    checks: "결제 전 확인",
    locationTitle: "시내 생활권에서 남쪽 풀빌라로 한 번 이동",
    locationDesc: "목·금은 걸어서 쓰는 위치, 토요일은 차량으로 약 25–35분 남쪽 이동을 전제로 봅니다.",
    mapOpen: "지도 열기 ↗",
    mapNote: "지도 핀은 숙소 공식 주소와 지도 좌표를 교차 확인했습니다. Tet 기간 실제 차량 시간은 달라질 수 있습니다.",
    mapAria: "다낭 숙소 D안 시내 호텔과 풀빌라 위치 지도",
    flowTitle: "로컬을 먼저, 힐링을 나중에",
    flowDesc: "이 일정은 숙소 선택의 효과를 보여주는 참고 동선입니다. 세부 관광표가 아니라 숙소의 역할만 확인합니다.",
    sourceTitle: "검토 근거",
    sourceDesc: "공식 객실 정보, 2026년 최근 검증 후기, 공개 가격 참고를 분리해 확인했습니다.",
    disclaimer: "가격은 2026년 8월 공개 참고가와 A안의 2027년 설 풀빌라 가격 조사를 결합한 목표 범위입니다. 같은 객실명과 취소 조건에서 세금, 조식, 성인 추가, 어린이·엑스트라베드 비용을 모두 합친 금액으로 비교해야 합니다.",
    finalTitle: "현재 종합 추천은 D안입니다",
    finalDesc: "A안보다 짐을 한 번 더 싸지만, 한 숙소 4박의 반복감을 해결하고 B안보다 앞 2박의 로컬성이 선명합니다. Cozy의 방 2개 총액이 60만 원을 크게 넘거나 성인 3명 침대가 불편하면 Sanouva로 바꾸고, Ocean 3베드룸 2박은 110만 원을 상한으로 잡는 것이 좋습니다.",
    home: "← 여행 홈",
    footer: "가족 의견과 새 가격이 확인되면 목표 범위를 계속 업데이트합니다.",
  },
  en: {
    status: "Family overall No. 1 · Plan D",
    updated: "Research snapshot · Aug 2, 2026",
    heroAlt: "Plan D combining a central Da Nang boutique hotel with a pool villa",
    heroFirst: "Live Da Nang for two nights,",
    heroSecond: "then do almost nothing for two.",
    heroDesc: "The family raised a real concern: four nights in one property may start to feel repetitive. Plan D joins local city life first, then resets the trip in a three-bedroom pool villa from Saturday.",
    verdictBadge: "Plan D overall No. 1",
    verdictTitle: "Cozy Danang for 2 nights +\nThe Ocean Villas for 2 nights",
    verdictText: "Adults get markets, cafés, the river and genuine downtime; the children get two different memories in Dragon Bridge and a private pool. There is only one move, and the expected total leaves the healthiest budget margin.",
    verdictPrice: "Target KRW 1.49–1.70M",
    verdictNote: "KRW 450–600K for two city rooms over two nights + KRW 1.04–1.10M for two Ocean 3BR nights",
    ruleTitle: "Why Plan D now ranks first",
    rules: [["Change", "The four nights create two clearly different chapters."], ["Balance", "Adults get local life while children still get memorable pool time."], ["Budget", "It leaves roughly KRW 300K of room under the KRW 2M ceiling."]],
    conceptTitle: "Changing hotels becomes the second act",
    conceptDesc: "The two halves should not duplicate each other. Do not demand resort facilities from the city hotel, and reduce sightseeing once the family reaches the villa.",
    roomTitle: "Two city rooms, then one three-bedroom villa",
    roomDesc: "Keep the same two rooms on Thursday and Friday. All seven redistribute when Team B arrives, then everyone reunites in one pool villa from Saturday.",
    budgetTitle: "Target the KRW 1.5M range and stay below KRW 2M",
    budgetDesc: "A good-value boutique base for the city means there is no need to compromise on the pool villa.",
    candidateTitle: "Four city hotels for the local chapter",
    candidateDesc: "The ranking balances cleanliness, two-room practicality for seven guests, walkable city life and adult satisfaction rather than price alone.",
    photo: "Actual property photos · official/review sources",
    tradeoff: "What gives us pause",
    official: "Open room information →",
    pairingTitle: "Final three pairings",
    pairingDesc: "The Ocean Villas three-bedroom villa stays fixed for the final two nights; the first-half city character changes.",
    strengths: "What this pairing leaves us",
    checks: "Check before payment",
    locationTitle: "One move from local city life to the southern villa belt",
    locationDesc: "Walk the city on Thursday and Friday, then allow roughly 25–35 minutes by car for Saturday's move south.",
    mapOpen: "Open map ↗",
    mapNote: "Pins cross-check official addresses and map coordinates. Holiday traffic may change driving times.",
    mapAria: "Map of central hotels and the pool villa for Da Nang stay Plan D",
    flowTitle: "Local first, recovery second",
    flowDesc: "This is only a reference flow showing the value of the stay plan, not the main sightseeing itinerary.",
    sourceTitle: "Evidence library",
    sourceDesc: "Official room facts, recent 2026 verified reviews and public price references were checked separately.",
    disclaimer: "Prices combine Aug 2026 public references with the 2027 Lunar New Year villa research used in Plan A. Compare the same room and cancellation terms, then include tax, breakfast, additional adults, child terms and extra beds in the total.",
    finalTitle: "Plan D is the current overall recommendation",
    finalDesc: "It requires packing once more than Plan A, but solves the repetition risk of four nights in one place and feels more genuinely local than Plan B's first half. If two Cozy rooms cost materially more than KRW 600K or the three-adult bed setup is weak, switch to Sanouva. Keep the Ocean three-bedroom two-night ceiling at KRW 1.1M.",
    home: "← Trip home",
    footer: "Targets will be updated as family feedback and new prices come in.",
  },
} as const;

function localize(value: Localized, locale: Locale) {
  return value[locale];
}

export function StaysDPageContent({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <main className="trip-page stays-d-page" lang={locale}>
      <TripHeader active="stays" locale={locale} languageSegment="stays-d/" />
      <StayPlanTabs active="d" locale={locale} />

      <section className="stays-hero stays-d-hero">
        <img src="/danang-2027/stays-d/cozy-1.jpg" alt={c.heroAlt} />
        <div className="stays-hero-overlay" />
        <div className="site-shell stays-hero-copy">
          <div className="status-line light-line"><span className="status-badge available">{c.status}</span><span>{c.updated}</span></div>
          <p className="overline">STAY PLAN D · LOCAL CITY 2 · POOL VILLA 2</p>
          <h1>{c.heroFirst}<br />{c.heroSecond}</h1>
          <p>{c.heroDesc}</p>
        </div>
      </section>

      <section className="site-shell b-verdict-panel d-verdict-panel">
        <div className="b-verdict-copy">
          <p className="overline">OVERALL RECOMMENDATION</p>
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

      <section className="site-shell d-concept-section">
        <div className="section-heading compact"><p className="overline">TWO CHAPTERS</p><h2>{c.conceptTitle}</h2><p>{c.conceptDesc}</p></div>
        <div className="d-chapter-grid">
          <article><span>THU–SAT</span><img src="/danang-2027/stays-d/cozy-2.jpg" alt="Cozy Danang city room" /><div><small>{english ? "LOCAL CHAPTER" : "로컬 챕터"}</small><h3>{english ? "Walk out and join the city" : "문을 나서 바로 다낭에 섞이기"}</h3><p>{english ? "Markets, local breakfast, cafés, the Cham Museum, Dragon Bridge and the riverfront." : "시장, 로컬 아침, 카페, 참박물관, 드래곤브리지와 한강변을 가볍게 걷습니다."}</p></div></article>
          <article className="calm"><span>SAT–MON</span><img src="/danang-2027/stays-d/ocean-1.jpg" alt="The Ocean Villas private pool" /><div><small>{english ? "RECOVERY CHAPTER" : "힐링 챕터"}</small><h3>{english ? "Close the gate and slow down" : "대문을 닫고 속도 낮추기"}</h3><p>{english ? "Three bedrooms, private pool, shared living room, buggy routes and the resort beach." : "3베드룸, 전용 풀, 함께 쓰는 거실, 버기 동선과 리조트 해변에 시간을 씁니다."}</p></div></article>
        </div>
      </section>

      <section className="site-shell b-team-section">
        <div className="section-heading compact"><p className="overline">ROOM SETUP</p><h2>{c.roomTitle}</h2><p>{c.roomDesc}</p></div>
        <div className="b-team-grid d-room-grid">
          <article><span>THU · TEAM A</span><h3>{english ? "Mother in one room, couple in the other" : "장모님 1실 · 처제 부부 1실"}</h3><p>{english ? "Three adults check in first. Keep both city rooms for Friday too." : "성인 3명이 먼저 체크인합니다. 같은 시내 방 2개를 금요일까지 이어서 씁니다."}</p><b>{english ? "2 city rooms" : "시내 방 2개"}</b></article>
          <article><span>FRI · ALL 7</span><h3>{english ? "Family of four + three adults" : "4인 가족 + 성인 3명"}</h3><p>{english ? "One family-capable room and one proper three-adult room. No third room is added." : "4인 가족 수용 객실 1개와 성인 3인 수용 객실 1개로 나눕니다. 세 번째 방은 추가하지 않습니다."}</p><b>{english ? "The same 2 rooms" : "같은 방 2개"}</b></article>
          <article className="accent"><span>SAT–MON · ALL 7</span><h3>{english ? "One 373㎡ three-bedroom pool villa" : "373㎡ 3베드룸 풀빌라 한 채"}</h3><p>{english ? "Three ensuite bedrooms, living and dining space, kitchen and private pool bring everyone back together." : "욕실 딸린 침실 3개, 거실·다이닝·주방과 전용 풀에서 모두 다시 한 공간에 모입니다."}</p><b>{english ? "8 adults or 6 adults + 2 children" : "공식 기준 성인 8 또는 성인 6 + 어린이 2"}</b></article>
        </div>
      </section>

      <section className="b-budget-section">
        <div className="site-shell">
          <div className="section-heading compact"><p className="overline">BUDGET GUARDRAIL</p><h2>{c.budgetTitle}</h2><p>{c.budgetDesc}</p></div>
          <div className="b-budget-math">
            <div><span>01</span><small>{english ? "City" : "시내"}</small><strong>{english ? "KRW 450–600K" : "45–60만 원"}</strong><p>{english ? "2 rooms · 2 nights" : "방 2개 · 2박"}</p></div><i>+</i>
            <div><span>02</span><small>{english ? "Pool villa" : "풀빌라"}</small><strong>{english ? "KRW 1.04–1.10M" : "104–110만 원"}</strong><p>{english ? "3 bedrooms · 2 nights" : "3베드룸 · 2박"}</p></div><i>→</i>
            <div className="total"><span>03</span><small>{english ? "Target total" : "목표 총액"}</small><strong>{english ? "KRW 1.49–1.70M" : "149–170만 원"}</strong><p>{english ? "Hard ceiling KRW 2M" : "최종 상한 200만 원"}</p></div>
          </div>
        </div>
      </section>

      <section className="site-shell b-resort-section">
        <div className="section-heading compact"><p className="overline">CITY HOTEL SHORTLIST</p><h2>{c.candidateTitle}</h2><p>{c.candidateDesc}</p></div>
        <div className="b-resort-grid d-hotel-grid">
          {cityHotels.map((hotel) => (
            <article className="b-resort-card" key={hotel.name}>
              <div className="candidate-gallery">{hotel.images.map((src, index) => <div className="candidate-image" key={src}><img src={src} alt={`${hotel.name} ${index + 1}`} loading="lazy" decoding="async" /></div>)}<span className={`status-badge ${hotel.rank <= 2 ? "available" : "ready"}`}>{localize(hotel.badge, locale)}</span><b>{hotel.rank}</b><small>{c.photo}</small></div>
              <div className="candidate-copy"><div className="score-line"><span>PLAN D SCORE</span><strong>{hotel.score}</strong><small>/100</small></div><h3>{hotel.name}</h3><p className="candidate-price">{localize(hotel.price, locale)}</p><small>{localize(hotel.reference, locale)}</small><p className="candidate-fit">{localize(hotel.fit, locale)}</p><div className="tag-list">{hotel.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div><p className="b-risk"><b>{c.tradeoff}</b>{localize(hotel.tradeoff, locale)}</p><a className="text-link" href={hotel.official} target="_blank" rel="noreferrer">{c.official}</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="b-pairing-section">
        <div className="site-shell"><div className="section-heading compact"><p className="overline">FINAL THREE</p><h2>{c.pairingTitle}</h2><p>{c.pairingDesc}</p></div><div className="b-pairing-list">
          {pairings.map((pairing, index) => <article className="finalist-card" key={pairing.hotel.name}><div className="finalist-header"><div className="finalist-rank"><span>0{index + 1}</span><b>FINALIST</b></div><div className="finalist-title"><h3>{pairing.hotel.name} + The Ocean Villas</h3><p>{localize(pairing.title, locale)}</p></div><div className="finalist-score"><strong>{pairing.hotel.score}</strong><span>/100</span></div></div><div className="photo-grid d-pairing-photos"><img src={pairing.hotel.images[0]} alt={`${pairing.hotel.name} exterior`} loading="lazy" decoding="async" /><img src="/danang-2027/stays-d/ocean-2.jpg" alt="The Ocean Villas interior" loading="lazy" decoding="async" /><img src="/danang-2027/stays-d/ocean-3.jpg" alt="The Ocean Villas private pool" loading="lazy" decoding="async" /><span>{c.photo}</span></div><div className="finalist-verdict"><p>{localize(pairing.verdict, locale)}</p><div><strong>{localize(pairing.total, locale)}</strong><span>{english ? "Four-night target" : "4박 목표 총액"}</span></div></div><div className="finalist-info-grid b-pairing-info"><div><h4>{c.strengths}</h4><ul className="positive-list">{pairing.strengths[locale].map((item) => <li key={item}>{item}</li>)}</ul></div><div><h4>{c.checks}</h4><ul className="risk-list">{pairing.checks[locale].map((item) => <li key={item}>{item}</li>)}</ul></div></div></article>)}
        </div></div>
      </section>

      <section className="site-shell location-section"><div className="section-heading compact"><p className="overline">LOCATION</p><h2>{c.locationTitle}</h2><p>{c.locationDesc}</p></div><div className="location-layout"><StayMap locations={locations} label={c.mapAria} /><div className="location-list">{locations.map((location) => <a href={location.map} target="_blank" rel="noreferrer" key={location.id}><span>{location.id}</span><div><b>{location.name}</b><small>{localize(location.note, locale)}</small></div><i>{c.mapOpen}</i></a>)}</div></div><p className="map-note">{c.mapNote}</p></section>

      <section className="b-schedule-section"><div className="site-shell b-schedule-layout"><div className="section-heading inverse"><p className="overline">REFERENCE FLOW</p><h2>{c.flowTitle}</h2><p>{c.flowDesc}</p></div><ol className="b-schedule-list">
        <li><span>THU · 2/4</span><p><b>{english ? "Team A joins the city" : "A팀이 시내 생활권에 들어오기"}</b>{english ? "Check into two rooms, walk to a local dinner and keep the first night light." : "방 2개에 체크인하고 가까운 로컬 저녁과 야간 산책만 가볍게 합니다."}</p></li>
        <li><span>FRI · 2/5</span><p><b>{english ? "All seven share a full local day" : "7명이 함께 다낭 로컬 하루"}</b>{english ? "Local breakfast, one market, café downtime and the Han River after sunset are enough." : "로컬 아침, 시장 한 곳, 카페 휴식, 해 질 무렵 한강이면 시내 숙소의 역할은 충분합니다."}</p></li>
        <li><span>SAT · 2/6</span><p><b>{english ? "Move once and begin recovery" : "한 번 이동하고 힐링 시작"}</b>{english ? "Checkout, eat lunch, buy groceries and head straight to the villa. Do not add sightseeing." : "체크아웃 뒤 점심과 장보기만 하고 풀빌라로 갑니다. 관광은 더 넣지 않습니다."}</p></li>
        <li><span>SUN · 2/7</span><p><b>{english ? "A full day around the private pool" : "전용 풀 중심의 온전한 하루"}</b>{english ? "Children swim; adults alternate between the villa, buggy routes, beach and a massage." : "아이들은 물놀이하고, 어른들은 빌라·버기·해변·마사지를 번갈아 누립니다."}</p></li>
        <li><span>MON · 2/8</span><p><b>{english ? "Slow breakfast and checkout" : "천천히 아침 먹고 체크아웃"}</b>{english ? "The final two villa nights keep the last morning calm." : "뒤 2박을 풀빌라로 둔 덕분에 마지막 아침도 서두르지 않습니다."}</p></li>
      </ol></div></section>

      <section className="site-shell evidence-library"><div className="section-heading compact"><p className="overline">SOURCES</p><h2>{c.sourceTitle}</h2><p>{c.sourceDesc}</p></div><div className="evidence-grid">{sources.map((group) => <article key={group.title.ko}><h3>{localize(group.title, locale)}</h3>{group.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}><span>{localize(link.label, locale)}</span><b>↗</b></a>)}</article>)}</div><p className="research-disclaimer">{c.disclaimer}</p></section>

      <section className="site-shell b-final-callout d-final-callout"><div><p className="overline">BOTTOM LINE</p><h2>{c.finalTitle}</h2><p>{c.finalDesc}</p></div><Link className="secondary-link" href={base}>{english ? "Compare all four plans" : "여행 홈에서 네 안 비교"}</Link></section>
      <footer className="trip-footer site-shell"><Link href={base}>{c.home}</Link><span>{c.footer}</span></footer>
    </main>
  );
}

export default function StaysDPage() {
  return <StaysDPageContent locale="ko" />;
}
