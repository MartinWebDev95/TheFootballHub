import MatchTeam from './MatchTeam'

const Match = ({ match, matchRef, idMatch }) => {
  return (
    <div ref={matchRef} data-id={idMatch} aria-hidden="true" className="flex items-center justify-around min-w-full py-4 px-2 md:px-0">
      <MatchTeam team={match.teams.home} />

      <div className="w-full text-yellow">
        <p className="text-center mb-1 text-sm">{match.fixture.venue.name}</p>
        <div className="text-4xl flex justify-center items-center gap-2">
          <p className={`${match.goals.home > match.goals.away ? 'font-bold' : 'font-normal'} flex items-center gap-2`}>
            {match.score.penalty.home !== null && (
              <span className={`${match.score.penalty.home > match.score.penalty.away ? 'font-bold' : 'font-normal'} text-sm`}>
                ({match.score.penalty.home})
              </span>
            )}

            {match.goals.home}
          </p>

          <p className="font-bold text-yellow">
            -
          </p>

          <p className={`${match.goals.away > match.goals.home ? 'font-bold' : 'font-normal'} flex items-center gap-2`}>
            {match.goals.away}

            {match.score.penalty.away !== null && (
              <span className={`${match.score.penalty.away > match.score.penalty.home ? 'font-bold' : 'font-normal'} text-sm`}>
                ({match.score.penalty.away})
              </span>
            )}
          </p> 
        </div>
      </div>

      <MatchTeam team={match.teams.away} />
    </div>
  )
}

export default Match