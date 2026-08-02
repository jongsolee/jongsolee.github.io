import type { Metadata } from "next";
import { StaysBPageContent } from "../../stays-b/page";

export const metadata: Metadata = {
  title: "Stay Plan B · Resort 2 + Pool Villa 2",
  description: "A two-night resort and two-night three-bedroom pool-villa plan for the Da Nang family trip.",
  openGraph: {
    title: "Da Nang 2027 Stay Plan B · Resort 2 + Pool Villa 2",
    description: "A four-night stay comparison for five adults and two six-year-old girls.",
    url: "https://jongsolee.github.io/danang-2027/en/stays-b/",
    images: [
      {
        url: "https://jongsolee.github.io/danang-plan-b-og.png",
        width: 1730,
        height: 909,
        alt: "Da Nang 2027 Stay Plan B: two resort nights and two pool-villa nights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Nang 2027 Stay Plan B",
    description: "Two resort nights + two pool-villa nights",
    images: ["https://jongsolee.github.io/danang-plan-b-og.png"],
  },
};

export default function EnglishStaysBPage() {
  return <StaysBPageContent locale="en" />;
}
