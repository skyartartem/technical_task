import React from "react";
import { BsTwitter } from "react-icons/Bs";
import { IconContext } from "react-icons";
import logo from "../../images/hansel.svg";

export const Logo = () => {
  return (
    <>
      <IconContext.Provider
        value={{
          color: "#42A5F5",
          className: "global-class-name",
          size: "45px",
        }}
      >
        <div>
          <BsTwitter />
        </div>
      </IconContext.Provider>
      <img src={logo} alt="Logo" />
    </>
  );
};
