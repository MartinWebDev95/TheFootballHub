import Image from 'next/image'
import Tabs from './Tabs'
import { ResultsIcon, UpcomingMatchesIcon } from './Header';

export const SquadIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  );
}


const TeamHero = ({ infoTeam }) => {
  const tabsList = [
    {
      name: "Squad",
      href: `/team/${infoTeam.team.id}/squad`,
      icon: <SquadIcon />
    },
    {
      name: "Upcomings Matches",
      href: `/team/${infoTeam.team.id}/upcomings-matches`,
      icon: <UpcomingMatchesIcon />
    },
    {
      name: "Results",
      href: `/team/${infoTeam.team.id}/results`,
      icon: <ResultsIcon />
    },
  ];

  return (
    <section 
      className="h-[calc(70vh-3.5rem)] bg-no-repeat bg-cover bg-opacity-90 bg-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/85 z-10 overflow-hidden shadow-xl border-b-2 border-sanfelix-400" 
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

        <Tabs tabsList={tabsList} />
      </div>
    </section>
  )
}

export default TeamHero