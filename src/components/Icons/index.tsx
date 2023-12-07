import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as gavelSVG } from "../../assets/gavel-icon.svg";
import { ReactComponent as balanceSVG } from "../../assets/balance-icon.svg";
import { ReactComponent as courtSVG } from "../../assets/court-icon.svg";

{/* icone do martelo */}
export const GavelIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={gavelSVG}
      viewBox="0 0 101 93"
      style={{fill:"none"}}
      {...props}
    />
  );
};

export const BalanceIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={balanceSVG}
      viewBox="0 0 112 106"
      style={{fill:"none"}}
      {...props}
    />
  );
};

export const CourtIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={courtSVG}
      viewBox="0 0 85 106"
      style={{fill:"none"}}
      {...props}
    />
  );
};