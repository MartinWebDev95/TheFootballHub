import Image from 'next/image'
import Link from 'next/link'

const PodiumBox = ({ scorer }) => {
  return (
    <li>
      <Link href={`/player/${scorer.player.id}`} className={`flex flex-col items-center transition-all ease-in-out duration-200 rounded-lg shadow-lg w-48 sm:flex-row sm:w-96 outline outline-2 outline-transparent ${scorer.statistics[0].league.name === 'UEFA Champions League' ? 'relative bg-[url("/assets/champions-banner.webp")] bg-no-repeat bg-right md:bg-center bg-cover after:absolute after:top-0 after:left-0 after:bg-black/80 after:rounded-lg after:w-full after:h-full after:-z-10 z-20 hover:outline-white' : 'bg-black hover:outline-sanfelix-400'}`}>
        <Image 
          width={80}
          height={80} 
          src={scorer.player.photo} 
          alt={scorer.player.name} 
          className='object-cover object-top w-full rounded-t-lg h-40 sm:w-48 sm:rounded-none sm:rounded-s-lg'
        />

        <div class="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-center">
            {scorer.player.name}
          </h5>

          <p class="text-center text-5xl font-bold">
            {scorer.statistics[0].goals.total}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default PodiumBox