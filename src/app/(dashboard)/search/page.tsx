import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-slate-50 rounded-lg flex items-center gap-2 px-2 py-1.5">
        <div className="flex items-center gap-2 px-2">
          <Image src="/calendar-icon.png" alt="Calendar" width={16} height={16} />
          <div className="w-px h-3.5 bg-slate-200" />
          <Image src="/scan-icon.png" alt="Scan" width={16} height={16} />
          <div className="w-px h-3.5 bg-slate-200" />
        </div>
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search"
            className="w-full border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-2 py-1"
          />
          <Image
            src="/search-icon.png"
            alt="Search"
            width={12}
            height={12}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;