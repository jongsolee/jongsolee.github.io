import type { Metadata } from "next";
import { StaysCPageContent } from "../../stays-c/page";

export const metadata: Metadata = {
  title: "Stay Plan C · One Resort for 4 Nights",
  description: "A four-night resort comparison using two rooms for five adults and two six-year-old girls.",
  openGraph: {
    title: "Da Nang 2027 Stay Plan C · One Resort for 4 Nights",
    description: "Resort-focused family stays near a KRW 2M lodging budget.",
    url: "https://jongsolee.github.io/danang-2027/en/stays-c/",
    images: [{
      url: "https://jongsolee.github.io/danang-plan-c-og.png",
      width: 1731,
      height: 909,
      alt: "Da Nang 2027 Stay Plan C: one resort for four nights",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Nang 2027 Stay Plan C",
    description: "One resort · two rooms · four nights",
    images: ["https://jongsolee.github.io/danang-plan-c-og.png"],
  },
};

export default function EnglishStaysCPage() {
  return <StaysCPageContent locale="en" />;
}
