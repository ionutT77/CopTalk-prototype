import { Bell, Menu, Shield, Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Header({ onMenuToggle }) {
  const { user, theme, toggleTheme } = useApp();

  return (
    <header className="app-header">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        style={{
          display: "none",
          padding: 8,
          borderRadius: 10,
          background: "transparent",
          border: "1px solid var(--input-border)",
          cursor: "pointer",
          lineHeight: 0,
          color: "#475569",
        }}
        className="mobile-menu-btn"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Shield size={20} color="var(--gold-500)" />
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            color: "var(--text-main)",
            letterSpacing: "0.06em",
          }}
        >
          OFFICER SUPPORT HUB
        </span>
      </div>

      <div style={{ flex: 1 }} />

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: 8,
            borderRadius: 10,
            background: "var(--input-bg)",
            border: "1px solid var(--input-border)",
            cursor: "pointer",
            lineHeight: 0,
            color: "var(--text-muted)",
            transition: "all 0.2s",
          }}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Bell */}
        <button
          style={{
            position: "relative",
            padding: 8,
            borderRadius: 10,
            background: "var(--input-bg)",
            border: "1px solid var(--input-border)",
            cursor: "pointer",
            lineHeight: 0,
            color: "var(--text-muted)",
          }}
        >
          <Bell size={18} />
          <span className="notif-badge">3</span>
        </button>

        {/* User chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px 6px 6px",
            borderRadius: 99,
            background: "var(--bg-app)",
            border: "1px solid var(--input-border)",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--text-main), var(--navy-600))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            👤
          </div>
          <span
            style={{ fontSize: 13, fontWeight: 600, color: "var(--text-main)" }}
          >
            {user?.username || "Officer"}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
