import type { Metadata } from "next";
import Link from "next/link";
import StayMap from "../_components/StayMap";
import StayPlanTabs from "../_components/StayPlanTabs";
import TripHeader from "../_components/TripHeader";

export const metadata: Metadata = {
  title: "숙소 B안 · 리조트 2박 + 풀빌라 2박",
  description: "2027년 설 다낭 가족여행을 위한 리조트 2박과 3베드룸 풀빌라 2박 조합 검토",
  openGraph: {
    title: "다낭 2027 숙소 B안 · 리조트 2박 + 풀빌라 2박",
    description: "성인 5명과 6세 여아 2명을 위한 4박 숙소 조합 비교",
    url: "https://jongsolee.github.io/danang-2027/stays-b/",
    images: [
      {
        url: "https://jongsolee.github.io/danang-plan-b-og.png",
        width: 1730,
        height: 909,
        alt: "다낭 2027 숙소 B안: 리조트 2박과 풀빌라 2박",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "다낭 2027 숙소 B안",
    description: "리조트 2박 + 풀빌라 2박 가족 검토안",
    images: ["https://jongsolee.github.io/danang-plan-b-og.png"],
  },
};

type Locale = "ko" | "en";
type Localized = { ko: string; en: string };

const resortCandidates = [
  {
    rank: 1,
    score: 92,
    name: "Meliá Danang Beach Resort",
    status: { ko: "현실 1순위", en: "Best realistic fit" },
    price: { ko: "객실 1개·1박 목표 15–18만 원", en: "Target KRW 150–180K per room, per night" },
    priceNote: {
      ko: "2026년 8월 공개 비교가는 세금 포함 약 15–16만 원대 · 2실을 2박 쓰면 객실료 목표 60–72만 원",
      en: "Aug 2026 public reference was about KRW 150–160K incl. tax · two rooms for two nights target KRW 600–720K",
    },
    fit: {
      ko: "장모님 방을 분리하면서도 리조트 경험과 200만 원 상한을 함께 지킬 후보",
      en: "The best chance to keep a separate room for Mother while preserving the resort experience and KRW 2M ceiling",
    },
    facts: {
      ko: ["7개 야외 수영장", "키즈클럽", "전용 해변", "저층 리조트 동선"],
      en: ["7 outdoor pools", "Kids club", "Private beach", "Low-rise resort grounds"],
    },
    risk: {
      ko: "하얏트·인터컨티넨탈 같은 압도적 럭셔리보다는 실속형 5성급. 조식 혼잡과 객실별 관리 편차 후기가 일부 있습니다.",
      en: "More value-led than ultra-luxury. Some reviews mention busy breakfast periods and room-to-room maintenance variation.",
    },
    images: [
      "/danang-2027/stays-b/melia-1.jpg",
      "/danang-2027/stays-b/melia-2.jpg",
      "/danang-2027/stays-b/melia-3.jpg",
    ],
    href: "https://www.melia.com/en/hotels/vietnam/da-nang/melia-danang-beach-resort",
  },
  {
    rank: 2,
    score: 91,
    name: "Sheraton Grand Danang",
    status: { ko: "경험 상향안", en: "Experience upgrade" },
    price: { ko: "객실 1개·1박 참고 20–31만 원", en: "Reference KRW 200–310K per room, per night" },
    priceNote: {
      ko: "공개 가격 범위 $140–216 수준 · 2실을 2박 쓰면 풀빌라 포함 약 184–228만 원 범위",
      en: "Public reference range around USD 140–216 · two rooms for two nights put the full split stay around KRW 1.84–2.28M",
    },
    fit: {
      ko: "250m 인피니티풀과 미니 워터파크가 강력하고 Ocean Villas 이동이 매우 짧음",
      en: "A 250m infinity pool, mini waterpark and an exceptionally short move to The Ocean Villas",
    },
    facts: {
      ko: ["250m 인피니티풀", "미니 워터파크", "키즈클럽", "논느억 전용 해변"],
      en: ["250m infinity pool", "Mini waterpark", "Kids club", "Non Nuoc private beach"],
    },
    risk: {
      ko: "Meliá보다 리조트 체감은 한 단계 높습니다. 객실 1개·1박 평균이 세금 포함 24만 원 이하이면 총예산 200만 원을 맞출 수 있습니다.",
      en: "A clear resort upgrade. An average all-in rate at or below KRW 240K per room, per night keeps the full plan within KRW 2M.",
    },
    images: [
      "https://cache.marriott.com/content/dam/marriott-renditions/DADSI/dadsi-exterior-1896-hor-wide.jpg?downsize=2880px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
      "https://cache.marriott.com/is/image/marriotts7prod/dadsi-infinity-pool-9325%3AClassic-Hor?fit=constrain&wid=1300",
      "https://cache.marriott.com/is/image/marriotts7prod/si-dadsi-she-dadsi-family-wat31382-78690%3AClassic-Hor?fit=constrain&wid=1300",
    ],
    href: "https://www.marriott.com/en-us/hotels/dadsi-sheraton-grand-danang-beach-resort-and-spa/overview/",
  },
  {
    rank: 3,
    score: 87,
    name: "Da Nang Mikazuki",
    status: { ko: "아이 경험 1순위", en: "Best for children" },
    price: { ko: "객실 1개·1박 참고 약 34만 원", en: "Reference about KRW 340K per room, per night" },
    priceNote: {
      ko: "공개 세금 포함가 $248 수준 · A팀 2실을 유지하면 예산 구조와 맞지 않음",
      en: "Public tax-inclusive reference around USD 248 · incompatible with the budget when Team A keeps two rooms",
    },
    fit: {
      ko: "실내 온수 워터파크·온천·게임존으로 날씨와 무관하게 아이 기억을 만들기 좋음",
      en: "Indoor heated waterpark, onsen and game zones create the strongest child-focused experience in any weather",
    },
    facts: {
      ko: ["워터파크 365", "온천·사우나", "루프톱 풀", "미니 재팬 산책"],
      en: ["Water Park 365", "Onsen and sauna", "Rooftop pool", "Mini-Japan grounds"],
    },
    risk: {
      ko: "B팀은 금요일 오후부터 토요일 정오까지가 핵심 이용 시간입니다. 포함 패키지는 체크인일 15시부터 체크아웃일 12시까지라는 공식 안내를 기준으로 봐야 합니다.",
      en: "Team B's main use window is Friday afternoon to Saturday noon. Official guidance for included packages runs from 3 p.m. check-in day to noon on checkout day.",
    },
    images: [
      "https://ignewsimg.s3.ap-northeast-1.wasabisys.com/Cqczx4Wv7zc",
      "https://ignewsimg.s3.ap-northeast-1.wasabisys.com/Cqczx4XPdgP",
      "https://ignewsimg.s3.ap-northeast-1.wasabisys.com/Cqczx4hPh4F",
    ],
    href: "https://mikazuki.com.vn/en/",
  },
  {
    rank: 4,
    score: 86,
    name: "Hyatt Regency Danang",
    status: { ko: "품질 기준점", en: "Quality benchmark" },
    price: { ko: "객실 1개·1박 참고 약 34만 원 이상", en: "Reference KRW 340K+ per room, per night" },
    priceNote: {
      ko: "2026년 공개 세금 포함가 $246 수준 · 2실을 2박 쓰면 리조트 객실료만 약 136만 원",
      en: "2026 public tax-inclusive reference around USD 246 · two rooms for two nights cost about KRW 1.36M before the villa",
    },
    fit: {
      ko: "반얀트리 지향점에 가장 가까운 가족형 리조트지만 이번 B안 예산에서는 비교 기준으로만 유지",
      en: "The closest family-resort match to the Banyan Tree aspiration, kept as a benchmark rather than the budget choice",
    },
    facts: {
      ko: ["5개 야외 풀", "Camp Hyatt", "미니골프·작은 농장", "워터슬라이드"],
      en: ["5 outdoor pools", "Camp Hyatt", "Mini golf and farm", "Waterslide"],
    },
    risk: {
      ko: "시설과 서비스는 가장 안정적이지만 풀빌라 2박을 붙이면 200만 원 상한과 양립하기 어렵습니다.",
      en: "The facilities and service are the safest bet, but adding two pool-villa nights makes the KRW 2M ceiling unrealistic.",
    },
    images: [
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/05/21/2145/DANHR-P0776-Aerial-Pool-Beach.jpg/DANHR-P0776-Aerial-Pool-Beach.16x9.jpg?imwidth=2560",
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2025/08/04/2149/DANHR-P1234-Boy-Guestroom-Tent.jpg/DANHR-P1234-Boy-Guestroom-Tent.4x3.jpg?imwidth=2560",
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/05/21/2145/DANHR-P0782-Pool-Beach-Sunset.jpg/DANHR-P0782-Pool-Beach-Sunset.4x3.jpg?imwidth=2560",
    ],
    href: "https://www.hyatt.com/hyatt-regency/en-US/danhr-hyatt-regency-danang-resort-and-spa/family-stay-and-activities",
  },
] as const;

const pairings = [
  {
    rank: 1,
    score: 93,
    title: "Meliá Danang + The Ocean Villas",
    subtitle: { ko: "예산·방 분리·시설의 균형", en: "Best balance of budget, privacy and facilities" },
    total: { ko: "약 164–176만 원 목표", en: "Target about KRW 1.64–1.76M" },
    math: { ko: "리조트 2실·2박 합계 60–72만 + 3BR 풀빌라 2박 약 104만", en: "Two resort rooms for two nights: KRW 600–720K + 3BR pool villa for two nights: about KRW 1.04M" },
    verdict: {
      ko: "장모님 방을 따로 두고도 200만 원 안쪽을 노릴 수 있는 유일한 프리미엄 조합. 리조트 수영장 경험 뒤 전용 풀과 거실이 있는 빌라로 분위기가 자연스럽게 바뀝니다.",
      en: "The only premium combination that can realistically keep Mother's room separate and still target under KRW 2M. It moves naturally from full-resort pools to a private pool and shared living room.",
    },
    strengths: {
      ko: ["Meliá 7개 풀과 키즈클럽", "Ocean 373㎡ 3베드룸·전용 풀", "차량 약 8–12분", "장모님 독립 객실 유지"],
      en: ["Meliá's 7 pools and kids club", "Ocean 373㎡ 3BR private-pool villa", "Roughly 8–12 min transfer", "Separate room for Mother"],
    },
    watch: {
      ko: ["Meliá 세금 포함 18만 원/실·박 목표", "Ocean 2박 110만 원 상한", "금요일 2실의 7인 수용·침대·조식 조건"],
      en: ["Meliá target of KRW 180K all-in per room, per night", "Ocean two-night ceiling KRW 1.1M", "Friday occupancy, beds and breakfast terms for seven people across two rooms"],
    },
    images: [
      "/danang-2027/stays-b/melia-1.jpg",
      "https://pix8.agoda.net/hotelImages/267905/-1/f49439f98a9e017fa6d0499a1f5e1c3d.png?ce=0&s=1024x768",
      "https://pix8.agoda.net/hotelImages/267905/3127089/d8969035667f140dc8dcf2e4b69401c0.jpeg?s=600x",
    ],
  },
  {
    rank: 3,
    score: 87,
    title: "Meliá Danang + Furama-compound villa",
    subtitle: { ko: "가격과 시내 접근을 더 챙기는 안", en: "More budget room and easier city access" },
    total: { ko: "약 130–162만 원 목표", en: "Target about KRW 1.30–1.62M" },
    math: { ko: "리조트 2실·2박 합계 60–72만 + 사설 운영 3BR 빌라 2박 70–90만", en: "Two resort rooms for two nights: KRW 600–720K + privately managed 3BR villa for two nights: KRW 700–900K" },
    verdict: {
      ko: "비용 여유와 시내 접근은 가장 좋습니다. 다만 Furama 이름보다 실제 운영 주체, 리조트 시설 사용 범위, 최근 빌라 상태를 계약 조건으로 확인해야 합니다.",
      en: "The strongest budget buffer and easiest city access. The deciding factors are the actual operator, resort-facility access and recent villa condition—not the Furama name alone.",
    },
    strengths: {
      ko: ["총예산 여유 20만 원 이상", "미케비치·시내 식당 접근", "3베드룸·전용 풀", "마지막 2박 외식 동선 편함"],
      en: ["KRW 200K+ budget buffer", "Better access to My Khe and city dining", "3 bedrooms and private pool", "Easier dining during the final two nights"],
    },
    watch: {
      ko: ["리조트 직영 여부", "공용 수영장·해변·버기 사용 범위", "정확한 빌라 번호와 최근 사진"],
      en: ["Who operates the villa", "Shared pool, beach and buggy access", "Exact villa number and recent photos"],
    },
    images: [
      "/danang-2027/stays-b/melia-2.jpg",
      "https://pix8.agoda.net/hotelImages/2601993/-1/86a8bdd89c9452ecd5ac2b95f14026e1.jpg?ce=0&s=1024x768",
      "https://pix8.agoda.net/hotelImages/2601993/-1/62de1eaf7b1dade7336dd2cc8b14093e.jpg?ce=0&s=600x",
    ],
  },
  {
    rank: 2,
    score: 91,
    title: "Sheraton Grand + The Ocean Villas",
    subtitle: { ko: "리조트 만족도를 가장 높이는 안", en: "The strongest resort-first experience" },
    total: { ko: "약 184–228만 원 참고", en: "Reference about KRW 1.84–2.28M" },
    math: { ko: "셰라톤 2실·2박 합계 80–124만 + 3BR 풀빌라 2박 약 104만", en: "Two Sheraton rooms for two nights: KRW 800K–1.24M + 3BR pool villa for two nights: about KRW 1.04M" },
    verdict: {
      ko: "250m 풀과 미니 워터파크는 B안 중 가장 선명한 리조트 경험입니다. 세금 포함 평균 24만 원/실·박 이하를 잡으면 200만 원 상한 안으로 들어옵니다.",
      en: "The 250m pool and mini waterpark make this the clearest resort experience. The full plan fits under KRW 2M at an average all-in rate of KRW 240K or less per room, per night.",
    },
    strengths: {
      ko: ["아이 물놀이 시설 최상", "Ocean Villas와 거의 같은 권역", "체크아웃 후 이동 피로 최소", "반얀트리 지향 감성에 근접"],
      en: ["Best water play among finalists", "Same southern resort belt as Ocean Villas", "Minimal moving-day fatigue", "Closest to the Banyan Tree aspiration"],
    },
    watch: {
      ko: ["총액 200만 원 초과 가능성", "시내와 떨어진 첫 2박", "A팀 2실을 1실로 줄이지 않는 조건"],
      en: ["High chance of exceeding KRW 2M", "First two nights away from the city", "Do not solve the budget by forcing Team A into one room"],
    },
    images: [
      "https://cache.marriott.com/is/image/marriotts7prod/dadsi-infinity-pool-9325%3AClassic-Hor?fit=constrain&wid=1300",
      "https://cache.marriott.com/is/image/marriotts7prod/si-dadsi-she-dadsi-family-wat31382-78690%3AClassic-Hor?fit=constrain&wid=1300",
      "https://pix8.agoda.net/hotelImages/267905/-1/f49439f98a9e017fa6d0499a1f5e1c3d.png?ce=0&s=1024x768",
    ],
  },
] as const;

const locations = [
  { id: "M", name: "Meliá Danang Beach Resort", latitude: 15.99968, longitude: 108.26973, note: { ko: "현실 1순위 리조트", en: "Best realistic resort" }, map: "https://www.google.com/maps/search/?api=1&query=Melia%20Danang%20Beach%20Resort" },
  { id: "S", name: "Sheraton Grand Danang", latitude: 15.98117, longitude: 108.27853, note: { ko: "경험 상향 리조트", en: "Experience-upgrade resort" }, map: "https://www.google.com/maps/search/?api=1&query=Sheraton%20Grand%20Danang" },
  { id: "O", name: "The Ocean Villas", latitude: 15.97449, longitude: 108.28016, note: { ko: "B안 1순위 풀빌라", en: "Plan B's preferred pool villa" }, map: "https://www.google.com/maps/search/?api=1&query=The%20Ocean%20Villas%20Da%20Nang" },
  { id: "F", name: "Furama Villas compound", latitude: 16.03995, longitude: 108.25109, note: { ko: "예산형 풀빌라 권역", en: "Budget-oriented villa area" }, map: "https://www.google.com/maps/search/?api=1&query=Furama%20Villas%20Danang" },
  { id: "K", name: "Da Nang Mikazuki", latitude: 16.0993, longitude: 108.1515, note: { ko: "아이 경험 특화", en: "Child-focused experience" }, map: "https://www.google.com/maps/search/?api=1&query=Da%20Nang%20Mikazuki" },
] as const;

const sources = [
  {
    title: { ko: "Meliá 검증", en: "Meliá evidence" },
    links: [
      { label: { ko: "공식 시설 · 7개 풀, 키즈클럽, 전용 해변", en: "Official facilities · 7 pools, kids club, private beach" }, href: "https://www.melia.com/en/hotels/vietnam/da-nang/melia-danang-beach-resort" },
      { label: { ko: "Booking 후기 · 가족·청결·수영장 반복 평가", en: "Booking reviews · family, cleanliness and pool themes" }, href: "https://www.booking.com/reviews/vn/hotel/melia-danang.html" },
      { label: { ko: "공개 가격 참고", en: "Public price reference" }, href: "https://www.google.com/travel/hotels/entity/ChkI_KHv3ZGmza39ARoML2cvMXE2N3B3dGQwEAE" },
    ],
  },
  {
    title: { ko: "셰라톤·하얏트 기준", en: "Sheraton and Hyatt benchmarks" },
    links: [
      { label: { ko: "셰라톤 공식 · 250m 풀과 미니 워터파크", en: "Sheraton official · 250m pool and mini waterpark" }, href: "https://www.marriott.com/en-us/hotels/dadsi-sheraton-grand-danang-beach-resort-and-spa/overview/" },
      { label: { ko: "하얏트 공식 · 5개 풀과 Camp Hyatt", en: "Hyatt official · five pools and Camp Hyatt" }, href: "https://www.hyatt.com/hyatt-regency/en-US/danhr-hyatt-regency-danang-resort-and-spa/family-stay-and-activities" },
      { label: { ko: "최근 커뮤니티 비교 · 하얏트 vs Furama", en: "Recent community comparison · Hyatt vs Furama" }, href: "https://www.reddit.com/r/DaNang/comments/1uhqmsn/furama_or_hyatt_regency/" },
    ],
  },
  {
    title: { ko: "미카즈키 이용 조건", en: "Mikazuki use conditions" },
    links: [
      { label: { ko: "공식 워터파크 · 실내 온수 시설", en: "Official waterpark · indoor heated facilities" }, href: "https://www.mikazukiwaterpark.com/" },
      { label: { ko: "투숙객 시설 이용 시간 안내", en: "In-house guest facility hours" }, href: "https://app.mikazuki.com.vn/tien-nghi-khach-san/ban-do-khach-san/?lang=vi" },
      { label: { ko: "가족 후기 · 워터파크와 온천", en: "Family reviews · waterpark and onsen" }, href: "https://www.tripadvisor.com/Hotel_Review-g16740551-d19434295-Reviews-Da_Nang_Mikazuki_Japanese_Resorts_Spa-Lien_Chieu_Da_Nang.html" },
    ],
  },
  {
    title: { ko: "풀빌라 기준", en: "Pool-villa evidence" },
    links: [
      { label: { ko: "The Ocean Villas 공식 브로슈어 · 3BR 373㎡", en: "The Ocean Villas brochure · 3BR 373㎡" }, href: "https://dmaevvtdousx6.cloudfront.net/uploads/2019/04/Digital-Brochure.pdf" },
      { label: { ko: "The Ocean Villas 공식 사이트", en: "The Ocean Villas official site" }, href: "https://www.theoceanresort.com.vn/" },
      { label: { ko: "A안 풀빌라 전체 비교", en: "Full Plan A pool-villa comparison" }, href: "/danang-2027/stays/" },
    ],
  },
] as const;

const copy = {
  ko: {
    reviewStatus: "가족 검토용 B안",
    updated: "조사 기준 · 2026. 8. 2",
    heroFirst: "앞 2박은 리조트,",
    heroSecond: "뒤 2박은 풀빌라.",
    heroDesc: "한 숙소에 4박 머무는 A안과 달리, 아이가 기억할 리조트 경험과 가족끼리 쉬는 풀빌라 시간을 절반씩 나눕니다.",
    heroAlt: "Meliá Danang Beach Resort 수영장과 리조트 전경",
    verdictBadge: "B안 1순위",
    verdictTitle: "Meliá Danang 2박 +\nThe Ocean Villas 2박",
    verdictText: "리조트는 목요일과 금요일 모두 방 2개만 사용합니다. 첫날은 장모님 방 1개, 처제 부부 방 1개로 시작하고, 금요일 B팀 합류 뒤에는 7명이 같은 방 2개 안에서 적절히 나눠 씁니다.",
    verdictPrice: "목표 164–176만 원",
    verdictNote: "세금 포함 리조트 15–18만/실·박 + Ocean 3BR 2박 약 104만 기준",
    ruleTitle: "예산을 지키는 두 개의 상한",
    ruleItems: [
      ["리조트", "방 2개 × 2박 · 객실료 합계 72만 원 이하"],
      ["풀빌라", "3베드룸 2박 합계 110만 원 이하"],
      ["객실 수", "목·금 모두 2실 고정 · 금요일은 7명이 두 방으로 재배치"],
    ],
    teamTitle: "두 팀의 합류 구조부터 맞춥니다",
    teamDesc: "A팀이 목요일 먼저 체크인하고, B팀이 금요일 아침 합류합니다. 이 차이 때문에 객실 수를 날짜별로 계산해야 합니다.",
    budgetTitle: "리조트 방은 2개, 목·금 2박 내내 그대로",
    budgetDesc: "금요일에 B팀이 합류해도 세 번째 방을 추가하지 않습니다. 다만 7명이 두 객실을 쓰는 조건이므로 객실별 정원, 침대 구성, 조식·인원 추가비를 함께 비교합니다.",
    resortTitle: "리조트 후보 4곳",
    resortDesc: "시설이 좋은 순서가 아니라, 방 2개를 2박 쓰는 비용과 금요일 7인·2실 구성, 가족 경험을 함께 점수화했습니다.",
    photoSource: "실제 숙소 사진 · 공식 사이트/후기",
    riskLabel: "걸리는 점",
    officialLink: "공식 정보 보기 →",
    pairingTitle: "최종 조합 3안",
    pairingDesc: "풀빌라 후보는 A안 검토 결과를 재사용하되, 2박 가격과 리조트에서의 이동 피로를 다시 반영했습니다.",
    strengths: "이 조합의 강점",
    watch: "결정 전 확인",
    locationTitle: "리조트에서 풀빌라로 옮기는 거리",
    locationDesc: "숙소 자체가 우선이지만, 이사하는 토요일의 피로를 줄이기 위해 남쪽 리조트 벨트를 높게 평가했습니다.",
    mapOpen: "지도 열기 ↗",
    mapNote: "표시 시간은 일반적인 차량 이동 감각입니다. 설 연휴 교통과 호출 상황에 따라 달라질 수 있습니다.",
    mapAria: "다낭 숙소 B안 리조트와 풀빌라 위치 지도",
    scheduleTitle: "이동일은 관광일로 만들지 않습니다",
    scheduleDesc: "숙소 이동은 토요일 한 번뿐입니다. 체크아웃과 체크인 사이에는 점심과 장보기만 넣습니다.",
    sourceTitle: "검토 근거",
    sourceDesc: "공식 시설 정보, 최근 숙박 후기, 공개 가격 자료를 분리해 확인했습니다.",
    disclaimer: "가격은 2026년 8월에 확인한 공개 참고가와 A안의 2027년 설 가격 자료를 결합한 목표 범위입니다. 실제 결제 전에는 세금, 조식, 엑스트라베드와 어린이 정책을 같은 조건으로 다시 비교해야 합니다.",
    nextTitle: "현재 권고: A안보다 B안을 우선 검토",
    nextDesc: "풀빌라 4박의 편안함은 줄지만, 아이 기억과 여행의 장면은 확실히 더 다양해집니다. Meliá 방 2개를 2박 쓰는 비용과 7인 추가비용의 합계가 90만 원을 넘으면 A안과 다시 비교하는 것이 좋습니다.",
    aLink: "A안 다시 보기",
    homeLink: "← 여행 홈",
    footer: "가족 의견을 반영한 뒤 공개본에 올립니다.",
  },
  en: {
    reviewStatus: "Plan B for family review",
    updated: "Research snapshot · Aug 2, 2026",
    heroFirst: "Two nights at a resort,",
    heroSecond: "then two in a pool villa.",
    heroDesc: "Unlike Plan A's four nights in one villa, this splits the trip between a memorable full-resort experience and private family time in a villa.",
    heroAlt: "Pools and resort grounds at Meliá Danang Beach Resort",
    verdictBadge: "Plan B No. 1",
    verdictTitle: "Meliá Danang for 2 nights +\nThe Ocean Villas for 2 nights",
    verdictText: "The resort stay uses only two rooms on both Thursday and Friday. Mother has one room on the first night while the sister and her husband share the other; after Team B arrives on Friday, all seven redistribute across the same two rooms.",
    verdictPrice: "Target KRW 1.64–1.76M",
    verdictNote: "Resort all-in KRW 150–180K per room, per night + about KRW 1.04M for two nights in an Ocean 3BR villa",
    ruleTitle: "Two ceilings that protect the budget",
    ruleItems: [
      ["Resort", "Two rooms × two nights · KRW 720K or less in total"],
      ["Pool villa", "Three-bedroom two-night total of KRW 1.1M or less"],
      ["Room count", "Keep two rooms for both nights; redistribute seven guests on Friday"],
    ],
    teamTitle: "Start with the two-team arrival pattern",
    teamDesc: "Team A checks in on Thursday. Team B arrives early Friday. That difference means the resort cost must be calculated room by room and night by night.",
    budgetTitle: "Keep the same two resort rooms for both nights",
    budgetDesc: "Team B's Friday arrival does not add a third room. Because seven guests share two rooms that night, compare room capacity, beds, breakfast and extra-person charges together.",
    resortTitle: "Four resort candidates",
    resortDesc: "The ranking balances the cost of two rooms for two nights, Friday's seven-guests-in-two-rooms setup and the actual family experience; it is not a pure luxury ranking.",
    photoSource: "Actual property photos · official/review sources",
    riskLabel: "What gives us pause",
    officialLink: "Open official information →",
    pairingTitle: "Final three combinations",
    pairingDesc: "The villa research from Plan A is reused, but repriced for two nights and rescored for moving-day effort.",
    strengths: "Why this pairing works",
    watch: "Check before deciding",
    locationTitle: "The move from resort to pool villa",
    locationDesc: "The stay itself remains the priority, but the southern resort belt scores higher because it makes Saturday's move easier.",
    mapOpen: "Open map ↗",
    mapNote: "Travel times are general driving estimates and may change during the holiday period.",
    mapAria: "Map of resorts and pool villas for Da Nang stay Plan B",
    scheduleTitle: "Moving day should not become sightseeing day",
    scheduleDesc: "There is one accommodation move on Saturday. Keep only lunch and groceries between checkout and villa check-in.",
    sourceTitle: "Evidence library",
    sourceDesc: "Official facility information, recent stay reviews and public price references were checked separately.",
    disclaimer: "Prices combine public references checked in Aug 2026 with the Lunar New Year pricing research already used in Plan A. Before payment, compare taxes, breakfast, extra beds and child policies on identical terms.",
    nextTitle: "Current recommendation: review Plan B before Plan A",
    nextDesc: "It gives up the simplicity of four villa nights, but creates more distinct memories for the children. If two Meliá rooms for two nights plus seven-person surcharges exceed KRW 900K, compare it with Plan A again.",
    aLink: "Review Plan A",
    homeLink: "← Trip home",
    footer: "Publish only after the family reviews the draft.",
  },
} as const;

function localize(value: Localized, locale: Locale) {
  return value[locale];
}

export function StaysBPageContent({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <main className="trip-page stays-b-page" lang={locale}>
      <TripHeader active="stays" locale={locale} languageSegment="stays-b/" />
      <StayPlanTabs active="b" locale={locale} />

      <section className="stays-hero stays-b-hero">
        <img src={resortCandidates[0].images[0]} alt={c.heroAlt} />
        <div className="stays-hero-overlay" />
        <div className="site-shell stays-hero-copy">
          <div className="status-line light-line">
            <span className="status-badge review">{c.reviewStatus}</span>
            <span>{c.updated}</span>
          </div>
          <p className="overline">STAY PLAN B · 2 + 2 NIGHTS</p>
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
          {c.ruleItems.map(([title, description], index) => (
            <div key={title}><span>0{index + 1}</span><p><b>{title}</b>{description}</p></div>
          ))}
        </div>
      </section>

      <section className="site-shell b-team-section">
        <div className="section-heading compact">
          <p className="overline">WHO ARRIVES WHEN</p>
          <h2>{c.teamTitle}</h2>
          <p>{c.teamDesc}</p>
        </div>
        <div className="b-team-grid">
          <article>
            <span>TEAM A · THU</span>
            <h3>{english ? "3 adults arrive first" : "성인 3명 먼저 도착"}</h3>
            <p>{english ? "Mother starts in one room; the sister and her husband use the other. The same two rooms remain booked for both resort nights." : "첫날은 장모님 1실, 처제 부부 1실로 시작합니다. 같은 두 객실을 목요일과 금요일 이틀 모두 이어서 사용합니다."}</p>
            <b>{english ? "Keep the same 2 rooms for both nights" : "같은 방 2개를 목·금 모두 사용"}</b>
          </article>
          <article>
            <span>TEAM B · FRI AM</span>
            <h3>{english ? "2 adults + two 6-year-olds join" : "성인 2명 + 6세 여아 2명 합류"}</h3>
            <p>{english ? "Arrive early Friday, join the resort day, then redistribute all seven guests across the same two rooms. No third room is added." : "금요일 아침 일찍 도착해 리조트 일정에 합류한 뒤, 7명이 기존 두 객실 안에서 적절히 나눠 잡니다. 세 번째 방은 추가하지 않습니다."}</p>
            <b>{english ? "Still only 2 rooms · no extra room" : "금요일도 방은 2개뿐 · 추가 객실 없음"}</b>
          </article>
          <article className="accent">
            <span>ALL FAMILY · SAT–MON</span>
            <h3>{english ? "All seven move to one villa" : "7명 모두 풀빌라로 이동"}</h3>
            <p>{english ? "One 3-bedroom pool villa for Saturday and Sunday nights, with a shared living room and private pool." : "토요일과 일요일은 3베드룸 풀빌라 한 채에서 거실과 전용 풀을 함께 씁니다."}</p>
            <b>{english ? "1 villa × 2 nights" : "풀빌라 1채 × 2박"}</b>
          </article>
        </div>
      </section>

      <section className="b-budget-section">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">BUDGET MATH</p>
            <h2>{c.budgetTitle}</h2>
            <p>{c.budgetDesc}</p>
          </div>
          <div className="b-budget-math">
            <div><span>01</span><small>{english ? "Resort" : "리조트"}</small><strong>{english ? "2 rooms · 2 nights" : "방 2개 · 2박"}</strong><p>{english ? "Total room target ≤ KRW 720K" : "객실료 합계 목표 72만 원 이하"}</p></div>
            <i>+</i>
            <div><span>02</span><small>{english ? "Pool villa" : "풀빌라"}</small><strong>{english ? "3BR · 2 nights" : "3BR · 2박"}</strong><p>{english ? "Target ≤ KRW 1.1M" : "목표 110만 원 이하"}</p></div>
            <i>=</i>
            <div className="total"><span>03</span><small>{english ? "Total ceiling" : "총 상한"}</small><strong>{english ? "KRW 2M" : "200만 원"}</strong><p>{english ? "Taxes included" : "세금 포함 기준"}</p></div>
          </div>
        </div>
      </section>

      <section className="site-shell b-resort-section">
        <div className="section-heading compact">
          <p className="overline">RESORT SHORTLIST</p>
          <h2>{c.resortTitle}</h2>
          <p>{c.resortDesc}</p>
        </div>
        <div className="b-resort-grid">
          {resortCandidates.map((resort) => (
            <article className="b-resort-card" key={resort.name}>
              <div className="candidate-gallery">
                {resort.images.map((src, index) => <div className="candidate-image" key={src}><img src={src} alt={`${resort.name} ${index + 1}`} /></div>)}
                <span className={`status-badge ${resort.rank === 1 ? "available" : resort.rank === 2 ? "watch" : "ready"}`}>{localize(resort.status, locale)}</span>
                <b>{resort.rank}</b>
                <small>{c.photoSource}</small>
              </div>
              <div className="candidate-copy">
                <div className="score-line"><span>PLAN B SCORE</span><strong>{resort.score}</strong><small>/100</small></div>
                <h3>{resort.name}</h3>
                <p className="candidate-price">{localize(resort.price, locale)}</p>
                <small>{localize(resort.priceNote, locale)}</small>
                <p className="candidate-fit">{localize(resort.fit, locale)}</p>
                <div className="tag-list">{resort.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div>
                <p className="b-risk"><b>{c.riskLabel}</b>{localize(resort.risk, locale)}</p>
                <a className="text-link" href={resort.href} target="_blank" rel="noreferrer">{c.officialLink}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="b-pairing-section">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">FINAL COMBINATIONS</p>
            <h2>{c.pairingTitle}</h2>
            <p>{c.pairingDesc}</p>
          </div>
          <div className="b-pairing-list">
            {[...pairings].sort((a, b) => a.rank - b.rank).map((pairing) => (
              <article className="finalist-card" key={pairing.rank}>
                <div className="finalist-header">
                  <div className="finalist-rank"><span>0{pairing.rank}</span><b>FINALIST</b></div>
                  <div className="finalist-title"><h3>{pairing.title}</h3><p>{localize(pairing.subtitle, locale)}</p></div>
                  <div className="finalist-score"><strong>{pairing.score}</strong><span>/100</span></div>
                </div>
                <div className="photo-grid">
                  {pairing.images.map((src, index) => <img src={src} alt={`${pairing.title} ${index + 1}`} key={src} />)}
                  <span>{c.photoSource}</span>
                </div>
                <div className="finalist-verdict">
                  <p>{localize(pairing.verdict, locale)}</p>
                  <div><strong>{localize(pairing.total, locale)}</strong><span>{localize(pairing.math, locale)}</span></div>
                </div>
                <div className="finalist-info-grid b-pairing-info">
                  <div><h4>{c.strengths}</h4><ul className="positive-list">{pairing.strengths[locale].map((item) => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>{c.watch}</h4><ul className="risk-list">{pairing.watch[locale].map((item) => <li key={item}>{item}</li>)}</ul></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell location-section">
        <div className="section-heading compact">
          <p className="overline">LOCATION &amp; MOVE</p>
          <h2>{c.locationTitle}</h2>
          <p>{c.locationDesc}</p>
        </div>
        <div className="location-layout">
          <StayMap locations={locations} label={c.mapAria} />
          <div className="location-list">
            {locations.map((location) => (
              <a href={location.map} target="_blank" rel="noreferrer" key={location.id}>
                <span>{location.id}</span>
                <div><b>{location.name}</b><small>{localize(location.note, locale)}</small></div>
                <i>{c.mapOpen}</i>
              </a>
            ))}
          </div>
        </div>
        <p className="map-note">{c.mapNote}</p>
      </section>

      <section className="b-schedule-section">
        <div className="site-shell b-schedule-layout">
          <div className="section-heading inverse">
            <p className="overline">FOUR-NIGHT FLOW</p>
            <h2>{c.scheduleTitle}</h2>
            <p>{c.scheduleDesc}</p>
          </div>
          <ol className="b-schedule-list">
            <li><span>THU · 2/4</span><p><b>{english ? "Team A checks into the resort" : "A팀 리조트 체크인"}</b>{english ? "Two rooms, light dinner and an early resort night." : "2개 객실을 잡고, 가벼운 저녁 뒤 리조트에서 쉽니다."}</p></li>
            <li><span>FRI · 2/5</span><p><b>{english ? "Team B joins early" : "B팀 아침 합류"}</b>{english ? "Leave luggage, have brunch, then spend the afternoon and evening at the resort." : "짐을 맡기고 브런치 뒤 오후부터 리조트 시설을 충분히 씁니다."}</p></li>
            <li><span>SAT · 2/6</span><p><b>{english ? "One accommodation move" : "숙소 이동은 이날 한 번"}</b>{english ? "Checkout → lunch → groceries → pool-villa check-in. No major sightseeing." : "체크아웃 → 점심 → 장보기 → 풀빌라 체크인. 큰 관광은 넣지 않습니다."}</p></li>
            <li><span>SUN · 2/7</span><p><b>{english ? "Full villa day" : "풀빌라 온전한 하루"}</b>{english ? "Private pool and family time first; Hoi An only if everyone wants it." : "전용 풀과 가족 시간을 우선하고, 모두 원할 때만 호이안을 가볍게 다녀옵니다."}</p></li>
            <li><span>MON · 2/8</span><p><b>{english ? "Checkout and airport" : "체크아웃 후 공항"}</b>{english ? "Keep the final morning calm and avoid adding another transfer." : "마지막 아침은 여유 있게 보내고 추가 동선을 만들지 않습니다."}</p></li>
          </ol>
        </div>
      </section>

      <section className="site-shell evidence-library">
        <div className="section-heading compact">
          <p className="overline">SOURCES</p>
          <h2>{c.sourceTitle}</h2>
          <p>{c.sourceDesc}</p>
        </div>
        <div className="evidence-grid">
          {sources.map((group) => (
            <article key={group.title.ko}>
              <h3>{localize(group.title, locale)}</h3>
              {group.links.map((link) => <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} key={link.href}><span>{localize(link.label, locale)}</span><b>↗</b></a>)}
            </article>
          ))}
        </div>
        <p className="research-disclaimer">{c.disclaimer}</p>
      </section>

      <section className="site-shell b-final-callout">
        <div><p className="overline">BOTTOM LINE</p><h2>{c.nextTitle}</h2><p>{c.nextDesc}</p></div>
        <Link className="secondary-link" href={`${base}stays/`}>{c.aLink}</Link>
      </section>

      <footer className="trip-footer site-shell">
        <Link href={base}>{c.homeLink}</Link>
        <span>{c.footer}</span>
      </footer>
    </main>
  );
}

export default function StaysBPage() {
  return <StaysBPageContent locale="ko" />;
}
