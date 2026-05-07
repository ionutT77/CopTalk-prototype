import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PenLine,
  Bot,
  CalendarDays,
  ClipboardCheck,
} from "lucide-react";

const items = [
  { path: "/", label: "Home", icon: LayoutDashboard },
  { path: "/stories", label: "Stories", icon: PenLine },
  { path: "/copilot", label: "Copilot", icon: Bot },
  { path: "/events", label: "Events", icon: CalendarDays },
  { path: "/assessment", label: "Quiz", icon: ClipboardCheck },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) =>
            `bottom-nav-item${isActive ? " active" : ""}`
          }
        >
          <item.icon size={20} />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
