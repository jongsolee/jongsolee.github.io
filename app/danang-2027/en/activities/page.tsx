import type { Metadata } from "next";
import PendingPage from "../../_components/PendingPage";

export const metadata: Metadata = { title: "Da Nang family activities" };

export default function EnglishActivitiesPage() {
  return <PendingPage locale="en" active="activities" eyebrow="ACTIVITIES" title="Family activities" description="We will separate what the children will enjoy from the adults’ downtime, then keep only the activities worth doing." items={["Programs available inside the resort", "Water activities suitable for six-year-olds", "Ba Na Hills vs Hoi An vs Marble Mountains", "Massage, dining and shopping options"]} />;
}
