import LeagueHero from "@/components/LeagueHero";
import { getStandingLeague } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | League",
};

export default async function LeagueLayout({ children, params }) {
  const { id } = params;

  const infoLeague = await getStandingLeague({ idLeague: id });

  return (
    <main className="w-full bg-black">
      <LeagueHero infoLeague={infoLeague} />

      {children}
    </main>
  );
}