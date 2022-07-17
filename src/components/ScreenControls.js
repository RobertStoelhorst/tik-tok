import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "../css/ScreenControls.css";

function ScreenControls() {
  return (
    <div className="screenControls">
      <MenuIcon fontSize="small" className="menu_button" />
      <CropSquareIcon className="home_button" />
      <ChevronLeftIcon className="chevron" />
    </div>
  );
}

export default ScreenControls;
