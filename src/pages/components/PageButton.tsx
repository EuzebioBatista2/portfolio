import React from "react";
import IconRightArrow, { IconLeftArrow } from "../../../public/icons";

interface IPageButton {
  onClick: () => void
  page: 'prev' | 'next'
  disabled: boolean
}

export default function PageButton(props: IPageButton) {
  return (
    <button 
      className={`flex items-center justify-center h-12 w-12 rounded-md border border-white ${props.disabled ? 'bg-gray-400' : 'bg-blue-400'}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.page === "next" ? (
        <i>{IconRightArrow()}</i>
      ) : (
        <i>{IconLeftArrow()}</i>
      )}
    </button>
  );
}