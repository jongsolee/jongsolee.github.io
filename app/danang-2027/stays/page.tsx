import type { Metadata } from "next";
import Link from "next/link";
import TripHeader from "../_components/TripHeader";
import StayMap from "../_components/StayMap";
import StayPlanTabs from "../_components/StayPlanTabs";

export const metadata: Metadata = {
  title: "다낭 숙소 후보 검토",
  description: "2027년 설 4박, 성인 5명과 6세 어린이 2명을 위한 다낭 풀빌라 후보 비교",
};

const agodaDates = "?adults=5&children=2&rooms=1&checkIn=2027-02-04&childAges=6,6&currencyCode=KRW&los=4";

const candidates = [
  {
    rank: 1,
    score: 91,
    name: "The Ocean Villas",
    sub: "Managed by The Ocean Resort",
    images: [
      "/danang-2027/stays-a/ocean-1.png",
      "/danang-2027/stays-a/ocean-2.jpg",
      "/danang-2027/stays-a/ocean-3.jpg",
    ],
    status: "예산 근접",
    tone: "available",
    price: "약 208.5만 원",
    priceNote: "3BR 풀빌라 · 세금 포함 표시 × 4박",
    fit: "요건에 가장 정확히 부합",
    tags: ["3베드룸", "전용 풀", "버기", "전용 해변"],
    href: `https://www.agoda.com/ko-kr/the-ocean-villas/hotel/da-nang-vn.html${agodaDates}`,
  },
  {
    rank: 2,
    score: 85,
    name: "Luxury Family Beach Da Nang",
    sub: "Furama 단지 · 사설 운영",
    images: [
      "/danang-2027/stays-a/furama-1.jpg",
      "/danang-2027/stays-a/furama-2.jpg",
      "/danang-2027/stays-a/furama-3.jpg",
    ],
    status: "특가 관찰",
    tone: "watch",
    price: "특가 목표 200만 원 이하",
    priceNote: "일반 참고가 4박 140–180만 원대 · 설 가격 미확인",
    fit: "시설·위치 우수, 운영 주체 확인 필수",
    tags: ["3베드룸", "전용 풀", "Furama 시설", "시내 접근"],
    href: `https://www.agoda.com/ko-kr/s-fuurama-3-bedrooms-deluxe-garden-villa-da-nang/hotel/da-nang-vn.html${agodaDates}`,
  },
  {
    rank: 3,
    score: 82,
    name: "Abogo Resort Villas Luxury",
    sub: "Furama 단지 · 사설 운영",
    images: [
      "/danang-2027/stays-a/abogo-1.jpg",
      "/danang-2027/stays-a/abogo-2.jpg",
      "/danang-2027/stays-a/abogo-3.jpg",
    ],
    status: "조건 확인",
    tone: "watch",
    price: "특가 목표 200만 원 이하",
    priceNote: "정확한 설 가격은 별도 확인",
    fit: "7인 실숙박 후기가 강점, 운영 리스크 존재",
    tags: ["3베드룸", "전용 풀", "버기", "한국어 응대 후기"],
    href: `https://www.agoda.com/ko-kr/the-abogi-resort-villa-beach/hotel/da-nang-vn.html${agodaDates}`,
  },
  {
    rank: 4,
    score: 80,
    name: "Aurora Villa",
    sub: "미케비치 인근 도심형 단독 빌라",
    images: [
      "/danang-2027/stays-a/aurora-1.jpg",
      "/danang-2027/stays-a/aurora-2.jpg",
      "/danang-2027/stays-a/aurora-3.jpg",
    ],
    status: "예산 안전판",
    tone: "available",
    price: "약 127.5만 원",
    priceNote: "4BR 단독 풀빌라 · 세금 포함 표시 × 4박",
    fit: "가격·공간·위치 우수, 리조트 시설 없음",
    tags: ["4베드룸", "전용 풀", "킹베드 4", "도심 접근"],
    href: `https://www.agoda.com/ko-kr/aurora-villa-5-mins-to-beach-managed-by-the-key/hotel/da-nang-vn.html${agodaDates}`,
  },
  {
    rank: 5,
    score: 78,
    name: "Naman Retreat",
    sub: "3베드룸 아파트 기준",
    images: [
      "/danang-2027/stays-a/naman-1.jpg",
      "/danang-2027/stays-a/naman-2.jpg",
      "/danang-2027/stays-a/naman-3.jpg",
    ],
    status: "비교 후보",
    tone: "over",
    price: "약 227.7만 원",
    priceNote: "3BR 아파트 · 조식 포함 · 풀빌라 가격 미확인",
    fit: "리조트는 좋지만 현재는 전용 풀이 아님",
    tags: ["3베드룸", "조식", "키즈클럽", "스파"],
    href: `https://www.agoda.com/ko-kr/naman-retreat-resort/hotel/da-nang-vn.html${agodaDates}`,
  },
  {
    rank: 6,
    score: 74,
    name: "Danang Ocean Beach Resort",
    sub: "Ocean Villas 단지 · 2BR 아파트",
    images: [
      "/danang-2027/stays-a/ocean-beach-1.jpg",
      "/danang-2027/stays-a/ocean-beach-2.jpg",
      "/danang-2027/stays-a/ocean-beach-3.jpg",
    ],
    status: "예산 대안",
    tone: "available",
    price: "약 123.0만 원",
    priceNote: "조식 포함 약 158.5만 원 · 간이침대 별도",
    fit: "리조트 예산안, 2베드·전용 풀 없음",
    tags: ["2베드룸", "공용 풀", "전용 해변", "버기"],
    href: `https://www.agoda.com/ko-kr/danang-ocean-beach-resort/hotel/da-nang-vn.html${agodaDates}`,
  },
];

