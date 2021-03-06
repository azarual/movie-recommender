import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./Styled";
import displayToast from "../utils/displayToast";
import { help_menu } from "../constants/strings";

const Header = ({ isCollapsed }) => {
  if (isCollapsed) {
    return (
      <StyledHeader>
        <Link to="/">
          <span className="fas fa-chevron-left header__item header--is-closed" />
          &nbsp;
          <span> Go back </span>
        </Link>
      </StyledHeader>
    );
  }

  const handleToast = e => {
    displayToast(help_menu, {
      autoClose: false
    });
  };

  return (
    <StyledHeader>
      <span className="header__item" onClick={handleToast}>
        <i className="fas fa-bars" />
        <span> help</span>
      </span>
      <span className="header__item">The Movie Recommender</span>
      <span className="fas fa-search header__item" />
    </StyledHeader>
  );
};

export default Header;
