import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/** Left - Logo */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            alt="Instgaram Logo"
          />
        </div>
        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt="Instgaram Logo"
          />
        </div>
        {/** Middle - Search input field */}
        <div className=" max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/** Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn -rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://img.icons8.com/color/12x/money-heist-dali.png"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
