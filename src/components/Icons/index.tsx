import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as gavelSVG } from "../../assets/gavel-icon.svg";
import { ReactComponent as balanceSVG } from "../../assets/balance-icon.svg";
import { ReactComponent as courtSVG } from "../../assets/court-icon.svg";
import { ReactComponent as gmailSVG } from "../../assets/gmail-icon.svg";
import { ReactComponent as whatsappSVG } from "../../assets/whatsapp-icon.svg";
import { ReactComponent as scheduleSVG } from "../../assets/schedule-icon.svg";
import { ReactComponent as locationSVG } from "../../assets/location-icon.svg";

{/*Icone de mapa*/}
export const LocationIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={locationSVG}
      viewBox="0 0 26 27"
      style={{fill:"none"}}
      {...props}
    />
  );
};

export const ScheduleIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={scheduleSVG}
      viewBox="0 0 26 25"
      style={{fill:"none"}}
      {...props}
    />
  );
};

export const WhatsappIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={whatsappSVG}
      viewBox="0 0 24 24"
      style={{fill:"none"}}
      {...props}
    />
  );
};

export const GmailIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      component={gmailSVG}
      viewBox="0 0 23 18"
      style={{fill:"none"}}
      {...props}
    />
  );
};

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