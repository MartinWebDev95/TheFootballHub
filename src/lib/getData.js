import standingsLaLiga from '@/lib/mockupStandingLaLiga.json';
import standingsPremier from '@/lib/mockupStandingPL.json';
import standingsChampions from '@/lib/mockupStandingChampions.json';
import nextGamesChampions from '@/lib/mockupNextGamesChampions.json';
import infoTeam from '@/lib/mockupInfoTeam.json';
import squadTeam from '@/lib/mockupSquad.json';
import infoPlayer from '@/lib/mockupPlayers.json';
import teamResults from '@/lib/mockupTeamResults.json';
import teamNextGames from '@/lib/mockupTeamNextGames.json';
import leagueNextGames from '@/lib/mockupNextLeagueGames.json';
import leagueResults from '@/lib/mockupLeagueResults.json';
import topScorers from '@/lib/mockupTopScorersLaLiga.json';

export async function getLaLigaStandingsMockup() {
  return await standingsLaLiga.response[0].league;
}

export async function getPremierLeagueStandingsMockup() {
  return await standingsPremier.response[0].league;
}

export async function getStandingLeagueMockup({ idLeague }) {
  if(idLeague === '2'){
    return await standingsChampions.response[0].league;
  }

  return await standingsLaLiga.response[0].league;
}

export async function getNextGamesChampionsMockup() {
  return await nextGamesChampions.response;
}

export async function getInfoTeam({ idTeam }) {
  return await infoTeam.response[0];
}

export async function getTeamSquad({ idTeam }) {
  return await squadTeam.response[0].players;
}

export async function getTeamResultsMockup({ idTeam }) {
  return await teamResults.response;
}

export async function getTeamNextGamesMockup({ idTeam }) {
  return await teamNextGames.response;
}

export async function getLeagueNextGamesMockup({ idLeague }) {
  if(idLeague === '2') return await nextGamesChampions.response;
  
  return await leagueNextGames.response;
}

export async function getLeagueResultsMockup({ idLeague }) {
  return await leagueResults.response;
}

export async function getLeagueTopScorers({ idLeague }) {
  return await topScorers.response;
}

export async function getPlayer({ idPlayer }) {
  return {
    player: await infoPlayer.response[0].player,
    stats: await infoPlayer.response[0].statistics.filter((stats) => stats.team.id === infoPlayer.response[0].statistics[0].team.id),
  };
}