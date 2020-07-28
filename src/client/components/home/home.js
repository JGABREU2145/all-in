import React, { useState, useEffect } from "react";
import { Card, CircularProgress, Typography } from "@material-ui/core/";
import Nav from "../Nav/Nav";
import useClient from "../../hooks";
import { map, slice } from "lodash";

const Home = () => {
  const [race, setRace] = useState("");
  const { loading, data } = useClient(
    "https://us.api.blizzard.com/sc2/ladder/grandmaster/1"
  );

  useEffect(() => {
    console.log("THE RACE IS NOW", race);
  }, [race]);
  return loading ? (
    <CircularProgress />
  ) : (
    <div>
      <Nav />
      {map(slice(data.ladderTeams, 0, 100), (team, index) => (
        <Card style={{ margin: "10px" }} key={index}>
          <Typography>Name: {team.teamMembers[0].displayName}</Typography>
          <Typography>Rank: {index + 1}</Typography>
          <Typography>
            Favorite Race: {team.teamMembers[0].favoriteRace}
          </Typography>
        </Card>
      ))}
    </div>
  );
};

export default Home;
