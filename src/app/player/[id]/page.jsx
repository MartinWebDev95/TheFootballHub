import Image from 'next/image';
import Link from 'next/link';
import { getPlayer } from "@/lib/getData";
import PlayerStat from '@/components/PlayerStat';
import CompetitionSelector from '@/components/CompetitionSelector';

async function PlayerPage({ params }) {
  const { id } = params;

  const { player, stats } = await getPlayer({ idPlayer: id });

  return (
    <main className="bg-green-950 text-white">
      <div className="container mx-auto px-2 lg:px-0 py-8">
        <section className='border-b-2 pb-8'>
          <p className='uppercase font-bold mb-4'>Player</p>
          
          <div className='flex items-center gap-4'>
            <Image 
              src={player.photo} 
              width={60} 
              height={60} 
              alt={player.name} 
              className='rounded-full shadow-xl'
            />

            <h1 className='font-medium text-2xl lg:text-3xl'>{player.name}</h1>
          </div>

          <div className='flex items-center justify-between flex-wrap mt-4'>
            <PlayerStat statName="Nationality" stat={player.nationality} />
            <PlayerStat statName="Age" stat={player.age} />
            <PlayerStat statName="Height" stat={player.height} />
            <PlayerStat statName="Weight" stat={player.weight} />
          </div>
        </section>

        <section className='mt-8 border-b-2 pb-8'>
          <p className='uppercase font-bold mb-2'>Team</p>

          <Link href={`/team/${stats[0].team.id}/squad`} className='flex items-center gap-4 bg-black text-white rounded-md px-3 py-2 shadow-xl border-2 border-transparent lg:hover:border-slate-400 lg:hover:scale-110 transition-all ease-in-out duration-200 w-fit'>
            <Image 
              src={stats[0].team.logo} 
              width={40} 
              height={40} 
              alt={stats[0].team.name} 
              className='rounded-full'
            />

            <span className='font-medium'>
              {stats[0].team.name}
            </span>
          </Link>
        </section>

        <section className='mt-8'>
          <p className='uppercase font-bold mb-2'>Stats</p>

          <CompetitionSelector stats={stats} />
        </section>
      </div>
    </main>
  )
}

export default PlayerPage