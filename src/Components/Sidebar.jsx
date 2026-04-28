import { House, HandCoins, LayoutDashboard, Hand, X } from "lucide-react";

import LogoutButton from "./LogoutButton";
import useIsMobile from "../Utils/IsMobile";

const BUTTONS = [
  {
    id: 1,
    icon: <House size={22} />,
    title: "Home",
    sectionTitle: "welcome",
    role: "user",
  },
  {
    id: 2,
    icon: <HandCoins size={22} />,
    title: "Request a Loan",
    sectionTitle: "requestALoan",
    role: "user",
  },
  {
    id: 4,
    icon: <LayoutDashboard size={22} />,
    title: "Dashboard",
    sectionTitle: "dashboard",
    role: "admin",
  },
];

export default function Sidebar({
  isSidebar,
  setIsSidebar,
  isAdmin,
  section,
  setSection,
  setIsAdmin,
}) {
  const isMobile = useIsMobile();
  const currentRole = isAdmin ? "admin" : "user";

  const visibleButtons = BUTTONS.filter(
    (button) => button.role === currentRole,
  );

  const baseStyle =
    "text-start px-2 py-3 rounded-xl flex items-center gap-3 cursor-pointer";
  const defaultStyle = `${baseStyle} text-white/70 hover:bg-gray-900 duration-300`;
  const activeStyle = `${baseStyle} text-white bg-slate-900`;

  return (
    <div
      style={{ boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.3)" }}
      className={`fixed top-1 lg:top-10 left-1 lg:left-10 bottom-1 lg:bottom-10 w-80 bg-slate-950 rounded-2xl flex flex-col justify-between p-4 z-100 ${isMobile && !isSidebar ? "-translate-x-100" : ""} duration-300`}
    >
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-white font-bold uppercase">Rms</h1>
          <X
            onClick={() => setIsSidebar(false)}
            className="text-white lg:hidden"
          />
        </div>

        <div className="flex flex-col gap-1">
          {visibleButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setSection(button.sectionTitle)}
              className={
                section === button.sectionTitle ? activeStyle : defaultStyle
              }
            >
              <span>{button.icon}</span>
              <span>{button.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <LogoutButton setIsAdmin={setIsAdmin} />
      </div>
    </div>
  );
}
