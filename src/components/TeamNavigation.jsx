import Link from 'next/link'

const TeamNavigation = ({ idTeam }) => {
  return (
    <ul className='text-white flex items-center'>
      <li className='mb-3'>
        <Link 
          href={`/team/${idTeam}/squad`}
          className='bg-black p-4 rounded-tl-lg'
        >
          Squad
        </Link>
      </li>

      <li className='mb-3'>
        <Link 
          href={`/team/${idTeam}/upcomings-matches`}
          className='bg-black p-4 border-x-2 border-white/50'
        >
          Upcomings Matches
        </Link>
      </li>

      <li className='mb-3'>
        <Link 
          href={`/team/${idTeam}/results`}
          className='bg-black p-4 rounded-tr-lg'
        >
          Results
        </Link>
      </li>
    </ul>
  )
}

export default TeamNavigation