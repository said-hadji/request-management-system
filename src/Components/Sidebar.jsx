import { House, HandCoins, LayoutDashboard, Hand } from "lucide-react";

import LogoutButton from "./LogoutButton";

export default function Sidebar({ admin, section, setSection, setAdmin }) {
  const buttons = [
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

  const buttonsStyle =
    "text-start text-white/70 px-2 py-3 hover:bg-gray-900 rounded-xl flex items-center gap-3 duration-300 cursor-pointer";

  const activeButtonStyle =
    "text-start text-white px-2 py-3 bg-slate-900 rounded-xl flex items-center gap-3 cursor-pointer";

  return (
    <div className="hidden lg:block">
      <div
        style={{ boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.3)" }}
        className="fixed top-10 left-10 bottom-10 w-80 bg-slate-950 rounded-2xl flex flex-col justify-between p-4 z-50"
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl text-white font-bold uppercase">Rms</h1>

          <div className="flex flex-col gap-1">
            {buttons
              .filter((button) =>
                admin ? button.role === "admin" : button.role === "user",
              )
              .map((button) => {
                return (
                  <button
                    key={button.id}
                    onClick={() => {
                      setSection(button.sectionTitle);
                    }}
                    className={
                      section === button.sectionTitle
                        ? activeButtonStyle
                        : buttonsStyle
                    }
                  >
                    <span>{button.icon}</span>
                    <span>{button.title}</span>
                  </button>
                );
              })}
          </div>
        </div>

        <div>
          <LogoutButton setAdmin={setAdmin} />
        </div>
      </div>
    </div>
  );
}
