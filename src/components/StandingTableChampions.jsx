import Image from 'next/image'
import Link from 'next/link'

const StandingTableChampions = ({ nameGroup }) => {
  return (
    <table className="relative table-auto border-separate border-spacing-2 bg-[url('/assets/champions-banner.webp')] bg-no-repeat bg-cover rounded-md shadow-lg p-3 after:absolute after:top-0 after:left-0 after:bg-black/80 after:rounded-md after:w-full after:h-full after:-z-10 z-20">
      <thead>
        <tr>
          <th></th>
          <th className="uppercase">{nameGroup[0].group}</th>
          <th className='text-right text-sm sm:text-base'>PG</th>
          <th className='text-right text-sm sm:text-base'>W</th>
          <th className='text-right text-sm sm:text-base'>D</th>
          <th className='text-right text-sm sm:text-base'>L</th>
          <th className='text-right text-sm sm:text-base'>PTS</th>
        </tr>
      </thead>

      <tbody>
        {
          nameGroup.map((item) => (
            <tr key={item.team?.id} className='mt-2 w-full'>
              <td className='text-center'>
                {item.rank}
              </td>

              <td className='hover:text-sanfelix-400 transition-all ease-in-out duration-200'>
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

              <td className='text-right text-sm sm:text-base'>{item.all.played}</td>

              <td className='text-right text-sm sm:text-base'>{item.all.win}</td>

              <td className='text-right text-sm sm:text-base'>{item.all.draw}</td>

              <td className='text-right text-sm sm:text-base'>{item.all.lose}</td>
              
              <td className='text-right text-sm sm:text-base font-bold'>{item.points}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default StandingTableChampions