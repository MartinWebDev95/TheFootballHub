import StandingTablePreview from "@/components/StandingTablePreview";
import { getLaLigaStandingsMockup, getPremierLeagueStandingsMockup } from "@/lib/getData";

export default async function Home() {
  
  const standingsLaLiga = await getLaLigaStandingsMockup();
  const standingsPremierLeague = await getPremierLeagueStandingsMockup();
  
  return (
    <main className="w-full bg-green-950">
      <div className="container mx-auto">
        <section className="grid grid-cols-2 grid-rows-2 gap-8 py-8 place-items-center">
          <StandingTablePreview 
            standing={standingsLaLiga.standings[0].filter((item) => item.rank <= 10)}
            league={standingsLaLiga} 
          />

          <StandingTablePreview 
            standing={standingsPremierLeague.standings[0].filter((item) => item.rank <= 10)} 
            league={standingsPremierLeague}
          />
        </section>
      </div>
    </main>
  );
}
