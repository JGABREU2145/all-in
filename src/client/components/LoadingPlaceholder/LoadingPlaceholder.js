import React from "react";
import { CircularProgress } from "@material-ui/core/";
import StyledLoadingPlaceholder from "./style";

export const LoadingPlaceholder = (props) => {
  return (
    <StyledLoadingPlaceholder>
      <CircularProgress />
    </StyledLoadingPlaceholder>
  );
};