const candidateTranslations = [
  {
    sub: "Managed by The Ocean Resort",
    status: "Near budget",
    price: "Approx. KRW 2.085M",
    priceNote: "3BR pool villa · displayed tax-inclusive total × 4 nights",
    fit: "Closest match to the brief",
    tags: ["3 bedrooms", "Private pool", "Buggy", "Private beach"],
  },
  {
    sub: "Furama compound · private operator",
    status: "Watch for a deal",
    price: "Deal target ≤ KRW 2M",
    priceNote: "Typical 4-night reference KRW 1.4–1.8M · holiday price not verified",
    fit: "Strong facilities and location; verify the operator",
    tags: ["3 bedrooms", "Private pool", "Furama facilities", "City access"],
  },
  {
    sub: "Furama compound · private operator",
    status: "Verify terms",
    price: "Deal target ≤ KRW 2M",
    priceNote: "Exact Lunar New Year price to be checked separately",
    fit: "A matching 7-person review, but operator risk remains",
    tags: ["3 bedrooms", "Private pool", "Buggy", "Korean support reviews"],
  },
  {
    sub: "Standalone city villa near My Khe Beach",
    status: "Budget fallback",
    price: "Approx. KRW 1.275M",
    priceNote: "4BR standalone pool villa · displayed tax-inclusive total × 4 nights",
    fit: "Great price, space and location; no resort campus",
    tags: ["4 bedrooms", "Private pool", "4 king beds", "City access"],
  },
  {
    sub: "Based on the 3-bedroom apartment",
    status: "Comparison only",
    price: "Approx. KRW 2.277M",
    priceNote: "3BR apartment · breakfast included · pool-villa price not verified",
    fit: "Excellent resort, but this room has no private pool",
    tags: ["3 bedrooms", "Breakfast", "Kids club", "Spa"],
  },
  {
    sub: "Ocean Villas compound · 2BR apartment",
    status: "Budget option",
    price: "Approx. KRW 1.230M",
    priceNote: "Breakfast option approx. KRW 1.585M · extra bed separate",
    fit: "Resort-value option, but only 2BR and no private pool",
    tags: ["2 bedrooms", "Shared pool", "Private beach", "Buggy"],
  },
];

const candidatesEn = candidates.map((candidate, index) => ({ ...candidate, ...candidateTranslations[index]! }));

const stayLocations = [
  {
    id: "1·6",
    name: "The Ocean Villas 단지",
    latitude: 15.9744903,
    longitude: 108.2801621,
    candidates: "후보 1 · 후보 6",
    note: "리조트 중심 휴양 · 호이안 방향 접근 유리",
    map: "https://www.google.com/maps/search/?api=1&query=The%20Ocean%20Villas%20Da%20Nang",
  },
  {
    id: "2·3",
    name: "Furama Villas 단지",
    latitude: 16.03995,
    longitude: 108.25109,
    candidates: "후보 2 · 후보 3",
    note: "해변 리조트와 다낭 시내 접근의 균형",
    map: "https://www.google.com/maps/search/?api=1&query=Furama%20Villas%20Danang",
  },
  {
    id: "4",
    name: "Aurora Villa",
    latitude: 16.0758585,
    longitude: 108.2321456,
    candidates: "후보 4",
    note: "한시장·한강·시내 식당 접근이 가장 편함",
    map: "https://www.google.com/maps/search/?api=1&query=37%20Hoang%20Si%20Khai%20Da%20Nang",
  },
  {
    id: "5",
    name: "Naman Retreat",
    latitude: 15.969715,
    longitude: 108.28425,
    candidates: "후보 5",
    note: "Ocean과 가까운 남쪽 리조트 벨트",
    map: "https://www.google.com/maps/search/?api=1&query=Naman%20Retreat%20Da%20Nang",
  },
];

const stayLocationTranslations = [
  { name: "The Ocean Villas compound", candidates: "Candidates 1 and 6", note: "Resort-first stay · easier access toward Hoi An" },
  { name: "Furama Villas compound", candidates: "Candidates 2 and 3", note: "A good balance of beach resort and city access" },
  { name: "Aurora Villa", candidates: "Candidate 4", note: "Best access to Han Market, the riverfront and city restaurants" },
  { name: "Naman Retreat", candidates: "Candidate 5", note: "Southern resort belt, very close to The Ocean Villas" },
];

const stayLocationsEn = stayLocations.map((location, index) => ({ ...location, ...stayLocationTranslations[index]! }));

