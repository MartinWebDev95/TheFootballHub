import Image from 'next/image'
import Link from 'next/link'

export const ArrowIcon = ({ direction = 'right' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-right pointer-events-none ${direction === 'left' ? 'rotate-180' : ''} lg:hidden`}>
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
        className='flex items-center justify-between text-sm lg:text-base py-4 px-4 lg:px-0 w-full lg:w-fit border-b border-black lg:border-none'
        value={item.name}
        onClick={(e) => setSubmenuActive(e.target.value)}
      >
        <div className='flex items-center gap-3 lg:gap-1.5 pointer-events-none'>
          <Image 
            width={24} 
            height={24} 
            src={item.logo} 
            alt={item.alt}
          />

          {item.name}
        </div>

        <ArrowIcon />
      </button>

      {item.submenu && (
        <ul className={`absolute h-full w-full lg:h-fit lg:w-fit top-0 lg:top-14 left-0 bg-red-500 lg:rounded-md lg:p-3 lg:shadow-xl ${submenuActive === item.submenu.menu ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:hidden lg:group-hover:block transition-transform ease-in-out duration-200`}>
          <li className='lg:hidden'>
            <button 
              type='button' 
              className='flex items-center gap-4 w-full px-4 py-4'
              onClick={() => setSubmenuActive(null)}
            >
              <ArrowIcon direction="left" />

              {item.submenu.menu}
            </button>
          </li>

          {item.submenu.submenuList.map((submenuItem) => (
            <li key={submenuItem.name} className='lg:mb-2 lg:last-of-type:mb-0 border-t border-black last-of-type:border-b lg:border-none'>
              <Link href={submenuItem.href} className='py-4 lg:py-0 px-4 lg:px-2 w-full block'>
                {submenuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavItem