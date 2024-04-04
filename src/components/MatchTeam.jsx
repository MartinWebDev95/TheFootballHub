import Image from 'next/image'
import React from 'react'

const MatchTeam = ({ team }) => {
  return (
    <div className="text-center w-full">
      <Image 
        src={team.logo} 
        width={70} 
        height={70} 
        alt={team.name}
        className="mx-auto"
      />

      <p className="font-semibold uppercase mt-2">{team.name}</p>
    </div>
  )
}

export default MatchTeam