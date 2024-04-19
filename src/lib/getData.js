export async function getStandingLeague({ idLeague }) {
  const response = await fetch(`https://v3.football.api-sports.io/standings?league=${idLeague}&season=2023`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response[0].league;
}

export async function getInfoTeam({ idTeam }) {
  const response = await fetch(`https://v3.football.api-sports.io/teams?id=${idTeam}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();
  
  return data.response[0];
}

export async function getTeamSquad({ idTeam }) {
  const response = await fetch(`https://v3.football.api-sports.io/players/squads?team=${idTeam}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();
  
  return data.response[0].players;
}

export async function getTeamResults({ idTeam }) {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${idTeam}&season=2023&status=FT`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response;
}

export async function getTeamNextGames({ idTeam }) {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?team=${idTeam}&season=2023&status=NS`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response;
}

export async function getLeagueNextGames({ idLeague }) {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${idLeague}&season=2023&status=NS`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response;
}

export async function getLeagueResults({ idLeague }) {
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=${idLeague}&season=2023&status=FT-PEN`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response;
}

export async function getLeagueTopScorers({ idLeague }) {
  const response = await fetch(`https://v3.football.api-sports.io/players/topscorers?league=${idLeague}&season=2023`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return data.response;
}

export async function getPlayer({ idPlayer }) {
  const response = await fetch(`https://v3.football.api-sports.io/players?id=${idPlayer}&season=2023`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.API_KEY}`
    }
  })

  const data = await response.json();

  return {
    player: data.response[0].player,
    stats: data.response[0].statistics.filter((stats) => stats.team.id === data.response[0].statistics[0].team.id),
  };
}