import type { Metadata } from "next";
import PendingPage from "../../_components/PendingPage";

export const metadata: Metadata = { title: "Da Nang 4-night itinerary" };

export default function EnglishItineraryPage() {
  return <PendingPage locale="en" active="itinerary" eyebrow="ITINERARY" title="4-night, 5-day itinerary" description="We will leave plenty of time at the resort and keep a comfortable pace for both the children and adults." items={["A timetable around arrival and departure flights", "Real transfer times from the chosen stay", "Only one major outing per day: Hoi An or Ba Na Hills", "Backup plans for rain and low-energy days"]} />;
}
