import React from "react";
import { useAuth } from "../../context/AuthProvider";
import Menu_dropdown from "./Menu_dropdown";
import "./../../styles/navbar.css";
// icons import
import RedditLogo from "./../../assets/reddit-logo1.svg";
import RedditLogoName from "./../../assets/reddit-text.svg";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";
import { faFire, faPlus, faQrcode } from "@fortawesome/free-solid-svg-icons";
import Profile_dropdown from "./Profile_dropdown";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, openLoginContainer } = useAuth();
  const navigateToHome = () => {
    navigate("/");
  };
  if (isLoggedIn) {
    return (
      <nav className="navbar-main-container">
        <div className="navbar-container-left">
          <div className="website-logo-menu-container">
            <div className="logo-container" onClick={navigateToHome}>
              <img src={RedditLogo} />
              <img src={RedditLogoName} style={{ padding: "4px" }} />
            </div>
          </div>

          <div className="search-container">
            <form>
              <label>
                <SearchIcon />
              </label>
              <input type="text" placeholder="Search Reddit" />
            </form>
          </div>
        </div>
        <div className="navbar-container-right">
          <div className="other-icons-container">
            <FontAwesomeIcon icon={faFire} className="btn" />
            <FontAwesomeIcon icon={faCommentDots} className="btn" />
            <FontAwesomeIcon icon={faBell} className="btn" />
            <FontAwesomeIcon icon={faPlus} className="btn" />
          </div>
          <div className="profile-menu-container">
            <Profile_dropdown />
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar-main-container">
        <div className="navbar-container-left">
          <div className="website-logo-menu-container">
            <div className="logo-container" onClick={navigateToHome}>
              <img src={RedditLogo} />
              <img src={RedditLogoName} style={{ padding: "4px" }} />
            </div>
            <div className="menu-container">
              <Menu_dropdown />
            </div>
          </div>

          <div className="search-container">
            <form>
              <SearchIcon />
              <input type="text" placeholder="Search Reddit" />
            </form>
          </div>
        </div>
        <div className="navbar-container-right">
          <div className="other-icons-container">
            <div className="get_app btn">
              <FontAwesomeIcon icon={faQrcode} />
              <span>Get app</span>
            </div>
            <div
              className="login btn"
              onClick={() => {
                openLoginContainer();
              }}
            >
              <span>Log In</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
