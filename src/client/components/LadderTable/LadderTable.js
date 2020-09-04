import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import StyledLadderTable from "./style";
import { capitalize } from "lodash";
import { PlayerProfile } from "Components";

export const LadderTable = (props) => {
  const { rows } = props;
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <StyledLadderTable>
      {selectedPlayer && (
        <PlayerProfile
          isOpen
          player={selectedPlayer}
          setOpen={setSelectedPlayer}
        />
      )}
      <TableContainer className="tableContainer" component={Paper}>
        <Typography variant="h6" id="tableTitle" component="div">
          Ladder
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Favorite Race</TableCell>
              <TableCell align="right">Wins</TableCell>
              <TableCell align="right">Losses</TableCell>
              <TableCell align="right">MMR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                hover
                onClick={() => {
                  setSelectedPlayer(row);
                }}
                key={index}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="right" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {capitalize(row.favoriteRace)}
                </TableCell>
                <TableCell align="right">{row.wins}</TableCell>
                <TableCell align="right">{row.losses}</TableCell>
                <TableCell align="right">{row.mmr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledLadderTable>
  );
};
