import Image from 'next/image';
import Link from 'next/link';
import { getPlayer } from "@/lib/getData";
import PlayerStat from '@/components/PlayerStat';
import CompetitionSelector from '@/components/CompetitionSelector';

export const metadata = {
  title: 'The Football Hub | Player'
}

async function PlayerPage({ params }) {
  const { id } = params;

  const { player, stats } = await getPlayer({ idPlayer: id });

  return (
    <main className="bg-black">
      <div className="container mx-auto px-2 lg:px-0 py-8">
        <section className='border-b-2 pb-8'>
          <p className='uppercase font-bold mb-4'>Player</p>
          
          <div className='flex items-center gap-6'>
            <Image 
              src={player.photo} 
              width={70} 
              height={70} 
              alt={player.name} 
              className='rounded-full shadow-xl w-16 h-16'
            />

            <h1 className='font-semibold text-2xl md:text-4xl lg:text-5xl'>{player.name}</h1>
          </div>

          <div className='flex items-center justify-between flex-wrap mt-6'>
            <PlayerStat statName="Nationality" stat={player.nationality} />
            <PlayerStat statName="Age" stat={player.age} />
            <PlayerStat statName="Height" stat={player.height} />
            <PlayerStat statName="Weight" stat={player.weight} />
          </div>
        </section>

        <section className='mt-8 border-b-2 pb-8'>
          <p className='uppercase font-bold mb-4'>Team</p>

          <Link href={`/team/${stats[0].team.id}/squad`} className='flex items-center gap-3 bg-gray rounded-md py-1 px-2 lg:py-2 shadow-xl border-2 border-transparent lg:hover:border-yellow lg:hover:scale-110 transition-all ease-in-out duration-200 w-fit'>
            <Image 
              src={stats[0].team.logo} 
              width={40} 
              height={40} 
              alt={stats[0].team.name} 
            />

            <span className='font-medium'>
              {stats[0].team.name}
            </span>
          </Link>
        </section>

        <section className='mt-8'>
          <p className='uppercase font-bold mb-4'>Stats</p>

          <CompetitionSelector stats={stats} />
        </section>
      </div>
    </main>
  )
}

export default PlayerPage