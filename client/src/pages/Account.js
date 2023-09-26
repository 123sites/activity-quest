import React, { useState, useEffect, useContext } from "react";
import "../components/Footer/footer.js";
import "../assets/index.css";
import "../App.css";
import "../assets/navbar.css";
import "../index.css";
import "../assets/account.css";
import { ThemeContext } from "../components/Theme/themeContext";
import "../components/Motion/styles.css";

const Account = ({ handlePageChange }) => {
  const { theme } = useContext(ThemeContext);
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  useEffect(() => {
    console.log(currentPath);
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  return (
    <div className="container-fluid">
      <div className="account-container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 mt-5">
            <div>
              <div className={`card-body text-center accountCard-${theme}`}>
                <h5 className={`card-body cardTitle-${theme} fw-bolder `}>
                  Account
                </h5>
                <h6
                  className={`card-subtitle fw-bolder pb-3 cardSubtitle-${theme} mb-2 text-muted`}
                >
                  Click the link below to change your account settings.
                </h6>
                <a href="#" className={`card-link cardLinkText-${theme}`}>
                  Change Password
                </a>{" "}
                <br />
                <a href="#" className={`card-link cardLinkText-${theme}`}>
                  Change Email
                </a>
                <br />
                <a href="#" className={`card-link cardLinkText-${theme}`}>
                  Change Username
                </a>
                <br />
                <a href="#" className={`card-link cardLinkText-${theme}`}>
                  Change Profile Picture
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
