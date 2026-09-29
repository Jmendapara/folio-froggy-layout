import { NavLink } from "react-router-dom";
const wompWompImage = "/profile/froggy.png";

const navigation = [
  { name: "UX design", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "About me", href: "/about" },
];

interface SidebarProps {
  onItemClick?: () => void;
}

export default function Sidebar({ onItemClick }: SidebarProps = {}) {

  return (
    <div className="fixed left-0 top-0 h-full w-64 md:w-[337px] bg-sidebar flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 px-6 py-8 md:px-[61px] md:py-[60px]">
        <ul className="space-y-0 md:space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                end
                onClick={onItemClick}
                className={({ isActive }) =>
                  `block px-4 py-2 md:p-0 text-2xl md:leading-[30px] font-rufina font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-sidebar-selected"
                      : "text-black hover:text-sidebar-selected"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Frog illustration - hidden on mobile */}
      <div className="hidden md:block absolute left-[61px] top-[609px]">
        <img
          src={wompWompImage}
          alt="Womp womp illustration"
          className="w-[171px] h-[171px]"
        />
      </div>
    </div>
  );
}
