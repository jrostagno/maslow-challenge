import React from "react";

const Button = ({
  children,

  style = {},
  onClick = () => {},
  selected = false,
  disabled = false,
}) => {
  return (
    <button
      className={`pt-2 pb-2 pl-2 pr-2 rounded sm:text-xs text-sm transition-colors font-medium flex items-center justify-center  box-border disabled:bg-gray-300 hover:bg-emerald-200 hover:text-white text-white active:bg-emerald-300 focus:bg-emeral-200 ${
        selected ? "bg-emerald-400" : "bg-gray-100 text-slate-400"
      } `}
      disabled={disabled}
      style={style}
      type="button"
      id=""
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
