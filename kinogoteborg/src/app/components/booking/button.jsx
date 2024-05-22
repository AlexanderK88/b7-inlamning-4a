import clsx from "clsx";
import React from "react";

// export default
export function Button({ children, className, ...rest }) {
  return React.createElement(
    "button",
    Object.assign({}, rest, {
      className: clsx(
        "flex h-10 items-center justify-center rounded-lg bg-red-700 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 active:bg-gray-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      ),
    }),
    children,
  );
}
export function RedButton({ children, className, ...rest }) {
  return React.createElement(
    "button",
    Object.assign({}, rest, {
      className: clsx(
        "flex h-10 items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 active:bg-gray-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      ),
    }),
    children,
  );
}
