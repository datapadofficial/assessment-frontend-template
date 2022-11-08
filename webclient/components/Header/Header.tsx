import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { classNames } from "@core/react/class-names";
import Image from "next/image";
import Link from "next/link";

const HeaderThemeSwitcher = (_props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ml-6">
      <Link href="/">
        <>
          {(theme !== "dark") && (
            <a
              href="/"
              onClick={(e) => {
                setTheme("dark");
                e.preventDefault();
              }}
              className="my-2 flex items-center space-x-1 dark:text-yellow-300 text-slate-700"
            >
              <MoonIcon className="h-8 w-8 flex-shrink-0 mr-3" />
            </a>
          )}
          {(theme === "dark") && (
            <a
              href="/"
              onClick={(e) => {
                setTheme("light");
                e.preventDefault();
              }}
              className="my-2 flex items-center space-x-1 dark:text-yellow-300 text-slate-700"
            >
              <SunIcon className="h-8 w-8 flex-shrink-0 mr-3" />
            </a>
          )}
        </>
      </Link>
    </div>
  );
};

export type HeaderProps = {
  title: string;
  transparentBg?: boolean;
};

const HeaderComponent = (props: HeaderProps) => {
  const { theme } = useTheme();

  return (
    <header
      className={classNames([
        props.transparentBg !== true &&
        "border-b-black-10 dark:bg-slate-800 bg-white shadow",
      ])}
    >
      <div className="container mx-auto p-4 flex flex-row justify-between w-full">
        <div className="flex justify-start items-center justify-self-start">
          <h1 className="flex">
            <Link href="/">
              <a>
                <Image
                  src={(theme === "dark")
                    ? "/img/logo-dark.svg"
                    : "/img/logo.svg"}
                  alt="datapad"
                  width={135}
                  height={32}
                />
              </a>
            </Link>
          </h1>
          <h2
            data-testid="heading"
            className="hidden md:inline-block dark:text-gray-400 text-ritual-cyan-500 font-medium px-3 mx-4 border-l-2 border-gray-300"
          >
            {props.title}
          </h2>
        </div>
        <div className="flex justify-end items-end justify-self-end">
          <HeaderThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
