import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CropSquareRoundedIcon from "@material-ui/icons/CropSquareRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import "../css/ScreenControls.css";

function ScreenControls() {
  return (
    <div>
      <div className="screenControls">
        <MenuRoundedIcon fontSize="small" className="menu_button" />
        <CropSquareRoundedIcon className="home_button" />
        <ChevronLeftRoundedIcon className="chevron" />
      </div>
    </div>
  );
}

export default ScreenControls;
