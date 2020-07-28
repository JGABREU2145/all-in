import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core/";
import Nav from "../Nav/Nav";
import useClient from "../../hooks";
import { filter, map } from "lodash";
import LadderCard from "../LadderCard/LadderCard";

const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient(
    "https://us.api.blizzard.com/sc2/ladder/grandmaster/1"
  );

  useEffect(() => {
    if (data) {
      if (race !== "All") {
        const filteredResults = filter(data.ladderTeams, (team) => {
          return team.teamMembers[0].favoriteRace === race.toLowerCase();
        });
        // filteredData(data);
        setFilteredData(filteredResults);
      } else {
        setFilteredData(data.ladderTeams);
      }
    }
  }, [data, race]);

  useEffect(() => {}, [race]);

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
