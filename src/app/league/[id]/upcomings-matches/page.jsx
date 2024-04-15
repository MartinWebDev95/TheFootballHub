import ListOfFixture from "@/components/ListOfFixture";
import { getLeagueNextGamesMockup } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | Teams | Upcomings Matches",
};

async function LeagueUpcomingsMatchesPage({ params }) {
  const { id } = params;

  const nextGames = await getLeagueNextGamesMockup({ idTeam: id })

  const gamesByMatchweek = Object.groupBy(nextGames, (game) => game.league.round);

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture gamesFiltered={gamesByMatchweek} />
    </section>
  )
}

export default LeagueUpcomingsMatchesPage