const finalists = [
  {
    rank: "01",
    score: 91,
    label: "최종 1순위",
    name: "The Ocean Villas",
    room: "Three Bedroom Pool Villa",
    verdict: "현재 확인된 후보 중 유일하게 ‘원하는 숙소’와 ‘예산’을 거의 동시에 맞춥니다.",
    price: "현재 표시 약 2,085,300원",
    target: "예약 목표 ≤ 2,000,000원",
    images: [
      "/danang-2027/stays-a/ocean-1.png",
      "/danang-2027/stays-a/ocean-2.jpg",
      "/danang-2027/stays-a/ocean-3.jpg",
    ],
    facts: [
      "373㎡ · 침실 3 · 욕실 3 · 전용 수영장",
      "공식 수용 기준 성인 6 + 어린이 2",
      "공용 풀·전용 해변·레스토랑·스파·버기",
      "다낭 시내와 호이안 사이의 조용한 리조트 구역",
    ],
    positives: [
      "아고다 8.3/10 · 1,886건, 서비스 8.9",
      "트립어드바이저 4.2/5 · 351건",
      "최근 가족 후기에서 넓은 공간·전용 풀·빠른 메신저 응대 호평",
    ],
    risks: [
      "빌라별 연식·가구 상태 편차와 습기 냄새 지적이 있음",
      "시내 주요 식당은 차량 15–30분",
      "Agoda 인원 표기가 6성인+1아동으로 변환돼 5+2 승인 서면 확인 필요",
    ],
    links: [
      ["3BR 공식 객실", "https://theoceanvillas.com.vn/accommodation/three-bedroom-pool-villa/"],
      ["정확한 날짜 가격", `https://www.agoda.com/ko-kr/the-ocean-villas/hotel/da-nang-vn.html${agodaDates}`],
      ["Booking 검증 후기", "https://www.booking.com/reviews/vn/hotel/the-ocean-villas.html"],
      ["Tripadvisor 351건", "https://www.tripadvisor.com/Hotel_Review-g26818864-d2298509-Reviews-Danang_Ocean_Villas_Beach_Resort-Hoa_Hai_Da_Nang.html"],
      ["한국어 객실 후기", "https://www.tripadvisor.co.kr/Hotel_Feature-g26818864-d2298509-zft1-Danang_Ocean_Villas_Beach_Resort.html"],
      ["부정 후기 교차확인", "https://www.tripadvisor.com/Hotel_Review-g298085-d25362858-Reviews-The_Ocean_Villas-Da_Nang.html"],
    ],
  },
  {
    rank: "02",
    score: 85,
    label: "특가 대기 1순위",
    name: "Luxury Family Beach Da Nang",
    room: "3 Bedroom Pool Villa · Furama 단지",
    verdict: "리조트 위치와 객실 구성이 좋고 평점도 높지만, 사설 운영 범위를 계약 전에 확정해야 합니다.",
    price: "일반 참고가 4박 140–180만 원대",
    target: "설 연휴 목표 ≤ 2,000,000원",
    images: [
      "/danang-2027/stays-a/furama-1.jpg",
      "/danang-2027/stays-a/furama-2.jpg",
      "/danang-2027/stays-a/furama-3.jpg",
    ],
    facts: [
      "375㎡ · 침실 3 · 욕실 3 · 전용 수영장",
      "킹 1 + 싱글 4 · 최대 성인 7명",
      "Furama의 라군풀·오션풀·해변·식음 시설 접근",
      "공항 약 15분, 한시장·시내 접근은 Ocean보다 유리",
    ],
    positives: [
      "아고다 8.9/10 · 84건, 위치 9.4·서비스 9.1",
      "어린이의 전용 풀·대형 풀 만족과 한적한 해변 호평",
      "한국 가격 자료는 3BR 일반 시기 1박 35–45만 원대",
    ],
    risks: [
      "Furama 직영이 아닌 단일 빌라 사설 운영",
      "리조트 조식·키즈룸·버기·공용 시설이 모두 포함인지 서면 확인",
      "사설 Furama 상품에서 침구·주방·유지보수 불만 사례가 확인됨",
    ],
    links: [
      ["Agoda 숙소·후기", `https://www.agoda.com/ko-kr/s-fuurama-3-bedrooms-deluxe-garden-villa-da-nang/hotel/da-nang-vn.html${agodaDates}`],
      ["Furama 검증 후기 531건", "https://www.booking.com/reviews/vn/hotel/furama-resort-danang.en-gb.html"],
      ["Furama Villas 후기 318건", "https://kr.hotels.com/ho463785/pulama-billaseu-danang-danang-beteunam/"],
      ["한국인 3BR 후기", "https://www.yeogi.com/overseas-accommodations/345154"],
      ["한국 가격 참고", "https://maybay.co.kr/danang-pool-villa/"],
      ["사설 운영 부정 사례", "https://www.agoda.com/ko-kr/purama-villas-da-nang-beachfront-resort-spa/hotel/da-nang-vn.html"],
    ],
  },
  {
    rank: "03",
    score: 82,
    label: "조건부 후보",
    name: "Abogo Resort Villas Luxury",
    room: "3 Bedroom Private Pool Villa · Furama 단지",
    verdict: "정확히 같은 ‘성인 5 + 아이 2, 4박’ 호평이 있지만 예약 주체 확인이 가장 중요합니다.",
    price: "2027 설 가격 재확인 필요",
    target: "특가 목표 ≤ 1,800,000원",
    images: [
      "/danang-2027/stays-a/abogo-1.jpg",
      "/danang-2027/stays-a/abogo-2.jpg",
      "/danang-2027/stays-a/abogo-3.jpg",
    ],
    facts: [
      "침실 3 · 킹 1 + 싱글 4 · 전용 수영장",
      "Furama 단지 내 해변·공용 풀·레스토랑 접근 표기",
      "한국어 메신저 응대와 빌라 내 조식 관련 호평",
      "다낭 시내와 해변 접근성이 세 후보 중 가장 편함",
    ],
    positives: [
      "아고다 8.2/10 · 33건, 서비스·가성비 8.7",
      "Mytour 9.2/10 · 검증 후기 8건",
      "성인 5·아이 2의 4박 숙박이 편했다는 정확한 인원 후기",
    ],
    risks: [
      "후기 수가 적고 플랫폼별 평점 차이가 큼",
      "Abogo/Furama 예약 인정·운영 주체 관련 강한 부정 사례가 있음",
      "예약 전 Furama 프런트에 바우처 유효성과 시설 이용권을 직접 재확인해야 함",
    ],
    links: [
      ["Agoda 숙소·후기", `https://www.agoda.com/ko-kr/the-abogi-resort-villa-beach/hotel/da-nang-vn.html${agodaDates}`],
      ["Mytour 검증 후기", "https://mytour.vn/khach-san/danh-gia/48754-abogo-resort-villas-luxury-da-nang.html"],
      ["Tripadvisor 정보", "https://www.tripadvisor.com/Hotel_Review-g298085-d21321518-Reviews-Abogo-Da_Nang.html"],
      ["예약 분쟁 사례", "https://www.readytotrip.com/hotels/Vietnam/Da%20Nang/Da%20Nang/abogo-apartment-resort-beach-da-nang/"],
      ["Furama 직영 후기", "https://www.booking.com/reviews/vn/hotel/furama-villas-danang.en-gb.html"],
    ],
  },
];

