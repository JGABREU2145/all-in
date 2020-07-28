import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState(props) {
  const raceButtons = ["Terran", "Protoss", "Zerg", "All"];

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            View Ladder by Race
          </Button>
          <Menu {...bindMenu(popupState)}>
            {raceButtons.map((val) => {
              return (
                <MenuItem
                  onClick={() => {
                    props.setRace(val);
                    popupState.close();
                  }}
                >
                  {val}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
