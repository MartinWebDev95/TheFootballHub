import Image from 'next/image'
import Link from 'next/link'

const PodiumBox = ({ scorer, rank }) => {
  return (
    <li data-rank={rank+1} className='group'>
      <Link href={`/player/${scorer.player.id}`} className={`flex flex-col items-center transition-all ease-in-out duration-200 rounded-lg shadow-lg group-data-[rank='1']:w-48 group-data-[rank='2']:w-44 group-data-[rank='3']:w-40 sm:flex-row sm:group-data-[rank='1']:w-96 sm:group-data-[rank='2']:w-80 sm:group-data-[rank='3']:w-72 outline outline-2 outline-transparent hover:outline-yellow ${scorer.statistics[0].league.name === 'UEFA Champions League' ? 'relative bg-[url("/assets/champions-banner.webp")] bg-no-repeat bg-right md:bg-center bg-cover after:absolute after:top-0 after:left-0 after:bg-black/80 after:rounded-lg after:w-full after:h-full after:-z-10 z-20' : 'bg-gray'}`}>
        <Image 
          width={80}
          height={80} 
          src={scorer.player.photo} 
          alt={scorer.player.name} 
          className={`object-cover object-top w-full rounded-t-lg h-40 sm:rounded-none sm:rounded-s-lg sm:group-data-[rank='1']:w-48 sm:group-data-[rank='2']:w-44 sm:group-data-[rank='3']:w-32 sm:group-data-[rank='1']:h-44 sm:group-data-[rank='2']:h-40 sm:group-data-[rank='3']:h-36`}
        />

        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className={`mb-2 font-bold tracking-tight text-center group-data-[rank='1']:text-2xl group-data-[rank='2']:text-xl group-data-[rank='3']:text-lg`}>
            {scorer.player.name}
          </h5>

          <p className="text-center text-5xl font-bold">
            {scorer.statistics[0].goals.total}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default PodiumBox