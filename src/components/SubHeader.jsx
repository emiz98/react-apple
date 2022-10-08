import data from "../mockAPI/data.mock";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SubHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-center space-x-2 py-5 bg-white overflow-x-scroll md:overflow-hidden pl-20">
        {data.headerProducts.map(({ name, image }) => (
          <div
            key={name}
            className="flex flex-col justify-center items-center group cursor-pointer"
          >
            <img src={image} alt={name} />
            <h4 className="text-[10px] w-24 text-center text-gray-700 group-hover:text-blue-500">
              {name}
            </h4>
          </div>
        ))}
      </div>

      <div className="justify-center bg-gray-100 text-gray-600 text-xs flex items-center gap-x-2 py-2">
        <span>Get 6 months of Apple Music free with your AirPods.*</span>
        <div className="text-blue-500 flex items-center">
          <span>Learn more</span>
          <ChevronRightIcon className="h-3 object-contain mt-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
