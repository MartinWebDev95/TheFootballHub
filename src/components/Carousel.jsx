'use client'
import { useRef } from 'react';
import Match from './Match'
import CarouselButton from './CarouselButton';

const Carousel = ({ matches }) => {
  const carouselRef = useRef();
  const matchWidth = useRef();

  return (
    <>
      <div ref={carouselRef} className="flex items-center w-full text-white">
        {matches.map((match, index) => (
          <Match 
            key={match.fixture.id} 
            match={match} 
            matchRef={matchWidth} 
            idMatch={index + 1} 
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-2 pb-4">
        {matches.map((match, index) => (
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