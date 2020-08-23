import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export function ServerButton(props) {
  const serverNames = [
    { server: "NA", id: "1" },
    { server: "EU", id: "2" },
    { server: "KR", id: "3" },
    { server: "CN", id: "5" },
  ];

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
            {serverNames.map((val) => {
              return (
                <MenuItem
                  onClick={() => {
                    props.setServer(val.id);
                    popupState.close();
                  }}
                >
                  {val.server}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
