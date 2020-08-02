import { get, map } from "lodash";

export const getLadderData = (result) => {
  console.log("???", result);
  return map(result.ladderTeams, (res) => ({
    name: get(res, "teamMembers[0].displayName"),
    clanTag: get(res, "teamMembers[0].clanTag"),
    favoriteRace: get(res, "teamMembers[0].favoriteRace"),
    wins: get(res, "wins"),
    losses: get(res, "losses"),
    mmr: get(res, "mmr"),
  }));
};
