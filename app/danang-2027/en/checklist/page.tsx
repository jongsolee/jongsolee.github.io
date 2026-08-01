import type { Metadata } from "next";
import PendingPage from "../../_components/PendingPage";

export const metadata: Metadata = { title: "Da Nang trip checklist" };

export default function EnglishChecklistPage() {
  return <PendingPage locale="en" active="checklist" eyebrow="CHECKLIST" title="Booking and packing checklist" description="A phone-friendly list showing who is bringing what and what has already been completed." items={["Passports, flight tickets and stay voucher", "Children’s swim gear and medicines", "Cash, cards, eSIM and Grab", "Airport transfer and travel insurance"]} />;
}
