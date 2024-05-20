import Carousel from "@/components/Carousel";
import StandingTablePreview from "@/components/StandingTablePreview";
import Link from "next/link";
import { getLeagueResults, getStandingLeague } from "@/lib/getData";
import { getLeagueId } from "@/utils/getLeagueId";

export const metadata = {
  title: "The Football Hub | Home",
};

export default async function HomePage() {
  
  const standingsLaLiga = await getStandingLeague({ 
    idLeague: getLeagueId({ leagueName: 'laliga' }) 
  });

  const standingsPremierLeague = await getStandingLeague({ 
    idLeague: getLeagueId({ leagueName: 'premierleague' }) 
  });

  const lastResultsChampions = await getLeagueResults({ 
    idLeague: getLeagueId({ leagueName: 'uefachampionsleague' })
  });

  return (
    <main className="w-full bg-sanfelix-950 overflow-x-hidden">
      <div className="container mx-auto grid place-items-center px-2 lg:px-0">
        <section className="grid grid-cols-1 auto-rows-min md:grid-cols-2 gap-y-8 md:gap-8 py-8 items-start lg:w-3/4">
          <div className='bg-sanfelix-900 p-3 rounded-lg shadow-lg row-start-1 row-end-2 md:col-start-1 col-end-2 flex flex-col items-end h-full'>
            <StandingTablePreview 
              standing={standingsLaLiga.standings[0].filter((item) => item.rank <= 10)}
              league={standingsLaLiga} 
            />
          </div>

          <div className='bg-sanfelix-900 p-3 rounded-lg shadow-lg row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 flex flex-col items-end h-full'>
            <StandingTablePreview 
              standing={standingsPremierLeague.standings[0].filter((item) => item.rank <= 10)} 
              league={standingsPremierLeague}
            />
          </div>

          <div className="relative col-start-1 col-end-3 row-start-3 row-end-4 md:row-start-2 md:row-end-3 bg-[url('/assets/champions-banner.webp')] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg overflow-x-hidden w-full after:absolute after:top-0 after:left-0 after:bg-black/80 after:rounded-lg after:w-full after:h-full after:-z-10 z-20">
            <Link href={`/league/${getLeagueId({ leagueName: 'uefachampionsleague' })}/results`} className="text-balance text-center pt-4 block transition-all ease-in-out duration-200 hover:text-sanfelix-400">
              Last Results In Champions League Games
            </Link>

            <Carousel matches={lastResultsChampions} />
          </div>
        </section>
      </div>
    </main>
  );
}
