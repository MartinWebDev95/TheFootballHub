import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StandingTable = ({ standing }) => {
  return (
    <table className="w-full h-full border-separate border-spacing-y-6">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th className='text-right text-sm md:text-base font-bold' title="Games Played">PG</th>
          <th className='text-right text-sm md:text-base font-bold' title="Wins">W</th>
          <th className='text-right text-sm md:text-base font-bold' title="Draws">D</th>
          <th className='text-right text-sm md:text-base font-bold' title="Loses">L</th>
          <th className='text-right text-sm md:text-base font-bold hidden md:table-cell' title="Goals For">
            GF
          </th>
          <th className='text-right text-sm md:text-base font-bold hidden md:table-cell' title="Goals Against">
            GA
          </th>
          <th className='text-right text-sm md:text-base font-bold hidden md:table-cell' title="Difference Goals">
            GD
          </th>
          <th className='text-right text-sm md:text-base font-bold' title="Points">PTS</th>
        </tr>
      </thead>

      <tbody>
        {
          standing.map((item) => (
            <tr key={item.team?.id}>
              <td className='text-left'>
                {item.rank}
              </td>
              <td className='hover:text-purple transition-all ease-in-out duration-200'>
                <Link 
                  href={`/team/${item.team.id.toString()}/squad`} 
                  className='flex items-center gap-3 justify-start'
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
              <td className='text-right text-sm md:text-base hidden md:table-cell'>
                {item.all.goals.for}
              </td>
              <td className='text-right text-sm md:text-base hidden md:table-cell'>
                {item.all.goals.against}
              </td>
              <td className='text-right text-sm md:text-base hidden md:table-cell'>
                {item.goalsDiff}
              </td>
              <td className='text-right text-sm md:text-base font-bold'>{item.points}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default StandingTable