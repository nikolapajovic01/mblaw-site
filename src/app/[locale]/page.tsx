import { notFound } from "next/navigation";
import MbLawIntro from "@/components/MbLawIntro";
import MbLawHero from "@/components/MbLawHero";
import MbLawAbout from "@/components/MbLawAbout";
import MbLawPracticeAreas from "@/components/MbLawPracticeAreas";
import MbLawTeam from "@/components/MbLawTeam";
import MbLawInsights from "@/components/MbLawInsights";
import MbLawCTA from "@/components/MbLawCTA";
import MbLawFooter from "@/components/MbLawFooter";
import { isLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <MbLawIntro />
      <MbLawHero locale={locale} />
      <MbLawAbout locale={locale} />
      <MbLawPracticeAreas locale={locale} />
      <MbLawTeam locale={locale} />
      <MbLawInsights locale={locale} />
      <MbLawCTA locale={locale} />
      <MbLawFooter locale={locale} />
    </>
  );
}
