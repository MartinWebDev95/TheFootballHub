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
      <div className='container mx-auto px-2 lg:px-0 flex items-center justify-between'>
        <HomeLink />

        <nav>
          <ul className='flex justify-between items-center gap-8'>
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