const finalistTranslations = [
  {
    label: "Final No. 1",
    room: "Three Bedroom Pool Villa",
    verdict: "The only reviewed option that nearly satisfies both the desired experience and the budget.",
    price: "Price snapshot: approx. KRW 2,085,300",
    target: "Booking target ≤ KRW 2,000,000",
    facts: [
      "373m² · 3 bedrooms · 3 bathrooms · private pool",
      "Official capacity: 6 adults + 2 children",
      "Shared pools, private beach, restaurant, spa and buggy",
      "Quiet resort area between central Da Nang and Hoi An",
    ],
    positives: [
      "Agoda 8.3/10 from 1,886 reviews; service 8.9",
      "Tripadvisor 4.2/5 from 351 reviews",
      "Recent family reviews praise the space, private pool and quick messaging support",
    ],
    risks: [
      "Age, furniture and damp smell can vary between individual villas",
      "Most central-city restaurants are 15–30 minutes away by car",
      "Agoda converts the party to 6 adults + 1 child; written approval for 5+2 is required",
    ],
    linkLabels: ["Official 3BR villa", "Exact-date price search", "Verified Booking reviews", "351 Tripadvisor reviews", "Korean room reviews", "Negative-review cross-check"],
  },
  {
    label: "Deal-watch No. 1",
    room: "3 Bedroom Pool Villa · Furama compound",
    verdict: "The location and villa layout are strong, but the private operator’s access rights must be confirmed in writing.",
    price: "Typical 4-night reference: KRW 1.4–1.8M",
    target: "Lunar New Year target ≤ KRW 2,000,000",
    facts: [
      "375m² · 3 bedrooms · 3 bathrooms · private pool",
      "1 king + 4 single beds · up to 7 adults",
      "Access listed for Furama lagoon pool, ocean pool, beach and dining",
      "About 15 minutes from the airport; easier city access than The Ocean Villas",
    ],
    positives: [
      "Agoda 8.9/10 from 84 reviews; location 9.4 and service 9.1",
      "Families praise the private pool, large pools and quiet beach",
      "Korean pricing references show KRW 350–450K per night in regular periods",
    ],
    risks: [
      "A privately operated villa, not managed directly by Furama",
      "Confirm breakfast, kids room, buggy and shared-facility access in writing",
      "Private Furama listings include complaints about linen, kitchen and maintenance",
    ],
    linkLabels: ["Agoda property and reviews", "531 verified Furama reviews", "318 Furama Villas reviews", "Korean 3BR family review", "Korean price reference", "Private-operator negative case"],
  },
  {
    label: "Conditional option",
    room: "3 Bedroom Private Pool Villa · Furama compound",
    verdict: "A review matches our exact party of five adults and two children for four nights, but the booking entity needs the strongest verification.",
    price: "Lunar New Year price to be reconfirmed",
    target: "Deal target ≤ KRW 1,800,000",
    facts: [
      "3 bedrooms · 1 king + 4 single beds · private pool",
      "Beach, shared pools and restaurants in the Furama compound are listed",
      "Positive mentions of Korean messaging support and in-villa breakfast",
      "The easiest city and beach access among the final three",
    ],
    positives: [
      "Agoda 8.2/10 from 33 reviews; service and value 8.7",
      "Mytour 9.2/10 from 8 verified reviews",
      "A matching review says five adults and two children were comfortable for four nights",
    ],
    risks: [
      "Few reviews and noticeable score differences between platforms",
      "A serious complaint exists about Abogo/Furama booking recognition and the operator",
      "Ask Furama reception to confirm the voucher and facility rights before payment",
    ],
    linkLabels: ["Agoda property and reviews", "Mytour verified reviews", "Tripadvisor information", "Booking-dispute report", "Furama-direct reviews"],
  },
];

const finalistsEn = finalists.map((finalist, index) => {
  const translation = finalistTranslations[index]!;
  return {
    ...finalist,
    ...translation,
    links: finalist.links.map(([, href], linkIndex) => [translation.linkLabels[linkIndex]!, href]),
  };
});

const scoreRows = [
  ["빌라 요건", "25", "3BR·침대·전용 풀·프라이버시"],
  ["리조트 완성도", "25", "버기·공용 풀·해변·식음·키즈"],
  ["컨디션·후기", "20", "청결·관리 편차·최근 검증 후기"],
  ["가족 적합성", "15", "5+2 수용·욕실·응대·안전"],
  ["가격 현실성", "10", "4박 200만 원 접근 가능성"],
  ["위치", "5", "공항·시내·호이안 접근"],
];

const scoreRowsEn = [
  ["Villa fit", "25", "3BR, beds, private pool and privacy"],
  ["Resort experience", "25", "Buggy, pools, beach, dining and kids"],
  ["Condition and reviews", "20", "Cleanliness, upkeep variation and recent verified reviews"],
  ["Family fit", "15", "Capacity for 5+2, bathrooms, support and safety"],
  ["Budget fit", "10", "Chance of staying near KRW 2M for four nights"],
  ["Location", "5", "Access to airport, city and Hoi An"],
];

