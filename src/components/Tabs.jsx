import Link from 'next/link'

const Tabs = ({ tabsList }) => {
  return (
    <ul className='text-sanfelix-50 flex items-center'>
      {tabsList.map((item) => (
        <li key={item.name} className='group'>
          <Link 
            href={item.href}
            className='bg-black p-4 border-r-2 border-sanfelix-400 flex items-center gap-3 group-last:border-0 group-hover:text-sanfelix-400 transition-all ease-in-out duration-200'
          >
            {item.icon}

            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tabs;