import React from 'react'
import Fixture from './Fixture'

const ListOfFixture = ({ gamesByMonth }) => {
  return (
    <ul>
      {Object.entries(gamesByMonth).map((game) => (
        <li key={game[0]} className='mb-4'>
          <p className='mb-4 font-bold text-xl'>{game[0]}</p>

          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {game[1].map((item) => (
              <Fixture key={item.fixture.id} item={item} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default ListOfFixture