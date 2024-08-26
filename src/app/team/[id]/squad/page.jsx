import { getTeamSquad } from '@/lib/getData';
import { groupedBy } from '@/utils/groupedBy';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "The Football Hub | Team | Squad",
};

async function SquadPage({ params }){
  const { id } = params;

  const squadTeam = await getTeamSquad({ idTeam: id });

  //Group the football squad array by the players positions
  const squadByPositions = groupedBy({ data: squadTeam, key: 'position' });

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ul>
        {Object.entries(squadByPositions).map((items) => (
          <li key={items[0]} className='group'>
            <span className='group-first-of-type:mt-0 my-4 block font-semibold text-xl'>
              {items[0]}
            </span>

            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {items[1].map((player) => (
                <li key={player.id}>
                  <Link href={`/player/${player.id}`} className='flex items-center justify-between gap-4 rounded-md p-3 shadow-xl border-2 border-transparent bg-gray lg:hover:border-yellow lg:hover:scale-105 transition-all ease-in-out duration-200'> 
                    <div className='flex items-center gap-4'>                      
                      <Image 
                        src={player.photo} 
                        width={40} 
                        height={40} 
                        alt={player.name} 
                        className='rounded-full'
                      />
            
                      <p className='truncate'>
                        <span className='block text-sm'>{player.position}</span>
                        <span>
                          {player.name.length > 15 ? `${player.name.substring(0,15)}...` : player.name}
                        </span>
                      </p>
                    </div>

                    <p className='text-3xl font-semibold'>{player.number}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SquadPage