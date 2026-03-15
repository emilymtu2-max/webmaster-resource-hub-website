import { MedalIcon, SparklesIcon, StarIcon, TargetIcon } from "lucide-react";

import AboutUs from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01";

const stats = [
  {
    icon: SparklesIcon,
    value: "6+",
    description: "Years of Community Growth",
  },
  {
    icon: TargetIcon,
    value: "40+",
    description: "Resources Highlighted",
  },
  {
    icon: StarIcon,
    value: "5",
    description: "Communities Centered",
  },
  {
    icon: MedalIcon,
    value: "1",
    description: "Shared Regional Hub",
  },
];

const AboutUsPage = () => {
  return <AboutUs stats={stats} />;
};

export default AboutUsPage;
