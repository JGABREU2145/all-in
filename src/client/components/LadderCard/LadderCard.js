import React from "react";
import { Card, Typography } from "@material-ui/core/";

const LadderCard = (props) => {
  const capitalizeFirstLetter = () => {
    let raceType = props.team.teamMembers[0].favoriteRace;
    return raceType.charAt(0).toUpperCase() + raceType.slice(1);
  };
  return (
    <Card style={{ margin: "10px" }} key={props.index}>
      <Typography>Name: {props.team.teamMembers[0].displayName}</Typography>
      <Typography>Rank: {props.index + 1}</Typography>
      <Typography>Favorite Race: {capitalizeFirstLetter()}</Typography>
    </Card>
  );
};

export default LadderCard;
