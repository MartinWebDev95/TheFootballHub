import Image from 'next/image';
import { ResultsIcon, StandingIcon, TopScorerIcon, UpcomingMatchesIcon } from './Header';
import { getLeagueId } from '@/utils/getLeagueId';
import Tabs from './Tabs';

const LeagueHero = ({ infoLeague }) => {
  const tabsList = [
    {
      name: "Standing",
      href: `/league/${getLeagueId({ leagueName: infoLeague.name.toLowerCase().replace(' ', '') })}/standing`,
      icon: <StandingIcon />
    },
    {
      name: "Upcomings Matches",
      href: `/league/${getLeagueId({ leagueName: infoLeague.name.toLowerCase().replace(' ', '') })}/upcomings-matches`,
      icon: <UpcomingMatchesIcon />
    },
    {
      name: "Results",
      href: `/league/${getLeagueId({ leagueName: infoLeague.name.toLowerCase().replace(' ', '') })}/results`,
      icon: <ResultsIcon />
    },
    {
      name: "Top Scorers",
      href: `/league/${getLeagueId({ leagueName: infoLeague.name.toLowerCase().replace(' ', '') })}/top-scorers`,
      icon: <TopScorerIcon />
    }
  ];

  return (
    <section className="h-[calc(70vh-3.5rem)] bg-gradient-to-b from-sanfelix-800 to-sanfelix-950 to-75%">
      <div className="container mx-auto px-2 lg:px-0 flex flex-col justify-end h-full z-20">
        <h1 className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-6 uppercase text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full text-center h-full">
          <Image
            width={100}
            height={100}
            src={infoLeague.logo} 
            alt={infoLeague.name} 
            className="w-20 h-20 md:w-24 md:h-24"
          />
          
          {infoLeague.name}
        </h1>

        <Tabs tabsList={tabsList} />
      </div>
    </section>
  )
}

export default LeagueHero;