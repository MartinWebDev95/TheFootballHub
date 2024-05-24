import { getMatchDate } from "./getMatchDate";

export function groupedBy({ data, key }){
  const result = data.reduce((acc, currentData) => {
    let groupedBy;

    if(key === 'month'){
      groupedBy = getMatchDate({ matchDate: currentData.fixture.date }).dateMonth;
    }else if(key === 'round'){
      groupedBy = currentData.league.round;
    }else{
      groupedBy = currentData.position;
    }

    if (!acc[groupedBy]) {
        acc[groupedBy] = [];
    }

    acc[groupedBy].push(currentData);

    return acc;
  }, {});

  return result;
}