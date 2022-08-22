/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineCloudUpload,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineDown,
} from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 border-b-2 px-2 sm:px-4 py-2.5 rounded  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-[975px] ">
        <Link href="/">
          <span className=" flex items-center cursor-pointer font-cookie font-semibold text-3xl ">
            Instagram
            <AiOutlineDown className="text-gray-600 text-sm ml-2 " />
          </span>
        </Link>

        <div className="flex ">
          <div className="hidden relative md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full pr-20 text-gray-900 bg-gray-100 rounded-lg   sm:text-sm outline-none"
              placeholder="Search..."
            />
          </div>
        </div>

        <ul className="flex items-center flex-row space-x-4 text-2xl">
          <li>
            <Link href="/" className="block  text-black " aria-current="page">
              <AiFillHome className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="#" className="block  text-black ">
              <AiOutlineMessage className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="#" className="block  text-black ">
              <AiOutlineCloudUpload className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="#" className="block  text-black ">
              <AiOutlineCompass className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="#" className="block  text-black ">
              <AiOutlineHeart className="cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="#" className="block  text-black ">
              <img
                className="w-7 h-7 rounded-full cursor-pointer"
                src="https://media-exp1.licdn.com/dms/image/C5603AQH-0I4iQjbd_A/profile-displayphoto-shrink_200_200/0/1659169416328?e=1666828800&v=beta&t=pB8KXHFzDmWypFFIW-yxkHBygqFvYaRS00mma5EC0f8"
                alt="Rounded avatar"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