const evidenceGroups = [
  {
    title: "가격 자료",
    items: [
      ["Agoda 정확한 날짜 검색", "https://www.agoda.com/ko-kr/search?city=16440&checkIn=2027-02-04&checkOut=2027-02-08&los=4&rooms=1&adults=5&children=2&childages=6%2C6"],
      ["한국 2027 설 공식 달력", "https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431"],
      ["베트남 2027 Tet 날짜", "https://www.timeanddate.com/holidays/vietnam/2027"],
      ["다낭 풀빌라 일반 가격 비교", "https://maybay.co.kr/danang-pool-villa/"],
      ["Furama 한국 판매 참고", "https://flydanang.com/villa/1"],
    ],
  },
  {
    title: "Ocean Villas",
    items: [
      ["3BR 공식 구조", "https://theoceanvillas.com.vn/accommodation/three-bedroom-pool-villa/"],
      ["Booking 최근 검증 후기", "https://www.booking.com/reviews/vn/hotel/the-ocean-villas.html"],
      ["Tripadvisor 351건", "https://www.tripadvisor.com/Hotel_Review-g26818864-d2298509-Reviews-Danang_Ocean_Villas_Beach_Resort-Hoa_Hai_Da_Nang.html"],
      ["한국어 객실 후기", "https://www.tripadvisor.co.kr/Hotel_Feature-g26818864-d2298509-zft1-Danang_Ocean_Villas_Beach_Resort.html"],
      ["커뮤니티 의문·반론", "https://www.reddit.com/r/DaNang/comments/1t5hl57/dananghoi_an_villa_close_to_beach/"],
    ],
  },
  {
    title: "Furama 계열",
    items: [
      ["Booking 리조트 후기 531건", "https://www.booking.com/reviews/vn/hotel/furama-resort-danang.en-gb.html"],
      ["Hotels.com 빌라 후기 318건", "https://kr.hotels.com/ho463785/pulama-billaseu-danang-danang-beteunam/"],
      ["Tripadvisor 최신 후기", "https://www.tripadvisor.com/Hotel_Review-g298085-d12404186-Reviews-Furama_Villas_Danang-Da_Nang.html"],
      ["한국인 어린이 동반 후기", "https://www.booking.com/reviews/vn/hotel/furama-resort-danang.ko.html"],
      ["사설 운영 유지보수 경고", "https://www.agoda.com/ko-kr/purama-villas-da-nang-beachfront-resort-spa/hotel/da-nang-vn.html"],
      ["2026 커뮤니티 비교", "https://www.reddit.com/r/DaNang/comments/1tbp8uy/where_to_stay/"],
    ],
  },
  {
    title: "비교용 리조트",
    items: [
      ["Naman Agoda 5천여 후기", `https://www.agoda.com/ko-kr/naman-retreat-resort/hotel/da-nang-vn.html${agodaDates}`],
      ["Furama·Naman·Fusion 커뮤니티", "https://www.reddit.com/r/DaNang/comments/1t9cmlk/feedback_for_resorts/"],
      ["Hyatt 어린이 동반 후기", "https://www.famileetravel.com/hyatt-regency-da-nang-resort-with-kids-review/"],
    ],
  },
  {
    title: "위치 확인",
    items: [
      ["Ocean Villas 지도", "https://www.google.com/maps/search/?api=1&query=The%20Ocean%20Villas%20Da%20Nang"],
      ["Furama Villas 지도", "https://www.google.com/maps/search/?api=1&query=Furama%20Villas%20Danang"],
      ["Aurora 주소·위치", "https://www.booking.com/hotel/vn/aurora-villa-i-5-min-to-beach-i-city-center-i-full-ac.en-gb.html"],
      ["Naman 공식 주소", "https://namanretreat.com/en/contactus"],
    ],
  },
];

const evidenceGroupTranslations = [
  {
    title: "Price references",
    labels: ["Agoda exact-date search", "Official Korean 2027 holiday calendar", "Vietnam 2027 Tet dates", "Typical Da Nang pool-villa prices", "Korean Furama sales reference"],
  },
  {
    title: "Ocean Villas",
    labels: ["Official 3BR layout", "Recent verified Booking reviews", "351 Tripadvisor reviews", "Korean room reviews", "Community questions and counterpoints"],
  },
  {
    title: "Furama options",
    labels: ["531 Booking resort reviews", "318 Hotels.com villa reviews", "Recent Tripadvisor reviews", "Korean family reviews", "Private-operator maintenance warning", "2026 community comparison"],
  },
  {
    title: "Comparison resorts",
    labels: ["More than 5,000 Naman reviews on Agoda", "Furama, Naman and Fusion discussion", "Hyatt review with children"],
  },
  {
    title: "Location checks",
    labels: ["Ocean Villas map", "Furama Villas map", "Aurora address and location", "Official Naman address"],
  },
];

const evidenceGroupsEn = evidenceGroups.map((group, groupIndex) => {
  const translation = evidenceGroupTranslations[groupIndex]!;
  return {
    title: translation.title,
    items: group.items.map(([, href], itemIndex) => [translation.labels[itemIndex]!, href]),
  };
});

