export const getMatchDate = ({ matchDate }) => {
  const date = new Date(matchDate);

  const weekDay = date.toLocaleString('en-US', { weekday: 'short'});
  const numberDay = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short'});
  const matchHour = date.toLocaleString('en-US', { hour: '2-digit'})

  return {
    dateFull: `${weekDay} ${numberDay}, ${month} - ${matchHour}`,
    dateMonth: month,
    onlyDate: `${weekDay} ${numberDay}, ${month}`,
    onlyHour: matchHour
  };
};