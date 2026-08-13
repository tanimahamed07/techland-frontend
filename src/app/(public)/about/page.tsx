import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import OurValues from "@/components/about/OurValues";
import TeamSection from "@/components/about/TeamSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import CTASection from "@/components/home/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TechLand | Your Trusted Tech Partner",
  description:
    "Learn about TechLand's journey, mission, and values. We're committed to bringing you the best technology at unbeatable prices with exceptional service.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <main className="mx-auto">
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurValues />
        <AchievementsSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
}