const staysCopy = {
  ko: {
    reviewStatus: "검토 중",
    priceSnapshot: "가격 스냅샷 · 2026. 8. 2",
    heroTitleFirst: "2027 설 다낭",
    heroTitleSecond: "풀빌라 후보 검토",
    heroSummary: "4박 · 성인 5명 · 만 6세 어린이 2명 · 숙소 예산 200만 원 이내",
    heroAlt: "The Ocean Villas 3베드룸 풀빌라",
    verdictBadge: "A안 1순위",
    verdictRoom: "3베드룸 풀빌라",
    verdictText: "현재 확인한 가격 자료 중 ‘3베드룸 + 전용 풀 + 리조트 시설’ 조건에 가장 가까운 후보입니다. 표시 총액은 예산보다 약 8.5만 원 높아 무료 취소 특가를 기다릴 가치가 있습니다.",
    verdictPrice: "약 208.5만 원",
    verdictPriceNote: "세금 포함 표시가 × 4박 · 결제 전 재확인",
    tetLabel: "성수기 주의",
    tetText: "숙박 중 2월 5일은 베트남 Tet 전날, 6일은 새해 첫날입니다. 한국 설 연휴와 겹쳐 평소보다 가격 변동이 큽니다.",
    strategyTitle: "지금의 예약 전략",
    strategyItems: [
      ["Ocean Villas 가격 알림", "200만 원 이하가 되면 우선 예약"],
      ["Furama 사설 빌라 특가 비교", "바우처·시설 이용 범위 확인 후 비교"],
      ["무료 취소 안전판 확보", "Aurora 4BR로 예산 내 대안 유지"],
    ],
    standardTitle: "우리가 원하는 건 ‘방’보다 리조트 단지입니다.",
    standardDesc: "타워형 호텔은 편해도 우선순위가 아닙니다. 아이들이 단지 안을 여행하는 느낌을 기준으로 봤습니다.",
    standardItems: [
      ["독립된 빌라", "문을 열면 정원과 전용 풀이 바로 이어지는 구조"],
      ["버기 타는 재미", "조식당·메인 풀·해변을 버기로 오가는 작은 이벤트"],
      ["단지 안의 발견", "산책길·수로·해변·키즈 공간을 돌아보는 재미"],
      ["리조트 서비스", "청소·조식·스파·응대가 개인 숙소보다 안정적일 것"],
    ],
    towerLabel: "그래서 제외:",
    towerText: "수영장과 객실만 있는 타워형 리조트는 가격이 좋아도 최종 3선에서 제외했습니다.",
    scoringTitle: "숙소 만족도를 우선한 100점 기준",
    scoringDesc: "관광 동선은 5점만 반영했습니다. 객실과 리조트 경험이 점수의 절반입니다.",
    candidateTitle: "먼저 검토한 후보 6곳",
    candidateDesc: "가격이 싼 순서가 아니라, 가족 요구에 맞는 정도로 정렬했습니다.",
    candidatePhotoAlt: "숙소 사진",
    photoCaption: "사진 3장 · Agoda/숙소 제공",
    editorScore: "편집 점수",
    bookingLink: "실제 가격 화면 보기 →",
    priceHowTitle: "가격 읽는 법",
    priceHowText: "예약 화면의 ‘세금 및 수수료 포함 1박 총액 × 4’를 사용했습니다. 어린이·간이침대·조식이 결제 단계에서 추가될 수 있어 최종 결제액이 아니라 비교용 스냅샷입니다.",
    locationTitle: "후보 위치를 지도에서 먼저 보기",
    locationDesc: "같은 리조트 단지의 숙소는 한 핀으로 묶었습니다. 위치는 참고하되 숙소 만족도보다 앞세우지는 않았습니다.",
    mapOpen: "지도 열기 ↗",
    mapNote: "지도 핀은 숙소·예약 플랫폼 주소를 교차 확인한 위치입니다. 실제 차량 시간은 Tet 교통 상황에 따라 달라질 수 있습니다.",
    mapAria: "다낭 숙소 후보 위치 지도",
    finalTitle: "최종 검토 3곳",
    finalDesc: "좋은 후기만 모으지 않고, 실제로 망설여야 할 이유도 같이 적었습니다.",
    actualPhotoAlt: "실제 사진",
    photoSource: "실제 숙소 사진 · 공식/Agoda 제공",
    facilityHeading: "객실·시설",
    positiveHeading: "후기에서 반복된 장점",
    riskHeading: "후기에서 확인한 위험",
    evidenceSummary: "이 숙소의 근거 자료",
    bookingTitle: "결제 전에 이것만은 서면으로",
    bookingDesc: "특히 사설 운영 빌라는 리조트 이름만 보고 결제하면 안 됩니다.",
    bookingItems: [
      ["성인 5 + 만 6세 2명 승인", "추가 침대·조식·아동 비용까지 포함한 최종 총액"],
      ["정확한 빌라 번호와 최근 사진", "곰팡이 냄새·에어컨·수영장 관리 상태"],
      ["리조트 시설 이용 범위", "버기·해변·공용 풀·키즈클럽·조식당 포함 여부"],
      ["예약 주체와 바우처", "리조트 프런트가 예약을 직접 인정하는지 재확인"],
      ["무료 취소 마감일", "더 좋은 특가가 뜨면 갈아탈 수 있는 조건"],
    ],
    sourceTitle: "벤치마크 근거 모음",
    sourceDesc: "공식 자료, 예약 플랫폼 검증 후기, 한국어 후기와 커뮤니티 반론을 함께 확인했습니다.",
    disclaimer: "네이버 블로그·카페는 검색 로봇 접근 제한으로 본문을 직접 검증하지 못한 자료가 있어 점수 근거에서 제외했습니다. 플랫폼 요약과 커뮤니티 글은 개인 경험이므로, 여러 출처에서 반복되는 항목만 판단에 사용했습니다.",
    nextTitle: "A안의 강점은 이동 없는 완전한 사적 휴양입니다.",
    nextDesc: "다만 가족 의견처럼 4박 내내 같은 집·같은 풀이 반복될 수 있습니다. 편안함보다 여행의 장면 변화를 더 원하면 현재 종합 1순위인 D안과 비교하는 것이 맞습니다.",
    nextLink: "D안과 비교하기 →",
    homeLink: "← 여행 홈",
    footer: "가격과 조건은 바뀝니다. 결제 직전 다시 확인합니다.",
  },
  en: {
    reviewStatus: "Under review",
    priceSnapshot: "Price snapshot · Aug 2, 2026",
    heroTitleFirst: "Da Nang 2027",
    heroTitleSecond: "Pool-villa review",
    heroSummary: "4 nights · 5 adults · two children age 6 · stay budget up to KRW 2M",
    heroAlt: "Three-bedroom pool villa at The Ocean Villas",
    verdictBadge: "Plan A No. 1",
    verdictRoom: "Three-bedroom pool villa",
    verdictText: "Of the price references reviewed, this is the closest match to our brief: three bedrooms, a private pool and a full resort campus. The displayed total is about KRW 85K above budget, so it is worth watching for a flexible deal.",
    verdictPrice: "Approx. KRW 2.085M",
    verdictPriceNote: "Displayed tax-inclusive rate × 4 nights · reconfirm before payment",
    tetLabel: "Peak-season note",
    tetText: "Feb 5 is Tet Eve in Vietnam and Feb 6 is New Year’s Day. The stay also overlaps the Korean holiday period, so prices may move more than usual.",
    strategyTitle: "Current booking strategy",
    strategyItems: [
      ["Track The Ocean Villas", "Prioritise it if the total drops to KRW 2M or less"],
      ["Compare private Furama deals", "First verify the voucher and included resort facilities"],
      ["Keep a flexible fallback", "Use the 4BR Aurora Villa as the budget-safe option"],
    ],
    standardTitle: "We want a resort campus, not just a room.",
    standardDesc: "A tower hotel may be convenient, but it is not the priority. The test is whether the children feel they are exploring the resort itself.",
    standardItems: [
      ["A detached villa", "A private garden and pool directly outside the door"],
      ["Buggy rides", "Small adventures between breakfast, the main pool and the beach"],
      ["Things to discover", "Paths, water features, beach and children’s spaces inside the resort"],
      ["Resort service", "More dependable housekeeping, breakfast, spa and support than a standalone rental"],
    ],
    towerLabel: "Excluded from the final three:",
    towerText: "tower resorts that offer only a room and a pool, even when the price is attractive.",
    scoringTitle: "A 100-point score led by stay quality",
    scoringDesc: "Touring convenience is only five points. The room and resort experience account for half of the score.",
    candidateTitle: "The six candidates reviewed first",
    candidateDesc: "Ranked by family fit, not simply from cheapest to most expensive.",
    candidatePhotoAlt: "property photo",
    photoCaption: "3 photos · Agoda/property",
    editorScore: "Review score",
    bookingLink: "Open pricing source →",
    priceHowTitle: "How to read the prices",
    priceHowText: "We used the displayed tax-and-fee-inclusive nightly total × four. Child, extra-bed and breakfast charges can be added later, so these are comparison snapshots rather than final payment totals.",
    locationTitle: "See the candidate locations first",
    locationDesc: "Options in the same resort compound share one pin. Location is useful context, but it does not outweigh the quality of the stay.",
    mapOpen: "Open map ↗",
    mapNote: "Pins were cross-checked against property and booking-platform addresses. Driving times can vary during Tet.",
    mapAria: "Map of the Da Nang stay candidates",
    finalTitle: "The final three",
    finalDesc: "Each option includes reasons to hesitate, not only positive reviews.",
    actualPhotoAlt: "actual property photo",
    photoSource: "Property photos · official/Agoda",
    facilityHeading: "Room and facilities",
    positiveHeading: "Repeated positives in reviews",
    riskHeading: "Risks found in reviews",
    evidenceSummary: "View supporting sources",
    bookingTitle: "Get these points in writing before payment",
    bookingDesc: "For privately operated villas, the resort name alone is not enough.",
    bookingItems: [
      ["Approval for 5 adults + two 6-year-olds", "Final total including child, breakfast and extra-bed charges"],
      ["Exact villa number and recent photos", "Damp smell, air conditioning and pool maintenance"],
      ["Resort facility access", "Buggy, beach, shared pools, kids club and breakfast restaurant"],
      ["Booking entity and voucher", "Ask the resort reception to recognise the booking directly"],
      ["Free-cancellation deadline", "Enough flexibility to switch if a better deal appears"],
    ],
    sourceTitle: "Research source library",
    sourceDesc: "Official information, verified booking reviews, Korean reviews and community counterpoints were checked together.",
    disclaimer: "Naver Blog and Cafe pages blocked direct crawler verification, so inaccessible posts were excluded from scoring. Platform summaries and community posts are personal experiences; only recurring themes across multiple sources were used.",
    nextTitle: "Plan A wins on effortless private downtime.",
    nextDesc: "The trade-off is the family's concern that the same house and pool may start to repeat over four nights. Compare it with overall No. 1 Plan D if variety matters more than maximum ease.",
    nextLink: "Compare Plan D →",
    homeLink: "← Trip home",
    footer: "Prices and terms can change. Reconfirm everything before payment.",
  },
} as const;

