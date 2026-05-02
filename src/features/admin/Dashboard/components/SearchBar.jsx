import { Search, X } from "lucide-react";

export default function SearchBar({ searchInputValue, setSearchInputValue }) {
  const isEmpty = searchInputValue === "";

  return (
    <div className={`relative w-70`}>
      <input
        onChange={(e) => setSearchInputValue(e.target.value)}
        value={searchInputValue}
        placeholder="Search by name"
        type="text"
        className={`w-full px-3 py-1 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:border-slate-300 duration-300 text-slate-700`}
      />
      <button
        onClick={() => setSearchInputValue("")}
        className={`absolute top-1/2 -translate-y-1/2 right-3 text-slate-700 ${isEmpty ? "pointer-events-none opacity-40" : "cursor-pointer"}`}
      >
        {isEmpty ? <Search size={20} /> : <X size={20} />}
      </button>
    </div>
  );
}
