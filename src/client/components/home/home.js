import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core/";
import useClient from "../../hooks";
import { filter } from "lodash";
import { LadderTable } from "Components";
import { getLadderData } from "./selectors";
import StyledHome from "./style";

export const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient("/sc2/ladder/grandmaster/3");

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

  return (
    <StyledHome>
      {loading ? (
        <div className="loadingContainer">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <LadderTable rows={filteredData} />
        </div>
      )}
    </StyledHome>
  );
};
