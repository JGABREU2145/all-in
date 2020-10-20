import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export function ServerButton(props) {
  const servers = [
    { region: "NA", id: "1" },
    { region: "EU", id: "2" },
    { region: "KR", id: "3" },
    { region: "CN", id: "5" },
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
            {servers.map((server) => {
              return (
                <MenuItem
                  onClick={() => {
                    props.setServer(server);
                    popupState.close();
                  }}
                >
                  {server.region}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
