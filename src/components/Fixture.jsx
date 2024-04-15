import { getMatchDate } from '@/utils/getMatchDate'
import Image from 'next/image'

const Fixture = ({ item }) => {
  return (
    <li className='bg-black p-4 rounded-md shadow-lg w-full'>
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

            {item.goals.home !== null && (
              <p className={`${item.goals.home > item.goals.away ? 'font-black' : 'font-normal'}`}>
                {item.goals.home}
              </p>
            )}
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

            {item.goals.away !== null && (
              <p className={`${item.goals.away > item.goals.home ? 'font-black' : 'font-normal'}`}>
                {item.goals.away}
              </p>
            )}
          </div>
        </div>

        <div>
          <p className='text-center text-sm mb-2'>
            {getMatchDate({ matchDate: item.fixture.date }).onlyDate}
          </p>

          {
            item.fixture.status.short === 'FT'
            ? (<p className='text-center text-sm'>{item.fixture.status.short}</p>)
            : (
                <p className='text-center text-sm'>
                  {getMatchDate({ matchDate: item.fixture.date }).onlyHour}
                </p>
              )
          }
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
  )
}

export default Fixture