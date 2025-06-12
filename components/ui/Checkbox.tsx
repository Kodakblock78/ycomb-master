import React from "react";

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      type="checkbox"
      className={`w-5 h-5 accent-indigo-600 ${className} rounded-[10px]`} // Apply a border radius of 10px (default is 5px + 5px)
      {...props}
    />
  );
};
