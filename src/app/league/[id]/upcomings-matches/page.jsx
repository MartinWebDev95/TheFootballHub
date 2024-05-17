import ListOfFixture from "@/components/ListOfFixture";
import { getLeagueNextGames } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | Teams | Upcomings Matches",
};

async function LeagueUpcomingsMatchesPage({ params }) {
  const { id } = params;

  const nextGames = await getLeagueNextGames({ idLeague: id })

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture results={nextGames} />
    </section>
  )
}

export default LeagueUpcomingsMatchesPage