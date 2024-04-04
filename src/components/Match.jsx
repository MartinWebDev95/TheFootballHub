import { getMatchDate } from '@/utils/getMatchDate'
import MatchTeam from './MatchTeam'

const Match = ({ match }) => {
  return (
    <div className="flex items-center justify-around min-w-full">
      <MatchTeam team={match.teams.home} />

      <div className="w-full">
        <p className="text-center mb-1 text-sm">{match.fixture.venue.name}</p>
        {
          match.goals.home === null ? (
            <p className="text-center">
              {getMatchDate({ matchDate: match.fixture.date })}
            </p>
          ) : (
            <p className="text-4xl flex justify-center items-center gap-2">
              <span className={`${match.goals.home > match.goals.away ? 'font-bold' : 'font-normal'}`}>
                {match.goals.home}
              </span>
              <span className="font-bold text-cyan-600">
                -
              </span>
              <span className={`${match.goals.away > match.goals.home ? 'font-bold' : 'font-normal'}`}>
                {match.goals.away}
              </span> 
            </p>
          )
        }
      </div>

      <MatchTeam team={match.teams.away} />
    </div>
  )
}

export default Match