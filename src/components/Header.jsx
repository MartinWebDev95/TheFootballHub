'use client'

import { useState } from 'react'
import HomeLink from './HomeLink'
import MenuBtn from './MenuBtn'
import NavItem from './NavItem'

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
          href: "/la-liga/standing",
        },
        {
          name: "Upcomings Matches",
          href: "/la-liga/upcoming-matches",
        },
        {
          name: "Results",
          href: "/la-liga/results",
        },
        {
          name: "Top Scorers",
          href: "/la-liga/top-scorers",
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
          href: "/premier-league/standing",
        },
        {
          name: "Upcomings Matches",
          href: "/premier-league/upcoming-matches",
        },
        {
          name: "Results",
          href: "/premier-league/results",
        },
        {
          name: "Top Scorers",
          href: "/premier-league/top-scorers",
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
          href: "/champions-league/standing",
        },
        {
          name: "Upcomings Matches",
          href: "/champions-league/upcoming-matches",
        },
        {
          name: "Results",
          href: "/champions-league/results",
        },
        {
          name: "Top Scorers",
          href: "/champions-league/top-scorers",
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
          className='w-full lg:w-fit absolute lg:static h-full lg:h-fit bg-yellow-500 lg:bg-transparent top-12 left-0 aria-[hidden=true]:translate-x-full aria-[hidden=false]:translate-x-0 lg:aria-[hidden=true]:translate-x-0 transition-transform ease-in-out duration-200'
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