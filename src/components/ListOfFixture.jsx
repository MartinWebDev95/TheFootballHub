'use client'

import { useState } from 'react';
import Fixture from './Fixture';
import { groupedByRoundOrMonth } from '@/utils/groupedByRoundOrMonth';

const ListOfFixture = ({ results, resultsByTeam = false }) => {
  const gamesByMatchweek = resultsByTeam 
    ? groupedByRoundOrMonth({ data: results, key: 'month' })
    : groupedByRoundOrMonth({ data: results, key: 'round' });

  const [filteredFixtures, setFilteredFixtures] = useState(null);
  
  const handleSelect = (e) => {
    const selectedRound = Object.entries(gamesByMatchweek).find((game) => {
      return e.target.value === game[0];
    });
    
    if (selectedRound) {
      const round = selectedRound[0];
      const fixtures = selectedRound[1];
      
      setFilteredFixtures({ round, fixtures });
    }else{
      setFilteredFixtures(null);
    }
  }
  
  return (
    <>
      <select 
        className="bg-black rounded-md p-1 lg:p-2 cursor-pointer border-2 border-transparent lg:hover:border-sanfelix-400 transition-all ease-in-out duration-200" 
        onChange={handleSelect}
      >
        <option value="All">
          All rounds
        </option>

        {Object.entries(gamesByMatchweek).map((round) => (
          <option key={round[0]} value={round[0]}>
            {round[0]}
          </option>
        ))}
      </select>

      <ul className='mt-4'>
        {
          filteredFixtures !== null ? (
            <li className='mb-4'>
              <p className='mb-4 font-bold text-xl'>{filteredFixtures.round}</p>
  
              <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredFixtures?.fixtures?.map((item) => (
                  <Fixture key={item.fixture.id} item={item} />
                ))}
              </ul>
            </li>
          ) : (
            Object.entries(gamesByMatchweek).map((game) => (
              <li key={game[0]} className='mb-4'>
                <p className='mb-4 font-bold text-xl'>{game[0]}</p>
    
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {game[1].map((item) => (
                    <Fixture key={item.fixture.id} item={item} />
                  ))}
                </ul>
              </li>
            ))
          )
        }
      </ul>
    </>
  )
}

export default ListOfFixture