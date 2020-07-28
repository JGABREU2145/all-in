import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState(props) {
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
            <MenuItem
              onClick={() => {
                // console.log("TERRAN!");
                props.setRace("terran");
                popupState.close();
              }}
              className="terran"
            >
              Terran
            </MenuItem>
            <MenuItem onClick={popupState.close} className="protoss">
              Protoss
            </MenuItem>
            <MenuItem onClick={popupState.close} className="zerg">
              Zerg
            </MenuItem>
            <MenuItem onClick={popupState.close} className="all">
              All
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
