import React, { useEffect, useState } from "react";
import { Card, CircularProgress, Typography } from "@material-ui/core/";
import useClient from "../../hooks";
import { filter, map } from "lodash";
import { LadderTable } from "Components";
import { getLadderData } from "./selectors";

export const Home = () => {
  const [race, setRace] = useState("Zerg");
  const [filteredData, setFilteredData] = useState([]);
  const { loading, data } = useClient(
    "https://us.api.blizzard.com/sc2/ladder/grandmaster/3"
  );

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <div>
      <LadderTable rows={filteredData} />
    </div>
  );
};
