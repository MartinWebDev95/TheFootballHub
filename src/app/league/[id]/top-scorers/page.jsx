import PodiumBox from "@/components/PodiumBox";
import ScorersTable from "@/components/ScorersTable";
import { getLeagueTopScorers } from "@/lib/getData";

export const metadata = {
  title: "The Football Hub | League | Top Scorers",
};

async function LeagueTopScorers({ params }) {
  const { id } = params;

  const topScorers = await getLeagueTopScorers({ idLeague: id });
  
  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ol className="flex flex-col gap-6 lg:flex-row items-center lg:items-end lg:justify-between">
        {topScorers.toSpliced(3).map((scorer) => (
          <PodiumBox key={scorer.player.id} scorer={scorer} />
        ))}
      </ol>

      <ScorersTable scorers={topScorers.toSpliced(0, 3)} />
    </section>
  )
}

export default LeagueTopScorers