import { NavLink } from "react-router-dom";
const wompWompImage = "/lovable-uploads/7ff08a28-def2-4948-b182-141a786d4543.png";

const navigation = [
  { name: "UX design", href: "/" },
  { name: "Resume", href: "/resume" },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-0">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block px-4 py-2 text-2xl font-rufina font-bold transition-colors duration-200 ${
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
      
      {/* Frog illustration at bottom */}
      <div className="px-6 pb-8">
        <img
          src={wompWompImage}
          alt="Womp womp illustration"
          className="w-16 h-16 mx-auto opacity-60"
        />
      </div>
    </div>
  );
}