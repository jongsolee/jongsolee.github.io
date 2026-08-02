import type { Metadata } from "next";
import Link from "next/link";
import TripHeader from "../_components/TripHeader";

export const metadata: Metadata = {
  title: "Da Nang Family Trip · Lunar New Year 2027",
  description: "A shared family planning room for our stay, itinerary, activities and checklist.",
};

const sections = [
  {
    href: "/danang-2027/en/stays/",
    label: "Stay Plan A",
    status: "One-base plan",
    statusTone: "review",
    title: "Four nights in one pool villa",
    description: "The easiest plan: no luggage move, three bedrooms and a private pool for the whole stay.",
    meta: "Plan pick · The Ocean Villas · about KRW 2M",
  },
  {
    href: "/danang-2027/en/stays-b/",
    label: "Stay Plan B",
    status: "Two types of rest",
    statusTone: "review",
    title: "Resort 2 nights + pool villa 2 nights",
    description: "Compares two resort rooms for two nights followed by two pool-villa nights, reflecting Team A's early arrival and Team B joining Friday.",
    meta: "Plan pick · Meliá + The Ocean Villas · KRW 1.64–1.76M",
  },
  {
    href: "/danang-2027/en/stays-c/",
    label: "Stay Plan C",
    status: "Least moving",
    statusTone: "review",
    title: "Four nights at one resort",
    description: "Compares resorts that can keep two rooms for four nights and make the property itself feel like part of the trip.",
    meta: "Plan pick · New World Hoiana · deal target KRW 1.76–1.84M",
  },
  {
    href: "/danang-2027/en/stays-d/",
    label: "Stay Plan D",
    status: "Overall No. 1",
    statusTone: "available",
    title: "Local city 2 nights + pool villa 2 nights",
    description: "Markets, cafés and the Han River first; a private three-bedroom pool villa for the final two nights.",
    meta: "Overall pick · Cozy + The Ocean Villas · KRW 1.49–1.70M",
  },
  {
    href: "/danang-2027/en/itinerary/",
    label: "Itinerary",
    status: "Coming soon",
    statusTone: "ready",
    title: "4-night, 5-day itinerary",
    description: "Once the stay is chosen, we will shape each day around shorter transfers and a relaxed pace.",
    meta: "To be written after the stay is chosen",
  },
  {
    href: "/danang-2027/en/activities/",
    label: "Activities",
    status: "Coming soon",
    statusTone: "ready",
    title: "Things for children and adults",
    description: "Ba Na Hills, Hoi An, massages and pool time will be filtered by energy level and weather.",
    meta: "Collecting candidates next",
  },
  {
    href: "/danang-2027/en/checklist/",
    label: "Checklist",
    status: "Coming soon",
    statusTone: "ready",
    title: "Booking and departure checklist",
    description: "Passports, bookings and children’s swim gear, with an owner and completion status for each item.",
    meta: "Shared updates after booking",
  },
];

export default function EnglishDanangTripHome() {
  return (
    <main className="trip-page" lang="en">
      <TripHeader active="home" locale="en" />

      <section className="trip-home-hero site-shell">
        <div>
          <div className="status-line">
            <span className="status-badge review">For family review</span>
            <span>Last updated · Aug 2, 2026</span>
          </div>
          <p className="overline">DA NANG · LUNAR NEW YEAR 2027</p>
          <h1>Choose the stay first,<br />then build the trip around it.</h1>
          <p className="lead">
            Nothing is final yet. The stay, itinerary, activities and checklist are separated so everyone
            can review the same information and share an opinion.
          </p>
        </div>
        <dl className="trip-summary">
          <div><dt>Stay</dt><dd>Feb 4–8, 2027</dd><span>4 nights · checkout Feb 8</span></div>
          <div><dt>Group</dt><dd>5 adults · 2 children</dd><span>Both children are age 6</span></div>
          <div><dt>Budget</dt><dd>Around KRW 1.5M</dd><span>Maximum KRW 2M · willing to wait for a deal</span></div>
          <div><dt>Decision test</dt><dd>Variety for adults and children</dd><span>Clean · local life · pool-villa recovery</span></div>
        </dl>
      </section>

      <section className="site-shell latest-decision">
        <div className="latest-image">
          <img src="/danang-2027/stays-d/cozy-1.jpg" alt="Cozy Danang Boutique Hotel in central Da Nang" />
        </div>
        <div className="latest-copy">
          <p className="overline">LATEST DECISION</p>
          <span className="status-badge available">Overall No. 1 · Plan D</span>
          <h2>Live Da Nang first,<br />then slow down completely.</h2>
          <p>
            One base is easy, but four similar nights can blur together. Plan D starts around markets,
            cafés and the Han River, then resets the trip at The Ocean Villas. Adults get both local life
            and downtime; children feel as though the holiday starts again. The target is KRW 1.49–1.70M.
          </p>
          <Link className="primary-link" href="/danang-2027/en/stays-d/">Review Plan D →</Link>
        </div>
      </section>

      <section className="site-shell plan-overview" aria-labelledby="plan-overview-title-en">
        <div className="section-title-row"><div><p className="overline">A–D AT A GLANCE</p><h2 id="plan-overview-title-en">Each plan wins on something different.</h2></div><span>Updated with the latest family feedback</span></div>
        <div className="plan-overview-grid">
          <Link href="/danang-2027/en/stays/"><b>A</b><h3>Easiest</h3><p>No move · four private-pool nights</p><small>Trade-off · the scenes may start to repeat</small></Link>
          <Link href="/danang-2027/en/stays-b/"><b>B</b><h3>Two kinds of resort</h3><p>Full resort 2 · private villa 2</p><small>Trade-off · both halves still feel like resort time</small></Link>
          <Link href="/danang-2027/en/stays-c/"><b>C</b><h3>Most predictable</h3><p>One polished resort · two fixed rooms</p><small>Trade-off · less privacy and less change</small></Link>
          <Link className="recommended" href="/danang-2027/en/stays-d/"><b>D</b><h3>Most varied</h3><p>Local city 2 · pool-villa recovery 2</p><small>Overall No. 1 · best memory balance</small></Link>
        </div>
      </section>

      <section className="site-shell trip-sections" aria-labelledby="trip-sections-title-en">
        <div className="section-title-row">
          <h2 id="trip-sections-title-en">Trip planning pages</h2>
          <span>Working from the stay outward</span>
        </div>
        <div className="trip-section-grid">
          {sections.map((section) => (
            <Link className="trip-section-card" href={section.href} key={section.href}>
              <div className="trip-section-top">
                <span>{section.label}</span>
                <span className={`status-badge ${section.statusTone}`}>{section.status}</span>
              </div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <small>{section.meta}</small>
            </Link>
          ))}
        </div>
      </section>

      <footer className="trip-footer site-shell">
        <Link href="/">← All pages</Link>
        <span>We will keep updating this as family feedback and new prices come in.</span>
      </footer>
    </main>
  );
}