export function StaysPageContent({ locale }: { locale: "ko" | "en" }) {
  const copy = staysCopy[locale];
  const english = locale === "en";
  const visibleCandidates = english ? candidatesEn : candidates;
  const visibleLocations = english ? stayLocationsEn : stayLocations;
  const visibleFinalists = english ? finalistsEn : finalists;
  const visibleScoreRows = english ? scoreRowsEn : scoreRows;
  const visibleEvidenceGroups = english ? evidenceGroupsEn : evidenceGroups;
  const tripBase = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <main className="trip-page stays-page" lang={locale}>
      <TripHeader active="stays" locale={locale} />
      <StayPlanTabs active="a" locale={locale} />

      <section className="stays-hero">
        <img src="/danang-2027/stays-a/ocean-1.png" alt={copy.heroAlt} />
        <div className="stays-hero-overlay" />
        <div className="site-shell stays-hero-copy">
          <div className="status-line light-line">
            <span className="status-badge review">{copy.reviewStatus}</span>
            <span>{copy.priceSnapshot}</span>
          </div>
          <p className="overline">ACCOMMODATION REVIEW</p>
          <h1>{copy.heroTitleFirst}<br />{copy.heroTitleSecond}</h1>
          <p>{copy.heroSummary}</p>
        </div>
      </section>

      <section className="site-shell verdict-panel" id="summary">
        <div className="verdict-main">
          <p className="overline">CURRENT VERDICT</p>
          <span className="status-badge available">{copy.verdictBadge}</span>
          <h2>The Ocean Villas<br />{copy.verdictRoom}</h2>
          <p>{copy.verdictText}</p>
          <div className="verdict-price"><strong>{copy.verdictPrice}</strong><span>{copy.verdictPriceNote}</span></div>
          <p className="tet-alert"><b>{copy.tetLabel}</b> {copy.tetText}</p>
        </div>
        <div className="verdict-actions">
          <h3>{copy.strategyTitle}</h3>
          <ol>
            {copy.strategyItems.map(([title, description], index) => (
              <li key={title}><span>{index + 1}</span><p><b>{title}</b>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-shell banyan-standard">
        <div className="section-heading compact">
          <p className="overline">BANYAN-LIKE STANDARD</p>
          <h2>{copy.standardTitle}</h2>
          <p>{copy.standardDesc}</p>
        </div>
        <div className="banyan-standard-grid">
          {copy.standardItems.map(([title, description], index) => (
            <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
        <p className="tower-note"><b>{copy.towerLabel}</b> {copy.towerText}</p>
      </section>

      <section className="site-shell criteria-section">
        <div className="section-heading compact">
          <p className="overline">SCORING</p>
          <h2>{copy.scoringTitle}</h2>
          <p>{copy.scoringDesc}</p>
        </div>
        <div className="score-weight-grid">
          {visibleScoreRows.map(([name, weight, note]) => (
            <div key={name}><strong>{weight}</strong><h3>{name}</h3><p>{note}</p></div>
          ))}
        </div>
      </section>

      <section className="candidate-section" id="candidates">
        <div className="site-shell">
          <div className="section-heading compact">
            <p className="overline">CANDIDATE POOL</p>
            <h2>{copy.candidateTitle}</h2>
            <p>{copy.candidateDesc}</p>
          </div>
          <div className="candidate-grid">
            {visibleCandidates.map((candidate) => (
              <article className="candidate-card" key={candidate.name}>
                <div className="candidate-gallery">
                  {candidate.images.map((image, index) => (
                    <a className="candidate-image" href={candidate.href} target="_blank" rel="noreferrer" key={image}>
                      <img src={image} alt={`${candidate.name} ${copy.candidatePhotoAlt} ${index + 1}`} loading="lazy" decoding="async" />
                    </a>
                  ))}
                  <span className={`status-badge ${candidate.tone}`}>{candidate.status}</span>
                  <b>{candidate.rank}</b>
                  <small>{copy.photoCaption}</small>
                </div>
                <div className="candidate-copy">
                  <div className="score-line"><span>{copy.editorScore}</span><strong>{candidate.score}</strong><small>/100</small></div>
                  <h3>{candidate.name}</h3>
                  <p className="candidate-sub">{candidate.sub}</p>
                  <p className="candidate-price">{candidate.price}</p>
                  <small>{candidate.priceNote}</small>
                  <p className="candidate-fit">{candidate.fit}</p>
                  <div className="tag-list">{candidate.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="text-link" href={candidate.href} target="_blank" rel="noreferrer">{copy.bookingLink}</a>
                </div>
              </article>
            ))}
          </div>
          <div className="price-note"><b>{copy.priceHowTitle}</b><p>{copy.priceHowText}</p></div>
        </div>
      </section>

      <section className="site-shell location-section" id="locations">
        <div className="section-heading compact">
          <p className="overline">LOCATION PREVIEW</p>
          <h2>{copy.locationTitle}</h2>
          <p>{copy.locationDesc}</p>
        </div>
        <div className="location-layout">
          <StayMap locations={visibleLocations} label={copy.mapAria} />
          <div className="location-list">
            {visibleLocations.map((location) => (
              <a href={location.map} target="_blank" rel="noreferrer" key={location.id}>
                <span>{location.id}</span>
                <div><b>{location.name}</b><small>{location.candidates}</small><p>{location.note}</p></div>
                <i>{copy.mapOpen}</i>
              </a>
            ))}
          </div>
        </div>
        <p className="map-note">{copy.mapNote}</p>
      </section>

      <section className="site-shell finalists-section" id="finalists">
        <div className="section-heading compact">
          <p className="overline">FINAL THREE</p>
          <h2>{copy.finalTitle}</h2>
          <p>{copy.finalDesc}</p>
        </div>

        <div className="finalist-list">
          {visibleFinalists.map((stay) => (
            <article className="finalist-card" key={stay.name}>
              <header className="finalist-header">
                <div className="finalist-rank"><span>{stay.rank}</span><b>{stay.label}</b></div>
                <div className="finalist-title"><h3>{stay.name}</h3><p>{stay.room}</p></div>
                <div className="finalist-score"><strong>{stay.score}</strong><span>/100</span></div>
              </header>

              <div className="photo-grid">
                {stay.images.map((image, index) => (
                  <img src={image} alt={`${stay.name} ${copy.actualPhotoAlt} ${index + 1}`} loading="lazy" decoding="async" key={image} />
                ))}
                <span>{copy.photoSource}</span>
              </div>

              <div className="finalist-verdict">
                <p>{stay.verdict}</p>
                <div><strong>{stay.price}</strong><span>{stay.target}</span></div>
              </div>

              <div className="finalist-info-grid">
                <div><h4>{copy.facilityHeading}</h4><ul>{stay.facts.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h4>{copy.positiveHeading}</h4><ul className="positive-list">{stay.positives.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h4>{copy.riskHeading}</h4><ul className="risk-list">{stay.risks.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>

              <details className="evidence-details">
                <summary>{copy.evidenceSummary} {english ? `(${stay.links.length})` : `${stay.links.length}개 보기`}</summary>
                <div>{stay.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label} ↗</a>)}</div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-check-section">
        <div className="site-shell booking-check-grid">
          <div className="section-heading compact inverse">
            <p className="overline">BOOKING GUARD</p>
            <h2>{copy.bookingTitle}</h2>
            <p>{copy.bookingDesc}</p>
          </div>
          <ol className="booking-check-list">
            {copy.bookingItems.map(([title, description], index) => (
              <li key={title}><span>0{index + 1}</span><p><b>{title}</b>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-shell evidence-library" id="sources">
        <div className="section-heading compact">
          <p className="overline">SOURCE LIBRARY</p>
          <h2>{copy.sourceTitle}</h2>
          <p>{copy.sourceDesc}</p>
        </div>
        <div className="evidence-grid">
          {visibleEvidenceGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label}<span>↗</span></a>)}
            </article>
          ))}
        </div>
        <p className="research-disclaimer">{copy.disclaimer}</p>
      </section>

      <section className="site-shell next-page-callout">
        <div><p className="overline">NEXT</p><h2>{copy.nextTitle}</h2><p>{copy.nextDesc}</p></div>
        <Link className="secondary-link" href={`${tripBase}stays-d/`}>{copy.nextLink}</Link>
      </section>

      <footer className="trip-footer site-shell">
        <Link href={tripBase}>{copy.homeLink}</Link>
        <span>{copy.footer}</span>
      </footer>
    </main>
  );
}

export default function StaysPage() {
  return <StaysPageContent locale="ko" />;
}
