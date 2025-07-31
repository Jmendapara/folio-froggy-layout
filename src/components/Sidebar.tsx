import { NavLink } from "react-router-dom";
import frogIllustration from "@/assets/frog-illustration.png";

const navigation = [
  { name: "UX design", href: "/" },
  { name: "Resume", href: "/resume" },
];

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block px-4 py-3 text-2xl font-rufina transition-colors duration-200 ${
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
          src={frogIllustration}
          alt="Frog illustration"
          className="w-16 h-16 mx-auto opacity-60"
        />
      </div>
    </div>
  );
}