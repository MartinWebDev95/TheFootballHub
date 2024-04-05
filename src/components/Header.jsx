import HomeLink from './HomeLink'
import NavItem from './NavItem'

const navLinks = [
  {
    name: "La Liga",
    href: "/la-liga",
    logo: "/assets/laLigaLogo.png",
    alt: "Logo La Liga"
  },
  {
    name: "Premier League",
    href: "/premier-league",
    logo: "/assets/premierLogo.png",
    alt: "Logo Premier League"
  },
  {
    name: "Champions League",
    href: "/champions-league",
    logo: "/assets/championsLogo.png",
    alt: "Logo Champions League"
  },
]

const Header = () => {
  return (
    <header className='w-full bg-green-800 shadow-xl text-white py-4'>
      <div className='container mx-auto px-2 lg:px-0 flex flex-col lg:flex-row gap-2 items-center lg:justify-between'>
        <HomeLink />

        <nav className='w-full lg:w-fit'>
          <ul className='flex items-center justify-around lg:justify-end gap-4 sm:gap-6 lg:gap-8'>
            {navLinks.map((item) => (
              <NavItem 
                key={item.name} 
                item={item}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header