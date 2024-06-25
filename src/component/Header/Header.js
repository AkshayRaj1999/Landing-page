import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";
import WaveLogo from "../../images/icons/WavesLogo.svg";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  const [show, setShow] = useState(false);
  const { loginWithRedirect, logout ,isAuthenticated} = useAuth0();
  return (
    <header>
      <nav>
        <div className="conatiner-fluid">
          <div
            className={
              show === false ? "navbar-container" : "navbar-container2"
            }
          >
            <div className="logo-container">
              <a href="./">
                <img src={WaveLogo} alt="wave-logo" />
              </a>
            </div>
            <ul className="navbar-links">
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Service</a>
              </li>
              <li>
                <a href="./">Project</a>
              </li>
              <li>
                <a href="./">News</a>
              </li>
              <li
                className="mobile-login-ul-link"
                onClick={() => loginWithRedirect()}
              >
                {" "}
                <a href="./">Login</a>
              </li>
            </ul>
            {isAuthenticated ? (
              <button
                className="btn btn-primary navbar-login-btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className="btn btn-primary navbar-login-btn"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
            <RiMenu3Fill
              className="burger-menu"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
