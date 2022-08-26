/* eslint-disable @next/next/no-img-element */
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";

import { useState } from "react";

import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";

const Feed = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="container max-w-[420px] mb-2 w-full border border-grey-light rounded-md  mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center px-3 py-4">
          <img
            src="https://pbs.twimg.com/profile_images/1410983637391069187/bxoCUxj8_400x400.jpg"
            alt="routineofnepalbanda"
            className="rounded-full w-[32px] h-[32px]"
          />
          <div className="font-semibold ml-4 text-xs lowercase">
            <span className="block">routineofnepalbanda</span>
          </div>
        </div>
        <div className="mr-3">
          <BsThreeDots />
        </div>
      </div>
      <img
        src="https://pbs.twimg.com/media/FbD3sKMagAE3RXf?format=jpg&name=medium"
        alt=""
        className="block w-full"
      />
      <div className="flex py-4 justify-between items-center">
        <div className="flex px-3 space-x-2 text-2xl">
          <AiOutlineHeart />
          <AiOutlineMessage />
          <AiOutlineSend />
        </div>
        <div>
          <svg
            className="block mr-4 h-6 self-end"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-shape">
                <path
                  d="M2,1.99079514 C2,0.891309342 2.89451376,0 3.99406028,0 L16.0059397,0 C17.1072288,0 18,0.898212381 18,1.99079514 L18,20 L10,16 L2,20 L2,1.99079514 Z M4,2 L16,2 L16,17 L10,14 L4,17 L4,2 Z"
                  id="Combined-Shape"
                  fill="#000"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="text-sm  pb-2 px-3 font-bold">2,018 likes</div>
      <div className="text-sm px-3 leading-normal">
        <a
          className="font-bold no-underline text-black"
          href="https://www.instagram.com/tamizhographer/"
        >
          routineofnepalbanda
        </a>{" "}
        My book of this month arrived 😍😍😍 This time its a #norsk #author
        #jonesbo. I have planned to read his{" "}
        <a className="text-blue-dark no-underline" href="#">
          #HarryHole
        </a>{" "}
        <a className="text-blue-dark no-underline" href="#">
          #crime
        </a>{" "}
        series and{" "}
        <a className="text-blue-dark no-underline" href="#">
          #Flaggermusmannen
        </a>{" "}
        is the first book of this series.
        <br />
        <a
          className="text-blue-dark no-underline"
          href="https://www.instagram.com/explore/tags/12booksin12months/"
        >
          #12booksin12months
        </a>{" "}
        <a
          className="text-blue-dark no-underline"
          href="https://www.instagram.com/explore/tags/books/"
        >
          #books
        </a>
      </div>
      <div className="text-xs px-3 py-2  text-gray-500">
        View all 14 comments
      </div>
      <div className="text-xs px-3 py-1 uppercase text-gray-500">
        5 days ago
      </div>
      <div className="flex items-center space-x-1 mt-4 border-t border-grey-light  py-4 w-full">
        <BsEmojiSmile className="text-4xl mx-4" />
        <input
          className="w-full h-6 outline-none"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button
          className={`${
            comment === "" ? "text-blue-300" : "text-blue-700"
          } font-semibold `}
          disabled={comment === "" ? true : false}
        >
          <h1 className="mx-4">Post </h1>
        </button>
      </div>
    </div>
  );
};

export default Feed;
