import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="bg-white py-3 border-t-[2px] border-gray-100 mt-10 px-5 lg:px-60">
      <div className="flex items-center space-x-0 text-xs mb-5">
        <img src="/assets/apple.png" alt="logo" className="h-4 w-4" />
        <ChevronRightIcon className="h-3 object-contain" />
        <span className="font-medium">AirPods</span>
      </div>
      <div className="text-gray-500 text-[10px] pb-1 border-b-[1px] border-gray-300">
        More ways to shop: Find an Apple Store or other retailer near you. Or
        call 1-800-MY-APPLE.
      </div>
      <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1">
        <div className="w-3/4">
          Copyright © 2022 Apple Inc. All rights reserved.
          <span className="font-medium text-gray-600 ml-5">
            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
          </span>
        </div>
        <span>Sri Lanka</span>
      </div>
    </div>
  );
};

export default Footer;
