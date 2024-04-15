import ListOfFixture from "@/components/ListOfFixture";
import { getLeagueResultsMockup } from "@/lib/getData";

async function LeagueResultsPage({ params }) {
  const { id } = params;

  const results = await getLeagueResultsMockup({ idTeam: id })

  const gamesByMatchweek = Object.groupBy(results, (game) => game.league.round);

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture gamesFiltered={gamesByMatchweek} />
    </section>
  )
}

export default LeagueResultsPage