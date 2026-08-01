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
    label: "Stay",
    status: "Under review",
    statusTone: "review",
    title: "Pool-villa shortlist and final three",
    description: "Six candidates compared on price, room setup, reviews and the full resort experience.",
    meta: "Current No. 1 · The Ocean Villas",
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
          <div><dt>Priority</dt><dd>3-bedroom pool villa</dd><span>Clean · buggy rides · full resort facilities</span></div>
        </dl>
      </section>

      <section className="site-shell latest-decision">
        <div className="latest-image">
          <img src="https://dmaevvtdousx6.cloudfront.net/uploads/2018/08/1b.1.jpg" alt="Three-bedroom pool villa at The Ocean Villas" />
        </div>
        <div className="latest-copy">
          <p className="overline">LATEST DECISION</p>
          <span className="status-badge review">Stay under review</span>
          <h2>The current No. 1 is<br />The Ocean Villas.</h2>
          <p>
            Among the three-bedroom pool villas reviewed for our dates, this came closest to the budget
            while keeping a private pool and a full resort campus. The displayed tax-inclusive total
            is about KRW 2.085M, so the deal target is KRW 2M or less.
          </p>
          <Link className="primary-link" href="/danang-2027/en/stays/">See the full stay comparison →</Link>
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
