import Suggestion from "./suggestion";

/* eslint-disable @next/next/no-img-element */
const SideBar = () => {
  return (
    <div className=" hidden lg:block max-w-[319px] ml-5">
      <div className="flex items-center justify-between mt-[20px] mb-[10px] ">
        <div className="flex space-x-5 items-center">
          <img
            className="p-px min-w-[56px] min-h-[56px] max-w-[56px] mx-auto max-h-[56px] rounded-full ring-2
            ring-gray-300"
            src="https://media-exp1.licdn.com/dms/image/C5603AQH-0I4iQjbd_A/profile-displayphoto-shrink_200_200/0/1659169416328?e=1666828800&v=beta&t=pB8KXHFzDmWypFFIW-yxkHBygqFvYaRS00mma5EC0f8"
            alt="Bordered avatar"
          />
          <h1 className="flex flex-col">
            <span className="text-sm font-semibold">swikarr_</span>
            <span className="text-sm text-gray-400">Swikar Adhikari</span>
          </h1>
        </div>
        <div>
          <h1 className="text-sm text-sky-500 font-bold text-[12px]">Switch</h1>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="flex justify-between">
          <span className=" text-gray-500 text-[14px] font-bold">
            Suggestions For You
          </span>
          <span className="text-sm font-bold text-[12px]">See All</span>
        </h1>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <div className="mt-8">
        <h1 className="text-sm text-gray-400 space-x-1 text-[12px]">
          <span>About .</span>
          <span>Help .</span>
          <span>Press .</span>
          <span>API .</span>
          <span>Jobs .</span>
          <span>Privacy .</span>
          <span>Terms .</span>
          <span>Locations .</span>
          <span>Language</span>
        </h1>
      </div>
      <div className="mt-5">
        <h1 className="text-sm text-gray-400 space-x-1 text-[12px]">
          © 2022 Instagram from Meta
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
