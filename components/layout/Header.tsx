import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon, CogIcon, HeartIcon, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link className="text-xl font-bold text-blue-500" href={"/"}>
        MORENT
      </Link>

      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-md mx-4">
        <Input
          type="text"
          placeholder="Search something here"
          className="w-full pr-10 border-gray-300 rounded-[100px] ps-12"
        />
        <Button
          variant="ghost"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 3.75a6.75 6.75 0 105.25 11.25M21 21l-5.25-5.25"
            />
          </svg>
        </Button>
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost">
          <HeartIcon className="w-6 h-6 text-gray-500" />
        </Button>
        <Button variant="ghost" className="relative">
          <BellIcon className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </Button>
        <Button variant="ghost">
          <CogIcon className="w-6 h-6 text-gray-500" />
        </Button>
        <Button variant="ghost">
          {/* <Image
            src="/path-to-profile-image.jpg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
          /> */}
          <User className="w-6 h-6 text-gray-500" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
