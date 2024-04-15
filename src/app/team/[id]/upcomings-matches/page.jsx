import ListOfFixture from "@/components/ListOfFixture";
import { getTeamNextGamesMockup } from "@/lib/getData";
import { getMatchDate } from "@/utils/getMatchDate";

export const metadata = {
  title: "The Football Hub | Teams | Upcomings Matches",
};

async function UpcomingsMatchesPage({ params }) {
  const { id } = params;

  const nextGames = await getTeamNextGamesMockup({ idTeam: id })

  const gamesByMonth = Object.groupBy(nextGames, (game) => getMatchDate({ matchDate: game.fixture.date }).dateMonth);

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture gamesFiltered={gamesByMonth} />
    </section>
  )
}

export default UpcomingsMatchesPage;
