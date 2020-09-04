import { get, map } from "lodash";

export const getLadderData = (result) => {
  return map(result.ladderTeams, (res) => ({
    name: get(res, "teamMembers[0].displayName"),
    clanTag: get(res, "teamMembers[0].clanTag"),
    favoriteRace: get(res, "teamMembers[0].favoriteRace"),
    wins: get(res, "wins"),
    losses: get(res, "losses"),
    mmr: get(res, "mmr"),
    playerId: get(res, "teamMembers[0].id"),
    realm: get(res, "teamMembers[0].realm"),
    region: get(res, "teamMembers[0].region"),
  }));
};
