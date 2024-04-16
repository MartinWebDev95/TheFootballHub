import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ScorersTable = ({ scorers }) => {
  return (
    <table className='mt-4 table-auto w-full border-separate border-spacing-4'>
      <thead>
        <tr className='uppercase'>
          <th className='text-left'>POS</th>
          <th>Player</th>
          <th>Team</th>
          <th className='hidden md:block text-center'>Goals Scored</th>
          <th title='Goals Scored' className='block md:hidden text-center'>GS</th>
        </tr>
      </thead>

      <tbody>
        {scorers.map((scorer, index) => (
          <tr key={scorer.player.id}>
            <td className='text-sm md:text-base text-left'>
              {index + 4}
            </td>

            <td className='text-sm md:text-base lg:pl-24'>
              <Link href={`/player/${scorer.player.id}`} className='hover:text-sanfelix-400 transition-all ease-in-out duration-200 flex items-center gap-4 w-fit'>
                <Image 
                  width={45}
                  height={45} 
                  src={scorer.player.photo} 
                  alt={scorer.player.name} 
                  className='rounded-full hidden sm:block'
                />

                {scorer.player.name}
              </Link>
            </td>

            <td className='text-sm md:text-base lg:pl-24'>
              <Link 
                href={`/team/${scorer.statistics[0].team.id}/squad`} 
                className='hover:text-sanfelix-400 transition-all ease-in-out duration-200 flex items-center gap-4 w-fit'
              >
                <Image 
                  width={35}
                  height={35} 
                  src={scorer.statistics[0].team.logo} 
                  alt={scorer.statistics[0].team.name}
                  className='hidden sm:block' 
                />

                {scorer.statistics[0].team.name}
              </Link>
            </td>

            <td className='text-sm md:text-base lg:text-lg text-center font-bold'>
              {scorer.statistics[0].goals.total}
            </td>
          </tr>          
        ))}
      </tbody>
    </table>
  )
}

export default ScorersTable