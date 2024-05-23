import { getMatchDate } from "./getMatchDate";

export function groupedByRoundOrMonth({ data, key }){
  const result = data.reduce((acc, match) => {
    let groupedBy;

    if(key === 'month'){
      groupedBy = getMatchDate({ matchDate: match.fixture.date }).dateMonth;
    }else{
      groupedBy = match.league.round;
    }

    if (!acc[groupedBy]) {
        acc[groupedBy] = [];
    }

    acc[groupedBy].push(match);

    return acc;
  }, {});

  return result;
}