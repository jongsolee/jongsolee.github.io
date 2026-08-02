import type { Metadata } from "next";
import { StaysDPageContent } from "../../stays-d/page";

export const metadata: Metadata = {
  title: "Stay Plan D · Local City 2 + Pool Villa 2",
  description: "Two local city nights followed by two nights in a three-bedroom pool villa for the Da Nang family trip.",
  openGraph: {
    title: "Da Nang 2027 Stay Plan D · Local City 2 + Pool Villa 2",
    description: "A four-night family stay with local Da Nang first and a private pool-villa reset second.",
    url: "https://jongsolee.github.io/danang-2027/en/stays-d/",
    images: [{
      url: "https://jongsolee.github.io/danang-plan-d-og.png",
      width: 1731,
      height: 909,
      alt: "Da Nang 2027 Stay Plan D: two local city nights and two pool-villa nights",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Nang 2027 Stay Plan D",
    description: "Local city 2 nights · pool-villa recovery 2 nights",
    images: ["https://jongsolee.github.io/danang-plan-d-og.png"],
  },
};

export default function EnglishStaysDPage() {
  return <StaysDPageContent locale="en" />;
}
