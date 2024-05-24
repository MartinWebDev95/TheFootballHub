'use client'

import Match from './Match'
import CarouselButton from './CarouselButton';
import useSlider from '@/hooks/useSlider';
import { groupedBy } from '@/utils/groupedBy';

const Carousel = ({ matches }) => {
  const gamesByMatchweek = groupedBy({ data: matches, key: 'round' });
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