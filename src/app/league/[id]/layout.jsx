import LeagueHero from "@/components/LeagueHero";
import { getLaLigaStandingsMockup } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | League",
};

export default async function LeagueLayout({ children, params }) {
  const { id } = params;

  const infoLeague = await getLaLigaStandingsMockup();

  return (
    <main className="w-full bg-sanfelix-950">
      <LeagueHero infoLeague={infoLeague} />

      {children}
    </main>
  );
}