import { Search, X } from "lucide-react";

export default function SearchBar({ searchInputValue, setSearchInputValue }) {
  const isEmpty = searchInputValue === "";
  const icon = isEmpty ? (
    <Search size={20} className={`text-slate-700`} />
  ) : (
    <X size={20} className={`text-slate-700`} />
  );
  return (
    <div className={`relative w-70`}>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setSearchInputValue(value);
        }}
        placeholder="Search by name"
        type="text"
        className={`w-full px-3 py-1 bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:border-slate-300 duration-300 text-slate-700`}
      />
      <button
        className={`absolute top-1/2 -translate-y-1/2 right-3 ${isEmpty ? "pointer-events-none" : "cursor-pointer"}`}
      >
        {icon}
      </button>
    </div>
  );
}
