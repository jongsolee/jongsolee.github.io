import type { Metadata } from "next";
import { StaysPageContent } from "../../stays/page";

export const metadata: Metadata = {
  title: "Da Nang pool-villa shortlist",
  description: "A bilingual review of Da Nang pool villas for five adults and two six-year-old children over four nights.",
};

export default function EnglishStaysPage() {
  return <StaysPageContent locale="en" />;
}
