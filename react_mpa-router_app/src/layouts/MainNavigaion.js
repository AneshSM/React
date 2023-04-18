import React from "react";
import { NavLink } from "react-router-dom";

// styles
import mainNavStyle from "./MainNavigation.module.css";

const MainNavigaion = () => {
  return (
    <header className={mainNavStyle.header}>
      <h1>React App</h1>
      <nav>
        <ul className={mainNavStyle.navList}>
          <li>
            <NavLink
              to={""}
              className={({ isActive }) =>
                isActive ? mainNavStyle.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"products"}
              className={({ isActive }) =>
                isActive ? mainNavStyle.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigaion;
