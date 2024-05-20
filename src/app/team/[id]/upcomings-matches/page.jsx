import ListOfFixture from "@/components/ListOfFixture";
import { getTeamNextGames } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | Team | Upcomings Matches",
};

async function UpcomingsMatchesPage({ params }) {
  const { id } = params;

  const nextGames = await getTeamNextGames({ idTeam: id })

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture results={nextGames} resultsByTeam />
    </section>
  )
}

export default UpcomingsMatchesPage;
