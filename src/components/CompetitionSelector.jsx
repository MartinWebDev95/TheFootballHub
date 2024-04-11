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

  return (
    <>
      <select 
        className="bg-black rounded-md p-2 cursor-pointer border-2 border-transparent lg:hover:border-sanfelix-400 transition-all ease-in-out duration-200" 
        onChange={handleSelect}
      >
        {stats.filter((stat) => (stat.league.name !== 'Friendlies Clubs')).map((item) => (
          <option key={item.league.id} value={item.league.name}>
            {item.league.name}
          </option>
        ))}
      </select>
      
      <div className="mt-6">
        <p className="uppercase font-semibold mb-2">Attack</p>
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <PlayerStat statName="Goals" stat={statsByCompetition.goals.total} />
          <PlayerStat statName="Shots" stat={statsByCompetition.shots.total} />
          <PlayerStat statName="Attempts Dribbles" stat={statsByCompetition.dribbles.attempts} />
          <PlayerStat statName="Success Dribbles" stat={statsByCompetition.dribbles.success} />
        </div>

        <p className="uppercase font-semibold mb-2 mt-6">Distribution</p>
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <PlayerStat statName="Assists" stat={statsByCompetition.goals.assists} />
          <PlayerStat statName="Total Passes" stat={statsByCompetition.passes.total} />
          <PlayerStat statName="Key Passes" stat={statsByCompetition.passes.key} />
          <PlayerStat statName="Passes Accuracy" stat={`${statsByCompetition.passes.accuracy}%`} />
        </div>

        <p className="uppercase font-semibold mb-2 mt-6">Defense</p>
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <PlayerStat statName="Interceptions" stat={statsByCompetition.tackles.interceptions} />
          <PlayerStat statName="Blocks" stat={statsByCompetition.tackles.blocks} />
          <PlayerStat statName="Total Duels" stat={statsByCompetition.duels.total} />
          <PlayerStat statName="Duels Won" stat={statsByCompetition.duels.won} />
          <PlayerStat statName="Fouls Drawn" stat={statsByCompetition.fouls.drawn} />
          <PlayerStat statName="Fouls Committed" stat={statsByCompetition.fouls.committed} />
        </div>
      </div>
    </>
  )
}

export default CompetitionSelector