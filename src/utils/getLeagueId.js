export const getLeagueId = ({ leagueName }) => {
  if(leagueName === 'premierleague') return 39;
  if(leagueName === 'laliga') return 140;
  if(leagueName === 'championsleague') return 2;
}