import React from "react";
import logo from "../images/logo.png";
import { BiCoffeeTogo, BiCodeBlock } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="flex">
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="flex">
            <a href="a" className="menu-btn">
              <BiCodeBlock className="menu-icon" />
              <h3 className="menu-text">All API</h3>
            </a>
            <a href="a" className="menu-btn">
              <AiFillFileAdd className="menu-icon" />
              <h3 className="menu-text">Add API</h3>
            </a>
            <a
              href="https://www.buymeacoffee.com/dasjideepak"
              target="blank"
              className="menu-btn"
            >
              <BiCoffeeTogo className="menu-icon" />
              <h3 className="menu-text">Buy me a Coffee</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
