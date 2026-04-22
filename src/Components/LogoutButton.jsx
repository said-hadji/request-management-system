import { LogOut } from "lucide-react";

export default function LogoutButton({ setAdmin }) {
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setAdmin(null);
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-start text-white/70 px-2 py-3 hover:bg-slate-900 rounded-xl flex items-center gap-3 duration-300 cursor-pointer"
    >
      <span>
        <LogOut size={22}/>
      </span>
      <span>Logout</span>
    </button>
  );
}
