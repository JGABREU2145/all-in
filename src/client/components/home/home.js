import React, { useEffect, useState } from "react";
import { LoadingPlaceholder } from "Components";
import useClient from "../../hooks";
import { filter } from "lodash";
import { LadderTable } from "Components";
import { getLadderData } from "./selectors";
import { ServerButton, Nav } from "Components";
import StyledHome from "./style";

export const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [server, setServer] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient(`/sc2/ladder/grandmaster/${server}`);
  console.log("???");

  useEffect(() => {
    if (data) {
      const formattedResults = getLadderData(data);
      if (race !== "All") {
        const filteredResults = filter(formattedResults, (player) => {
          return player.favoriteRace === race.toLowerCase();
        });

        setFilteredData(filteredResults);
      } else {
        setFilteredData(formattedResults);
      }
    }
  }, [data, race]);

  return loading ? (
    <LoadingPlaceholder />
  ) : (
    <StyledHome>
      <div>
        <div className="navContainer">
          <div className="logo">
            <img
              alt="all-in-logo"
              src="https://fontmeme.com/permalink/200731/72c6e16db94d9969435dc70bb284f44c.png"
            ></img>
          </div>
          <div className="buttonContainer">
            <Nav setRace={setRace} />
            <ServerButton setServer={setServer} />
          </div>
        </div>
        <LadderTable rows={filteredData} />
      </div>
    </StyledHome>
  );
};
