import ListOfFixture from '@/components/ListOfFixture';
import { getTeamResultsMockup } from '@/lib/getData';
import { getMatchDate } from '@/utils/getMatchDate';

export const metadata = {
  title: "The Football Hub | Teams | Results",
};

async function ResultsPage({ params }) {
  const { id } = params;
  
  const results = await getTeamResultsMockup({ idTeam: id })

  const gamesByMonth = Object.groupBy(results, (result) => getMatchDate({ matchDate: result.fixture.date }).dateMonth);

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture gamesFiltered={gamesByMonth} />
    </section>
  )
}

export default ResultsPage