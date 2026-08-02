import Link from "next/link";

type StayPlanTabsProps = {
  active: "a" | "b";
  locale?: "ko" | "en";
};

export default function StayPlanTabs({ active, locale = "ko" }: StayPlanTabsProps) {
  const english = locale === "en";
  const base = english ? "/danang-2027/en/" : "/danang-2027/";

  return (
    <nav className="stay-plan-tabs" aria-label={english ? "Stay plan options" : "숙소 기안 선택"}>
      <div className="site-shell stay-plan-tabs-inner">
        <Link href={`${base}stays/`} aria-current={active === "a" ? "page" : undefined}>
          <b>{english ? "Plan A" : "숙소 A안"}</b>
          <span>{english ? "One pool villa · 4 nights" : "풀빌라 한 곳 · 4박"}</span>
        </Link>
        <Link href={`${base}stays-b/`} aria-current={active === "b" ? "page" : undefined}>
          <b>{english ? "Plan B" : "숙소 B안"}</b>
          <span>{english ? "Resort 2 + pool villa 2" : "리조트 2박 + 풀빌라 2박"}</span>
        </Link>
      </div>
    </nav>
  );
}
