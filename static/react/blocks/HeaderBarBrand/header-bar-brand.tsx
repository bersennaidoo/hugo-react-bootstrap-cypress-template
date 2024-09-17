import React, { FC } from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface IHeaderBarBrandProps {}

const HeaderBarBrand: FC<IHeaderBarBrandProps> = (
  props: IHeaderBarBrandProps
) => {
  const {} = props;

  return (
    <div data-cy="header-bar-brand" className="navbar-brand">
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <div data-cy="react-icon-svg">
          <FaReact />
        </div>
      </a>
      <NavLink data-cy="navLink" to="/shop" className="nav-link">
        <span className="tours">TOUR</span>
        <span className="of">OF</span>
        <span className="heroes">HEROES</span>
      </NavLink>
    </div>
  );
};

export default HeaderBarBrand;
