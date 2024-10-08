import { getMatchDate } from '@/utils/getMatchDate'
import Image from 'next/image'
import Link from 'next/link'

const Fixture = ({ item }) => {
  return (
    <li className={`${item.league.name === 'UEFA Champions League' ? 'relative bg-[url("/assets/champions-banner.webp")] bg-no-repeat bg-cover after:absolute after:top-0 after:left-0 after:bg-black/80 after:rounded-md after:w-full after:h-full after:-z-10 z-20' : 'bg-gray'} p-4 rounded-md shadow-lg w-full`}>
      <div className='flex items-center justify-between gap-4'>
        <div className={`w-full border-r ${item.league.name === 'UEFA Champions League' ? 'border-white' : 'border-sanfelix-400'} pr-4`}>
          <div className='flex items-center justify-between gap-2 mb-2'>
            <div className='flex items-center gap-2'>
              <Image 
                width={30} 
                height={30} 
                src={item.teams.home.logo} 
                alt={item.teams.home.name}
              />

              <Link href={`/team/${item.teams.home.id}/squad`} className='hover:text-purple transition-all duration-200 ease-in-out'>
                {item.teams.home.name}
              </Link>
            </div>

            <div className='flex items-center gap-2'>
              {item.goals.home !== null && (
                <p className={`${item.goals.home > item.goals.away ? 'font-black' : 'font-normal'}`}>
                  {item.goals.home}
                </p>
              )}

              {item.score.penalty.home !== null && (
                <p className={`${item.score.penalty.home > item.score.penalty.away ? 'font-bold' : 'font-normal'} text-sm`}>
                  {`(${item.score.penalty.home})`}
                </p>
              )}
            </div>
          </div>

          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2'>
              <Image 
                width={30}
                height={30} 
                src={item.teams.away.logo} 
                alt={item.teams.away.name}
              />

              <Link href={`/team/${item.teams.away.id}/squad`} className='hover:text-purple transition-all duration-200 ease-in-out'>
                {item.teams.away.name}
              </Link>
            </div>

            <div className='flex items-center gap-2'>
              {item.goals.away !== null && (
                <p className={`${item.goals.away > item.goals.home ? 'font-black' : 'font-normal'}`}>
                  {item.goals.away}
                </p>
              )}

              {item.score.penalty.away !== null && (
                <p className={`${item.score.penalty.away > item.score.penalty.home ? 'font-bold' : 'font-normal'} text-sm`}>
                  {`(${item.score.penalty.away})`}
                </p>
              )}
            </div>
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

      <div className={`w-full flex items-center gap-2 mt-4 pt-4 border-t ${item.league.name === 'UEFA Champions League' ? 'border-white' : 'border-sanfelix-400'}`}>
        <Image 
          width={30} 
          height={30} 
          src={item.league.logo} 
          alt={item.league.name}
          className={`${(item.league.name === 'UEFA Champions League') && 'bg-white rounded-full'} w-auto h-auto`}
        />

        <p>{item.league.name}</p>
      </div>
    </li>
  )
}

export default Fixture