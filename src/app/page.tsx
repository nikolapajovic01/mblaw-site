import MbLawIntro from "@/components/MbLawIntro";
import MbLawHero from "@/components/MbLawHero";
import MbLawAbout from "@/components/MbLawAbout";
import MbLawPracticeAreas from "@/components/MbLawPracticeAreas";
import MbLawTeam from "@/components/MbLawTeam";
import MbLawInsights from "@/components/MbLawInsights";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawFooter from "@/components/MbLawFooter";

export default function Home() {
  return (
    <>
      <MbLawIntro />
      <MbLawHero />
      <MbLawAbout />
      <MbLawPracticeAreas />
      <MbLawTeam />
      <MbLawInsights />
      <MbLawCTA />
      <MbLawFooter />
    </>
  );
}
