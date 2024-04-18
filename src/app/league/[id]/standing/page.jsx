import { getStandingLeague } from "@/lib/getData";
import StandingTable from "@/components/StandingTable";
import StandingTableChampions from "@/components/StandingTableChampions";

async function LeagueStandingPage({ params }) {
  const { id } = params;

  const league = await getStandingLeague({ idLeague: id })

  return (
    <section className="container mx-auto px-2 lg:px-0 py-8">
      {league.name === 'UEFA Champions League' ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {league.standings.map((g) => (
            <StandingTableChampions key={g[0].group} nameGroup={g} />
          ))}    
        </div>
      ) : (
        <StandingTable standing={league.standings[0]} />
      )}
    </section>
  )
}

export default LeagueStandingPage