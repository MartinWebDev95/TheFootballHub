'use client'

import Match from './Match'
import CarouselButton from './CarouselButton';
import useSlider from '@/hooks/useSlider';

const Carousel = ({ matches }) => {
  const gamesByMatchweek = Object.groupBy(matches, (game) => game.league.round);
  const getResultsLastMatchweek = Object.entries(gamesByMatchweek)[
    Object.entries(gamesByMatchweek).length - 1
  ];

  const { carouselRef, matchWidth, btnRef, setIsEnter } = useSlider();

  return (
    <>
      <div 
        ref={carouselRef} 
        className="flex items-center w-full text-white"
        onMouseEnter={() => setIsEnter(true)} 
        onMouseLeave={() => setIsEnter(false)}
      >
        {getResultsLastMatchweek[1].map((match, index) => (
          <Match 
            key={match.fixture.id} 
            match={match} 
            matchRef={matchWidth} 
            idMatch={index + 1} 
          />
        ))}
      </div>
      
      <div ref={btnRef} className="flex items-center justify-center gap-2 pb-4">
        {getResultsLastMatchweek[1].map((match, index) => (
          <CarouselButton 
            key={match.fixture.id}
            idButton={index}
          />
        ))}
      </div>
    </>
  )
}

export default Carousel