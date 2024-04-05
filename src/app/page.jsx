import Carousel from "@/components/Carousel";
import StandingTablePreview from "@/components/StandingTablePreview";
import { getLaLigaStandingsMockup, getNextGamesChampionsMockup, getPremierLeagueStandingsMockup } from "@/lib/getData";

export default async function Home() {
  
  const standingsLaLiga = await getLaLigaStandingsMockup();
  const standingsPremierLeague = await getPremierLeagueStandingsMockup();
  const nextGamesChampions = await getNextGamesChampionsMockup();

  return (
    <main className="w-full bg-green-950 overflow-x-hidden">
      <div className="container mx-auto grid place-items-center px-2 lg:px-0">
        <section className="grid grid-cols-1 auto-rows-min md:grid-cols-2 gap-y-8 md:gap-8 py-8 items-start lg:w-3/4">
          <div className='bg-sky-500 p-3 rounded-lg shadow-lg row-start-1 row-end-2 md:col-start-1 col-end-2 flex flex-col items-end h-full'>
            <StandingTablePreview 
              standing={standingsLaLiga.standings[0].filter((item) => item.rank <= 10)}
              league={standingsLaLiga} 
            />
          </div>

          <div className='bg-sky-500 p-3 rounded-lg shadow-lg row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 flex flex-col items-end h-full'>
            <StandingTablePreview 
              standing={standingsPremierLeague.standings[0].filter((item) => item.rank <= 10)} 
              league={standingsPremierLeague}
            />
          </div>

          <div className="col-start-1 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 bg-[url('/assets/champions-banner.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg overflow-x-hidden w-full text-white">
            <h2 className="bg-black/60 text-balance text-center pt-4">
              Upcomings Champions League Games
            </h2>

            <Carousel matches={nextGamesChampions} />
          </div>
        </section>
      </div>
    </main>
  );
}
