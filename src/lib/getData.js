import standingsLaLiga from '@/lib/mockupStandingLaLiga.json';
import standingsPremier from '@/lib/mockupStandingPL.json';
import nextGamesChampions from '@/lib/mockupNextGamesChampions.json';

export async function getLaLigaStandingsMockup(){
  return standingsLaLiga.response[0].league;
}

export async function getPremierLeagueStandingsMockup(){
  return standingsPremier.response[0].league;
}

export async function getNextGamesChampionsMockup(){
  return nextGamesChampions.response;
}