import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { homeRoute } from "../../Constants/routes";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { PrimaryWhite } from "../../Constants/colors";

import "./styles.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(homeRoute);
  };

  return (
    <Fragment>
      <div className="header">
        <IconButton
          aria-label="home"
          onClick={() => handleImgClick()}
          sx={{ fontSize: 16, color: PrimaryWhite }}
        >
          <HomeIcon sx={{ fontSize: 40, color: PrimaryWhite }} />
        </IconButton>
      </div>
    </Fragment>
  );
};

export default Header;
