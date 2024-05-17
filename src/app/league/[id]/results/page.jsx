import ListOfFixture from "@/components/ListOfFixture";
import { getLeagueResults } from "@/lib/getData";

async function LeagueResultsPage({ params }) {
  const { id } = params;

  const results = await getLeagueResults({ idLeague: id })

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ListOfFixture results={results} />
    </section>
  )
}

export default LeagueResultsPage