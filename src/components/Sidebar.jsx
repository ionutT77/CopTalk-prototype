import { NavLink } from "react-router-dom";
import { useApp } from "../context/AppContext";
import {
  LayoutDashboard,
  PenLine,
  FolderOpen,
  MessageCircle,
  Bot,
  CalendarDays,
  Building2,
  ClipboardCheck,
  LogOut,
  Shield,
  X,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/stories", label: "Share Story", icon: PenLine },
  { path: "/resources", label: "Resources", icon: FolderOpen },
  { path: "/chat", label: "Community Chat", icon: MessageCircle },
  { path: "/copilot", label: "Copilot AI", icon: Bot },
  { path: "/events", label: "Events", icon: CalendarDays },
  { path: "/ngo", label: "NGO Activities", icon: Building2 },
  { path: "/assessment", label: "PTSD Quiz", icon: ClipboardCheck },
];

export default function Sidebar({ mobileOpen, onClose }) {
  const { user, logout } = useApp();

  return (
    <aside className={`sidebar${mobileOpen ? " sidebar-mobile-open" : ""}`}>
      {/* Close button — mobile only */}
      <button
        onClick={onClose}
        style={{
          display: "none",
          position: "absolute",
          top: 14,
          right: 14,
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: 8,
          padding: 6,
          cursor: "pointer",
          color: "white",
          lineHeight: 0,
        }}
        className="lg-hide-btn"
        aria-label="Close menu"
      >
        <X size={18} />
      </button>

      {/* Logo */}
      <div style={{ padding: "28px 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #e0b040, #c9921a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(201,146,26,0.4)",
              flexShrink: 0,
            }}
          >
            <Shield size={22} color="#0d1b2e" />
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "white",
                letterSpacing: "0.08em",
                lineHeight: 1.2,
              }}
            >
              OFFICER SUPPORT HUB
            </div>
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.35)",
                marginTop: 2,
              }}
            >
              CopTalk Platform
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      {user && (
        <div
          style={{
            margin: "0 12px 16px",
            padding: "12px 14px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #274469, #1e3556)",
                border: "2px solid rgba(201,146,26,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              👤
            </div>
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#f0ca6a",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {user.username}
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>
                Badge #{user.badgeNumber} • Verified
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.06)",
          margin: "0 12px 8px",
        }}
      />

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "4px 0" }}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onClose}
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            <item.icon size={17} className="nav-icon" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          padding: "12px 8px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button
          onClick={logout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            width: "100%",
            padding: "9px 12px",
            borderRadius: 10,
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.35)",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fca5a5";
            e.currentTarget.style.background = "rgba(239,68,68,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .lg-hide-btn { display: flex !important; }
        }
      `}</style>
    </aside>
  );
}
