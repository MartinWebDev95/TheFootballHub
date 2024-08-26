'use client'
import { useState } from "react"
import PlayerStat from "./PlayerStat";

const CompetitionSelector = ({ stats }) => {
  const [statsByCompetition, setStatsByCompetition] = useState(
    stats.find((comp) => comp.league.name === stats[0].league.name)
  );

  const handleSelect = (e) => {
    setStatsByCompetition(stats.find((comp) => comp.league.name === e.target.value));
  };

  const allPlayerStats = [
    {
      zone: 'Attack',
      zoneStats: [
        {
          statName: 'Goals',
          stat: statsByCompetition.goals.total
        },
        {
          statName: 'Shots',
          stat: statsByCompetition.shots.total
        },
        {
          statName: 'Attempts Dribbles',
          stat: statsByCompetition.dribbles.attempts
        },
        {
          statName: 'Success Dribbles',
          stat: statsByCompetition.dribbles.success
        },
      ]
    },
    {
      zone: 'Distribution',
      zoneStats: [
        {
          statName: 'Assists',
          stat: statsByCompetition.goals.assists
        },
        {
          statName: 'Total Passes',
          stat: statsByCompetition.passes.total
        },
        {
          statName: 'Key Passes',
          stat: statsByCompetition.passes.key
        },
        {
          statName: 'Passes Accuracy',
          stat: statsByCompetition.passes.accuracy
        },
      ]
    },
    {
      zone: 'Defense',
      zoneStats: [
        {
          statName: 'Interceptions',
          stat: statsByCompetition.tackles.interceptions
        },
        {
          statName: 'Blocks',
          stat: statsByCompetition.tackles.blocks
        },
        {
          statName: 'Total Duels',
          stat: statsByCompetition.duels.total
        },
        {
          statName: 'Duels Won',
          stat: statsByCompetition.duels.won
        },
        {
          statName: 'Fouls Drawn',
          stat: statsByCompetition.fouls.drawn
        },
        {
          statName: 'Fouls Committed',
          stat: statsByCompetition.fouls.committed
        },
      ]
    },
  ]

  return (
    <>
      <select 
        className="bg-gray rounded-md p-1 lg:p-2 cursor-pointer border-2 border-transparent lg:hover:border-yellow transition-all ease-in-out duration-200 shadow-lg" 
        onChange={handleSelect}
      >
        {stats.filter((stat) => (stat.league.name !== 'Friendlies Clubs')).map((item) => (
          <option key={item.league.id} value={item.league.name}>
            {item.league.name}
          </option>
        ))}
      </select>
      
      <div className="mt-6">
        {allPlayerStats.map((item) => (
          <>
            <p key={item.zone} className="uppercase font-semibold mb-2 mt-6">{item.zone}</p>
  
            <div className="flex items-center justify-between flex-wrap gap-4">
              {item.zoneStats.map((s) => (
                <PlayerStat key={s.statName} statName={s.statName} stat={s.stat} />
              ))}
           </div>
          </>
        ))}
      </div>
    </>
  )
}

export default CompetitionSelector