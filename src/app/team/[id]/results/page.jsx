import { getTeamResultsMockup } from '@/lib/getData';
import { getMatchDate } from '@/utils/getMatchDate';
import Image from 'next/image'

export const metadata = {
  title: "The Football Hub | Teams | Results",
};

async function ResultsPage({ params }) {
  const { id } = params;
  
  const results = await getTeamResultsMockup({ idTeam: id })

  const gamesByMonth = Object.groupBy(results, (result) => getMatchDate({ matchDate: result.fixture.date }).dateMonth);

  return (
    <section className='container mx-auto px-2 lg:px-0 py-8'>
      <ul>
        {Object.entries(gamesByMonth).map((game) => (
          <li key={game[0]} className='mb-4'>
            <p className='mb-4 font-bold text-xl'>{game[0]}</p>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {game[1].map((item) => (
                <li key={item.fixture.id} className='bg-black p-4 rounded-md shadow-lg w-full'>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='w-full border-r border-sanfelix-400 pr-4'>
                      <div className='flex items-center justify-between gap-2 mb-2'>
                        <div className='flex items-center gap-2'>
                          <Image 
                            width={30} 
                            height={30} 
                            src={item.teams.home.logo} 
                            alt={item.teams.home.name}
                          />

                          <p>{item.teams.home.name}</p>
                        </div>

                        <p className={`${item.goals.home > item.goals.away ? 'font-black' : 'font-normal'}`}>
                          {item.goals.home}
                        </p>
                      </div>

                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2'>
                          <Image 
                            width={30}
                            height={30} 
                            src={item.teams.away.logo} 
                            alt={item.teams.away.name}
                          />

                          <p>{item.teams.away.name}</p>
                        </div>

                        <p className={`${item.goals.away > item.goals.home ? 'font-black' : 'font-normal'}`}>
                          {item.goals.away}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className='text-center text-sm mb-2'>
                        {getMatchDate({ matchDate: item.fixture.date }).onlyDate}
                      </p>

                      <p className='text-center text-sm'>{item.fixture.status.short}</p>
                    </div>
                  </div>

                  <div className='w-full flex items-center gap-2 mt-4 pt-4 border-t border-sanfelix-400'>
                    <Image 
                      width={30} 
                      height={30} 
                      src={item.league.logo} 
                      alt={item.league.name}
                      className={`${(item.league.name === 'UEFA Champions League') && 'bg-white rounded-full'}`}
                    />

                    <p>{item.league.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResultsPage