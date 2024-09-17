import React, { FC } from "react";
import { FaUndo, FaRegSave, FaEdit, FaTrash } from "react-icons/fa";

interface IButtonFooterProps {
  label: "Cancel" | "Save" | "Edit" | "Delete";
  classBtn: string
  IconClass: typeof FaUndo | typeof FaRegSave | typeof FaEdit | typeof FaTrash;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonFooter: FC<IButtonFooterProps> = (props: IButtonFooterProps) => {
  const { label, classBtn, IconClass, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`btn ${classBtn}`}
      aria-label={label}
    >
      <IconClass />
      &nbsp;
      <span>{label}</span>
    </button>
  );
};

export default ButtonFooter;
