import Link from "next/link";

type TripHeaderProps = {
  active?: "home" | "stays" | "itinerary" | "activities" | "checklist";
  locale?: "ko" | "en";
};

const routeSegments = {
  home: "",
  stays: "stays/",
  itinerary: "itinerary/",
  activities: "activities/",
  checklist: "checklist/",
} as const;

export default function TripHeader({ active = "home", locale = "ko" }: TripHeaderProps) {
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";
  const labels = english
    ? { home: "Trip home", stays: "Stay", itinerary: "Itinerary", activities: "Activities", checklist: "Checklist" }
    : { home: "여행 홈", stays: "숙소", itinerary: "일정", activities: "액티비티", checklist: "준비물" };
  const currentSegment = routeSegments[active];

  return (
    <header className="trip-header">
      <div className="site-shell trip-header-inner">
        <div className="trip-brand-row">
          <Link className="trip-brand" href={base}>
            {english ? "Da Nang 2027" : "다낭 2027"}
            <span>{english ? "Family trip planning room" : "가족 여행 준비실"}</span>
          </Link>
          <div className="language-switch" aria-label={english ? "Language" : "언어 선택"}>
            <Link href={`/danang-2027/${currentSegment}`} aria-current={!english ? "true" : undefined}>KO</Link>
            <span>/</span>
            <Link href={`/danang-2027/en/${currentSegment}`} aria-current={english ? "true" : undefined}>EN</Link>
          </div>
        </div>
        <nav className="trip-nav" aria-label={english ? "Da Nang trip pages" : "다낭 여행 페이지"}>
          {(Object.keys(routeSegments) as Array<keyof typeof routeSegments>).map((key) => (
            <Link
              key={key}
              href={`${base}${routeSegments[key]}`}
              aria-current={active === key ? "page" : undefined}
            >
              {labels[key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
