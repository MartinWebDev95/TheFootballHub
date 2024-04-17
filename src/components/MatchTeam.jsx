import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MatchTeam = ({ team }) => {
  return (
    <Link href={`/team/${team.id}/squad`} className="text-center w-full">
      <Image 
        src={team.logo} 
        width={70} 
        height={70} 
        alt={team.name}
        className="mx-auto w-12 h-12 md:w-16 md:h-16"
      />

      <p className="font-semibold uppercase mt-2 text-sm md:text-base">{team.name}</p>
    </Link>
  )
}

export default MatchTeam