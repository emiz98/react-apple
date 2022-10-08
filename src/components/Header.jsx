import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-[#313132] px-5 py-3 w-full flex justify-center">
      <div className="flex justify-between w-full md:w-auto items-center text-gray-300 text-[10px] max-w-6xl space-x-10">
        <img src="/assets/apple.png" alt="logo" className="h-5 w-5 invert" />
        <span>Store</span>
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Watch</span>
        <span>Airpods</span>
        <span>TV & Home</span>
        <span>Only on Apple</span>
        <span>Accessories</span>
        <span>Support</span>
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="icon" />
          <ShoppingBagIcon className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
