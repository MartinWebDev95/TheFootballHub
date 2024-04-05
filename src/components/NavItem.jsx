import Image from 'next/image'
import Link from 'next/link'

const NavItem = ({ item }) => {
  return (
    <li>
      <Link href={item.href} className='flex flex-col justify-between sm:flex-row items-center gap-1.5 text-sm lg:text-base'>
        <Image 
          width={24} 
          height={24} 
          src={item.logo} 
          alt={item.alt}
        />

        {item.name}
      </Link>
    </li>
  )
}

export default NavItem