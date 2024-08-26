import Image from 'next/image'
import Link from 'next/link'

export const ArrowIcon = ({ direction = 'right' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-right pointer-events-none ${direction === 'left' ? 'rotate-180' : ''} lg:hidden stroke-sanfelix-200`}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
};

const NavItem = ({ item, submenuActive, setSubmenuActive }) => {
  return (
    <li className='lg:relative group w-full lg:w-fit'>
      <button 
        type="button" 
        className='flex items-center justify-between p-4 lg:px-0 w-full lg:w-fit border-b-2 border-sanfelix-200 lg:border-none'
        value={item.name}
        onClick={(e) => setSubmenuActive(e.target.value)}
      >
        <div className='flex items-center gap-3 lg:gap-1.5 pointer-events-none'>
          <Image 
            width={24} 
            height={24} 
            src={item.logo} 
            alt={item.alt}
            className='aspect-square'
          />

          {item.name}
        </div>

        <ArrowIcon />
      </button>

      {item.submenu && (
        <ul className={`absolute h-full w-full lg:h-fit lg:w-52 top-0 lg:top-14 left-0 bg-gray lg:rounded-b-md lg:shadow-xl ${submenuActive === item.submenu.menu ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:scale-y-0 lg:origin-top lg:group-hover:scale-y-100 transition-transform ease-in-out duration-300 lg:overflow-hidden`}>
          <li className='lg:hidden'>
            <button 
              type='button' 
              className='flex items-center gap-2 w-full px-4 py-4'
              onClick={() => setSubmenuActive(null)}
            >
              <ArrowIcon direction="left" />

              <div className='flex items-center gap-2'>
                <Image 
                  width={24} 
                  height={24} 
                  src={item.logo} 
                  alt={item.alt}
                  className='aspect-square'
                />

                {item.submenu.menu}
              </div>
            </button>
          </li>

          {item.submenu.submenuList.map((submenuItem) => (
            <li key={submenuItem.name} className='border-t-2 border-sanfelix-200 last-of-type:border-b-2 lg:border-none'>
              <Link href={submenuItem.href} className='p-3 w-full flex items-center gap-2 hover:bg-black hover:text-purple transition-all ease-in-out duration-200'>
                {submenuItem.icon}
                
                <span className='lg:text-sm'>
                  {submenuItem.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavItem