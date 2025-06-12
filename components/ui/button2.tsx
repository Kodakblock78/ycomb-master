import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
