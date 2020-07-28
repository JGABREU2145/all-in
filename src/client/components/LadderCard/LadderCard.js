import React from "react";
import { Card, Typography } from "@material-ui/core/";

const LadderCard = (props) => {
  console.log(props);
  return (
    <Card style={{ margin: "10px" }} key={props.index}>
      <Typography>Name: {props.team.teamMembers[0].displayName}</Typography>
      <Typography>Rank: {props.index + 1}</Typography>
      <Typography>
        Favorite Race: {props.team.teamMembers[0].favoriteRace}
      </Typography>
    </Card>
  );
};

export default LadderCard;
