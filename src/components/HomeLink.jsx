import Link from "next/link";

export const HomeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-ball-football lg:group-hover:text-sanfelix-400 transition-all ease-in-out duration-200">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
      <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
    </svg>
  );
};

const HomeLink = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <HomeIcon />
      
      <span className="lg:group-hover:text-sanfelix-400 transition-all ease-in-out duration-200 font-medium">
        The Football Hub
      </span>
    </Link>
  )
}

export default HomeLink