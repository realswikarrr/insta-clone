/* eslint-disable @next/next/no-img-element */
const SideBar = () => {
  return (
    <div className=" hidden lg:flex items-center justify-between mt-[20px] mb-[10px] max-w-[319px] ml-10">
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
        <h1 className="text-sm text-sky-500 font-bold">Switch</h1>
      </div>
    </div>
  );
};

export default SideBar;
