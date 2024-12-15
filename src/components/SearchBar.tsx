import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  return (
    <div className="flex justify-end p-4">
      <div className="bg-teal-20 rounded-lg flex items-center gap-4 px-2 py-1.5">
        <div className="flex items-center gap-2 px-2">
          {/* Calendar button */}
          <Link href="/calendar">
            <button
              onClick={() => console.log("Calendar clicked")}
              className="hover:bg-slate-200 p-1 rounded relative"
            >
              <div className="absolute inset-0 rounded-full bg-gray-400 opacity-30 dark:bg-white"></div>
              <Image src="/images/calendar.png" alt="Calendar" width={25} height={25} />
            </button>
          </Link>
          <div className="w-px h-3 bg-slate-300" />
          {/* Settings button */}
          <button
            onClick={() => console.log("Settings clicked")}
            className="hover:bg-slate-20 p-1 rounded relative"
          >
            <div className="absolute inset-0 rounded-full bg-gray-400 opacity-30 dark:bg-white"></div>
            <Image src="/images/settings.png" alt="Settings" width={25} height={25} />
          </button>
          <div className="w-px h-3 bg-slate-20" />
        </div>
        <div className="relative flex-1">
          {/* Search bar */}
          <Input
            type="search"
            placeholder="Search here"
            className="w-45 border-0 bg-transparent font-medium focus-visible:ring-0 focus-visible:ring-offset-0 text-xs px-2 py-0.5"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white opacity-30"></div>
          <Image
            src="/images/search.png"
            alt="Search"
            width={18}
            height={18}
            className="absolute right-2 top-1/2 -translate-y-1/2 dark:bg-gray-200 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;