import React, { FC } from "react";
import HeaderBarBrand from "../../blocks/HeaderBarBrand/header-bar-brand";

interface IHeaderBarProps {}

const HeaderBar: FC<IHeaderBarProps> = (props: IHeaderBarProps) => {
  const {} = props;

  return (
    <header data-cy="header-bar">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <HeaderBarBrand />
      </nav>
    </header>
  );
};

export default HeaderBar;
