import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface DropDownContent {
  url: string;
  text: string;
}

interface DropDownArguments {
  title: string;
  content: DropDownContent[];
}

const Header = () => {
  return (
    <div>
      <div className="top-header bg-slate-800 flex justify-around flex-wrap">
        <div className="phone p-3 text-white font-medium text-sm lg:text-base">
          <p className="text-green-600 inline-block">Phone</p> : (800) 123456789
        </div>
        <div className="left-top-header flex flex-row">
          <DropDownComponent
            title={"English"}
            content={[
              {
                text: "French",
                url: "/",
              },
            ]}
          />
          <DropDownComponent
            title={"USD"}
            content={[
              {
                text: "EUR",
                url: "/",
              },
              {
                text: "VND",
                url: "/",
              },
            ]}
          />
          <DropDownComponent title={"My Account"} content={[]} />
        </div>
      </div>
      <div className="top-middle flex justify-around flex-wrap">
        <div className="logo pt-5 lg:basis-1/4">
          <Link href="/">
            <img
              src="https://htmldemo.net/fiora/fiora/img/icon/logo.jpg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="search pt-5 pl-3 pr-4 basis-full lg:basis-1/2">
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="card pt-5 lg:basis-1/4">
            <div className="card-show inline-block float-right h-16 w-16 text-center pt-5">
                <p>My cart</p>
            </div>
            <div className="card-img bg-top-cart float-right h-16 w-16 bg-slate-800 bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

const DropDownComponent: FC<DropDownArguments> = ({ title, content }) => {
  return (
    <div>
      <div className="inline-block relative group">
        <div className="language p-3 text-white lg:border-l-2 lg:border-l-teal-500 lg:border-opacity-50">
          {title}
        </div>
        <div className="dropdown-content hidden absolute group-hover:block z-10">
          {content.map((item, index) => (
            <Link
              className="pt-3 pb-3 pr-4 pl-3 bg-slate-800 text-white"
              href={item.url}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
