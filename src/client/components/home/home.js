import React, { useState, useEffect } from "react";
import { Card, CircularProgress, Typography } from "@material-ui/core/";
import Nav from "../Nav/Nav";
import useClient from "../../hooks";
import { filter, map, slice } from "lodash";
import LadderCard from "../LadderCard/LadderCard";

const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient(
    "https://us.api.blizzard.com/sc2/ladder/grandmaster/1"
  );

  useEffect(() => {
    if (data) {
      const filteredResults = filter(data.ladderTeams, (team) => {
        console.log(team);
        return team.teamMembers[0].favoriteRace === race.toLowerCase();
      });
      setFilteredData(filteredResults);
    }
  }, [data, race]);

  useEffect(() => {
    console.log("THE RACE IS NOW", race);
  }, [race]);

  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Nav setRace={setRace} />
      {map(filteredData, (team, index) => (
        <LadderCard team={team} index={index} />
      ))}
    </div>
  );
};

export default Home;
