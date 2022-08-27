/* eslint-disable @next/next/no-img-element */

import Data from "../data/data.json";

const Story = () => {
  return (
    <div className="border 2 rounded-md p-4 max-w-[420px]  w-full overflow-scroll no-scrollbar flex space-x-5 ">
      {Data.users.map((user) => (
        <div key={user.id}>
          <img
            className={`p-px min-w-[56px] min-h-[56px] max-w-[56px] mx-auto max-h-[56px] rounded-full ring-2 ${
              user.newstory ? "ring-pink-600" : "ring-gray-300"
            }  `}
            src={user.img}
            alt="Bordered avatar"
          />
          <h1
            className={`mt-1 text-sm text-center ${
              user.newstory ? "text-black" : "text-gray-500"
            }`}
          >
            {user.username}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Story;
