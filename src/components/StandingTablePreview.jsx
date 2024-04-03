import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StandingTablePreview = ({ standing, league }) => {
  return (
    <div className='bg-sky-500 p-3 rounded-lg shadow-lg'>
      <table className="table-auto border-separate border-spacing-2">
        <caption class="caption-top font-semibold">
          {`Standing ${league.name}`}
        </caption>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>PG</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>PTS</th>
          </tr>
        </thead>

        <tbody>
          {
            standing.map((item) => (
              <tr key={item.team?.id} className='mt-2'>
                <td>{item.rank} -</td>
                <td className="flex items-center gap-1">
                  <Image width={24} height={24} src={item.team.logo} alt={item.team.name} />

                  <span className='font-semibold'>
                    {item.team.name}
                  </span>
                </td>
                <td>{item.all.played}</td>
                <td>{item.all.win}</td>
                <td>{item.all.draw}</td>
                <td>{item.all.lose}</td>
                <td>{item.points}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Link 
        href={league.name === 'Premier League' ? '/premier-league/standing' : '/la-liga/standing'} 
        className='text-right w-full block mt-2 font-bold'
      >
        See more
      </Link>
    </div>
  )
}

export default StandingTablePreview