import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { homeRoute } from "../../Constants/routes";
import { Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
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
        <Button
         aria-label="home" 
         onClick={() => handleImgClick()}
         sx={{ fontSize: 16, color: PrimaryWhite }}

         endIcon={<AutorenewIcon sx={{ fontSize: 40, color: PrimaryWhite }} />}
         >
          Convert Number to Alphabet
        </Button>
      </div>
    </Fragment>
  );
};

export default Header;
