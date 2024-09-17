import React, { FC } from "react";
import { NavLink } from "react-router-dom"
import { FiRefreshCcw } from "react-icons/fi"
import { GrAdd } from "react-icons/gr"

interface IListHeaderProps {
  title: "Heroes" | "Villains" | "About"
  handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRefresh: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ListHeader: FC<IListHeaderProps> = (props: IListHeaderProps) => {
  const { handleAdd, handleRefresh, title } = props;

  return (
    <div data-cy="list-header" className="content-title-group">
        <NavLink data-cy="title" to={`/tourofheros/${title}`} >
            <h2>{title}</h2>
        </NavLink>
      <button
        data-cy="add-button"
        onClick={handleAdd}
        aria-label="add"
      >
        <GrAdd />
      </button>
      <button
        data-cy="refresh-button"
        onClick={handleRefresh}
        aria-label="refresh"
      >
        <FiRefreshCcw />
      </button>
    </div>
  );
};

export default ListHeader;
