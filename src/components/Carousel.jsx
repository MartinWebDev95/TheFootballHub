'use client'

import { useRef } from 'react';
import Match from './Match'
import CarouselButton from './CarouselButton';

const Carousel = ({ matches }) => {
  const carouselRef = useRef();
  const matchWidth = useRef();

  const gamesByMatchweek = Object.groupBy(matches, (game) => game.league.round);
  const getResultsLastMatchweek = Object.entries(gamesByMatchweek)[
    Object.entries(gamesByMatchweek).length - 1
  ];

  return (
    <>
      <div ref={carouselRef} className="flex items-center w-full text-white">
        {getResultsLastMatchweek[1].map((match, index) => (
          <Match 
            key={match.fixture.id} 
            match={match} 
            matchRef={matchWidth} 
            idMatch={index + 1} 
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2 pb-4">
        {getResultsLastMatchweek[1].map((match, index) => (
          <CarouselButton 
            key={match.fixture.id}
            carouselRef={carouselRef} 
            matchWidth={matchWidth}
            idButton={index} 
          />
        ))}
      </div>
    </>
  )
}

export default Carousel