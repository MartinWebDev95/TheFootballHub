import standingsLaLiga from '@/lib/mockupStandingLaLiga.json';
import standingsPremier from '@/lib/mockupStandingPL.json';
import nextGamesChampions from '@/lib/mockupNextGamesChampions.json';
import infoTeam from '@/lib/mockupInfoTeam.json';
import squadTeam from '@/lib/mockupSquad.json';

export async function getLaLigaStandingsMockup(){
  return await standingsLaLiga.response[0].league;
}

export async function getPremierLeagueStandingsMockup(){
  return await standingsPremier.response[0].league;
}

export async function getNextGamesChampionsMockup(){
  return await nextGamesChampions.response;
}

export async function getInfoTeam({ idTeam }){
  return await infoTeam.response[0];
}

export async function getTeamSquad({ idTeam }){
  return await squadTeam.response[0].players;
}