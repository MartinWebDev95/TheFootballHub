import Image from 'next/image'
import TeamNavigation from './TeamNavigation'

const TeamHero = ({ infoTeam }) => {
  return (
    <section 
      className="h-[calc(70vh-3.5rem)] bg-no-repeat bg-cover bg-opacity-90 bg-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/85 z-10 overflow-hidden" 
      style={{ backgroundImage: `url("${infoTeam.venue.image}")` }}
    >
      <div className="relative container mx-auto px-2 lg:px-0 flex flex-col justify-end h-full z-20">
        <h1 className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-6 uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full text-center h-full">
          <Image
            width={100} 
            height={100} 
            src={infoTeam.team.logo} 
            alt={infoTeam.team.logo} 
            className="w-20 h-20 md:w-24 md:h-24"
          />
          
          {infoTeam.team.name}
        </h1>

        <TeamNavigation idTeam={infoTeam.team.id} />
      </div>
    </section>
  )
}

export default TeamHero