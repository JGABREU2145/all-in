import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState(props) {
  const serverButtons = ["1", "2", "3", "5"];

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="secondary"
            {...bindTrigger(popupState)}
          >
            View By Server
          </Button>
          <Menu {...bindMenu(popupState)}>
            {serverButtons.map((val) => {
              return (
                <MenuItem
                  onClick={() => {
                    props.setServer(val);
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
