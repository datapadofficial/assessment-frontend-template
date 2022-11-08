import { ChevronRightIcon } from "@heroicons/react/solid";
import { ImageProps } from "next/image";
import React, { MouseEventHandler } from "react";

type ButtonProps = {
  title: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler | undefined;
  className?: string | undefined;
  spinnerClassName?: string | undefined;
  loading?: boolean;
  buttonImage?: React.ReactNode;
};

const Button = ({
  title,
  type,
  onClick,
  className,
  spinnerClassName,
  loading,
  buttonImage
}: ButtonProps) => {
  return (
    <button
      type={type ?? "button"}
      className={`inline-flex items-center drop-shadow-sm px-4 py-2 leading-6 text-md transition ease-in-out duration-150 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {loading && (
        <svg
          className={`animate-spin -ml-1 mr-3 h-5 w-5 ${spinnerClassName}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {title}
      {buttonImage && (
        <span className="ml-2 flex align-center">
          {buttonImage}
        </span>
        
      )}
      
    </button>
  );
};

export default Button;
