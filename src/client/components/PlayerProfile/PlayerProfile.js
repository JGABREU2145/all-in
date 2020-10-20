import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import useClient from "../../hooks";

export const PlayerProfile = (props) => {
  const { player, isOpen, setOpen } = props; // selectedPlayer
  const { loading, data } = useClient(
    `/sc2/legacy/profile/${player.region}/${player.realm}/${player.playerId}/matches`
  );

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"Player Information"}
        </DialogTitle>

        <DialogContent id="alert-dialog-description">
          <div>
            <h2 id="simple-modal-title">{player.name}</h2>
            <p id="simple-modal-description"></p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
