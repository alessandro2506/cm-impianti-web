import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CASE_STUDIES } from "@/lib/data";

const cs = CASE_STUDIES.find((c) => c.slug === "noordam")!;

export const metadata: Metadata = {
  title: cs?.title,
  description: cs?.subtitle,
};

export default function Page() {
  return <CaseStudyLayout cs={cs} />;
}
