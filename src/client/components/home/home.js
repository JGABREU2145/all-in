import React, { useState, useEffect } from "react";
import { CircularProgress, Box } from "@material-ui/core/";
import Nav from "../Nav/Nav";
import useClient from "../../hooks";
import { filter, map } from "lodash";
import LadderCard from "../LadderCard/LadderCard";
import ServerButton from "../ServerButton/ServerButton";
import "./style.css";

const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [server, setServer] = useState("1");
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient(
    `https://us.api.blizzard.com/sc2/ladder/grandmaster/${server}`
  );

  console.log("server", server);

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
      <div className="navContainer">
        <div className="logo">
          <img src="https://fontmeme.com/permalink/200731/72c6e16db94d9969435dc70bb284f44c.png"></img>
        </div>
        <div className="buttonContainer">
          <Nav setRace={setRace} className="button" />
          <ServerButton setServer={setServer} className="button" />
        </div>
      </div>

      {map(filteredData, (team, index) => (
        <LadderCard team={team} index={index} />
      ))}
    </div>
  );
};

export default Home;
