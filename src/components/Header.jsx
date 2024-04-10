'use client'

import { useState } from 'react'
import HomeLink from './HomeLink'
import MenuBtn from './MenuBtn'
import NavItem from './NavItem'
import { getLeagueId } from '@/utils/getLeagueId'

export const StandingIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 6l9 0" />
      <path d="M4 12l7 0" /><path d="M4 18l7 0" />
      <path d="M15 15l3 3l3 -3" />
      <path d="M18 6l0 12" />
    </svg>
  )
}

export const ResultsIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M12 5v2" />
      <path d="M12 10v1" />
      <path d="M12 14v1" />
      <path d="M12 18v1" />
      <path d="M7 3v2" />
      <path d="M17 3v2" />
      <path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
      <path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
    </svg>
  )
}

export const TopScorerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shoe">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
      <path d="M14 13l1 -2" />
      <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
      <path d="M10 12l1.5 -3" />
    </svg>
  )
}

export const UpcomingMatchesIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-month">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M7 14h.013" />
      <path d="M10.01 14h.005" />
      <path d="M13.01 14h.005" />
      <path d="M16.015 14h.005" />
      <path d="M13.015 17h.005" />
      <path d="M7.01 17h.005" />
      <path d="M10.01 17h.005" />
    </svg>
  )
}

const navLinks = [
  {
    name: "La Liga",
    href: "/la-liga/standing",
    logo: "/assets/laLigaLogo.png",
    alt: "Logo La Liga",
    submenu: {
      menu: 'La Liga',
      submenuList: [
        {
          name: "Standing",
          href: `/league/${getLeagueId({ leagueName: 'laliga' })}/standing`,
          icon: <StandingIcon />
        },
        {
          name: "Upcomings Matches",
          href: `/league/${getLeagueId({ leagueName: 'laliga' })}/upcomings-matches`,
          icon: <UpcomingMatchesIcon />
        },
        {
          name: "Results",
          href: `/league/${getLeagueId({ leagueName: 'laliga' })}/results`,
          icon: <ResultsIcon />
        },
        {
          name: "Top Scorers",
          href: `/league/${getLeagueId({ leagueName: 'laliga' })}/top-scorers`,
          icon: <TopScorerIcon />
        }
      ]
    } 
  },
  {
    name: "Premier League",
    href: "/premier-league/standing",
    logo: "/assets/premierLogo.png",
    alt: "Logo Premier League",
    submenu: {
      menu: 'Premier League',
      submenuList: [
        {
          name: "Standing",
          href: `/league/${getLeagueId({ leagueName: 'premier' })}/standing`,
          icon: <StandingIcon />
        },
        {
          name: "Upcomings Matches",
          href: `/league/${getLeagueId({ leagueName: 'premier' })}/upcomings-matches`,
          icon: <UpcomingMatchesIcon />
        },
        {
          name: "Results",
          href: `/league/${getLeagueId({ leagueName: 'premier' })}/results`,
          icon: <ResultsIcon />
        },
        {
          name: "Top Scorers",
          href: `/league/${getLeagueId({ leagueName: 'premier' })}/top-scorers`,
          icon: <TopScorerIcon />
        }
      ]
    }
  },
  {
    name: "Champions League",
    href: "/champions-league/standing",
    logo: "/assets/championsLogo.png",
    alt: "Logo Champions League",
    submenu: {
      menu: 'Champions League',
      submenuList: [
        {
          name: "Standing",
          href: `/league/${getLeagueId({ leagueName: 'champions' })}/standing`,
          icon: <StandingIcon />
        },
        {
          name: "Upcomings Matches",
          href: `/league/${getLeagueId({ leagueName: 'champions' })}/upcomings-matches`,
          icon: <UpcomingMatchesIcon />
        },
        {
          name: "Results",
          href: `/league/${getLeagueId({ leagueName: 'champions' })}/results`,
          icon: <ResultsIcon />
        },
        {
          name: "Top Scorers",
          href: `/league/${getLeagueId({ leagueName: 'champions' })}/top-scorers`,
          icon: <TopScorerIcon />
        }
      ]
    }
  },
]

const Header = () => {

  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [submenuActive, setSubmenuActive] = useState(null);

  return (
    <header className='w-full bg-green-800 shadow-xl text-white h-12 lg:h-fit'>
      <div className='container mx-auto px-2 lg:px-0 flex items-center justify-between gap-2 h-full'>
        <HomeLink />

        <MenuBtn 
          isMenuHidden={isMenuHidden} 
          setIsMenuHidden={setIsMenuHidden}
          setSubmenuActive={setSubmenuActive}
        />

        <nav 
          aria-hidden={isMenuHidden} 
          className='w-full lg:w-fit absolute lg:static h-full lg:h-fit bg-yellow-500 lg:bg-transparent top-12 left-0 aria-[hidden=true]:translate-x-full aria-[hidden=false]:translate-x-0 lg:aria-[hidden=true]:translate-x-0 transition-transform ease-in-out duration-200 z-30'
        >
          <ul className='flex flex-col items-start lg:flex-row lg:items-center lg:gap-8'>
            {navLinks.map((item) => (
              <NavItem 
                key={item.name} 
                item={item}
                submenuActive={submenuActive}
                setSubmenuActive={setSubmenuActive}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header