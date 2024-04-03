export const getLeagueId = ({ leagueName }) => {
  if(leagueName === 'premier') return 39;
  if(leagueName === 'laliga') return 140;
  if(leagueName === 'champions') return 2;
}