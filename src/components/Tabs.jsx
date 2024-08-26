'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Tabs = ({ tabsList }) => {
  const pathname = usePathname();

  return (
    <ul className='text-sanfelix-50 flex items-center justify-center lg:justify-start'>
      {tabsList.map((item) => (
        <li key={item.name} className='group'>
          <Link 
            href={item.href}
            className={`bg-gray px-8 py-4 md:px-6 lg:px-4 border-r-2 border-yellow flex items-center gap-3 group-last:border-0 group-hover:text-purple transition-all ease-in-out duration-200 ${pathname === item.href ? 'text-purple' : 'text-yellow'}`}
          >
            {item.icon}

            <span className='hidden md:block'>
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tabs;