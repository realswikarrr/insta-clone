/* eslint-disable @next/next/no-img-element */
const Suggestion = () => {
  return (
    <div className="flex items-center justify-between mt-[10px] mb-[10px]">
      <div className="flex space-x-3 items-center">
        <img
          className="p-px min-w-[32px] min-h-[32px] max-w-[32px]  max-h-[32px] rounded-full 
            ring-gray-300"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGMYuy3g-dKRg/profile-displayphoto-shrink_800_800/0/1655120721619?e=1666828800&v=beta&t=ZbnkgnJandwcC9bv3HcY71xTOG1koQZMN5emGEKd6Sw"
          alt="Bordered avatar"
        />
        <h1 className="flex flex-col">
          <span className="text-sm font-semibold text-[14px]">aayush2234</span>
          <span className="text-sm text-gray-400 text-[12px]">Follows you</span>
        </h1>
      </div>
      <div>
        <h1 className="text-sm text-sky-500 font-bold text-[12px]">Follow</h1>
      </div>
    </div>
  );
};

export default Suggestion;
