import { getLeagueId } from '@/utils/getLeagueId'
import Image from 'next/image'
import Link from 'next/link'

const StandingTablePreview = ({ standing, league }) => {
  return (
    <>
      <table className="table-auto border-separate border-spacing-2 w-full h-full">
        <caption className="caption-top font-semibold">
          {`Standing ${league.name}`}
        </caption>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className='text-right text-sm md:text-base'>PG</th>
            <th className='text-right text-sm md:text-base'>W</th>
            <th className='text-right text-sm md:text-base'>D</th>
            <th className='text-right text-sm md:text-base'>L</th>
            <th className='text-right text-sm md:text-base'>PTS</th>
          </tr>
        </thead>

        <tbody>
          {
            standing.map((item) => (
              <tr key={item.team?.id} className='mt-2 w-full'>
                <td className='text-center'>
                  {item.rank}
                </td>
                <td>
                  <Link 
                    href={`/team/${item.team.id.toString()}/squad`} 
                    className='flex items-center gap-1 justify-start'
                  >
                    <Image width={24} height={24} src={item.team.logo} alt={item.team.name} />

                    <span className='font-medium text-sm md:text-base'>
                      {item.team.name}
                    </span>
                  </Link>
                </td>
                <td className='text-right text-sm md:text-base'>{item.all.played}</td>
                <td className='text-right text-sm md:text-base'>{item.all.win}</td>
                <td className='text-right text-sm md:text-base'>{item.all.draw}</td>
                <td className='text-right text-sm md:text-base'>{item.all.lose}</td>
                <td className='text-right text-sm md:text-base'>{item.points}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Link 
        href={
          league.name === 'La Liga' 
          ? `/league/${getLeagueId({ leagueName: 'laliga' })}/standing` 
          : `/league/${getLeagueId({ leagueName: 'premier' })}/standing`
        } 
        className='w-fit mt-2 font-bold text-sm md:text-base'
      >
        See more
      </Link>
    </>
  )
}

export default StandingTablePreview