import ListOfFixture from '@/components/ListOfFixture';
import { getTeamResults } from '@/lib/getData';

export const metadata = {
  title: "The Football Hub | Team | Results",
};

async function ResultsPage({ params }) {
  const { id } = params;
  
  const results = await getTeamResults({ idTeam: id })

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture results={results} resultsByTeam />
    </section>
  )
}

export default ResultsPage