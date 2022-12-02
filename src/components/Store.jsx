import { ChevronRightIcon } from "@heroicons/react/24/solid";
import dataMock from "../mockAPI/data.mock";

const Store = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 lg:mx-60">
      <h1 className="text-3xl px-5 md:text-4xl font-bold text-center w-full mb-10">
        Which AirPods are right for you?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-y-20">
        {dataMock.storeProducts.map(
          ({ name, tag, price, image, chargeTime }, i) => (
            <div className="flex flex-col items-center" key={i}>
              <img
                src={image}
                alt={name}
                className="h-36 object-contain mb-5"
              />
              <h4 className="text-lg font-medium">{name}</h4>
              <h6 className="text-gray-500 text-sm">{tag}</h6>
              <span className="text-sm text-gray-600 mt-3">{price}</span>
              <div className="flex flex-col items-center text-sm mt-5 pb-5">
                <button
                  className="px-5 py-2 rounded-full 
                bg-blue-600 hover:bg-gray-700 text-white"
                >
                  Buy
                </button>
                <div className="flex items-center gap-x-1 text-blue-600 mt-2">
                  <span className="hover:underline cursor-pointer mb-1">
                    Learn more
                  </span>
                  <ChevronRightIcon className="h-4 object-contain" />
                </div>
              </div>
              <div className="w-4/5 border border-gray-200" />
              <div className="flex flex-col items-center mt-5">
                <h2 className="text-4xl font-medium">{chargeTime} hrs</h2>
                <p className="text-gray-600 text-sm w-36 text-center">
                  Up to {chargeTime} hours of listening time with a single
                  charge
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Store;
