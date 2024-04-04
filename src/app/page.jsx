import Match from "@/components/Match";
import StandingTablePreview from "@/components/StandingTablePreview";
import { getLaLigaStandingsMockup, getNextGamesChampionsMockup, getPremierLeagueStandingsMockup } from "@/lib/getData";

export const CircleIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle lg:group-hover:fill-white">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  );
}

export default async function Home() {
  
  const standingsLaLiga = await getLaLigaStandingsMockup();
  const standingsPremierLeague = await getPremierLeagueStandingsMockup();
  const nextGamesChampions = await getNextGamesChampionsMockup();
  
  return (
    <main className="w-full bg-green-950 overflow-x-hidden">
      <div className="container mx-auto grid place-items-center">
        <section className="grid grid-cols-2 auto-rows-min gap-8 py-8 items-start w-3/4">
          <StandingTablePreview 
            standing={standingsLaLiga.standings[0].filter((item) => item.rank <= 10)}
            league={standingsLaLiga} 
          />

          <StandingTablePreview 
            standing={standingsPremierLeague.standings[0].filter((item) => item.rank <= 10)} 
            league={standingsPremierLeague}
          />

          <div className="col-start-1 col-end-3 bg-[url('/assets/champions-banner.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg overflow-x-hidden w-full text-white">
            <h2 className="bg-black/60 text-balance text-center pt-4">Next Champions League Games</h2>

            <div className="overflow-x-hidden flex items-center gap-2 w-full text-white bg-black/60 py-4">
              {nextGamesChampions.map((match) => (
                <Match key={match.fixture.id} match={match} />
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-2 pb-4 bg-black/60">
              {nextGamesChampions.map((match) => (
                <button type="button" key={match.fixture.id} className="group transition-all ease-in-out duration-300">
                  <CircleIcon />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
