import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BottomNav from "./BottomNav";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--bg-app)",
        transition: "background-color 0.3s",
      }}
    >
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="overlay lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="main-content">
        <Header onMenuToggle={() => setMobileOpen(true)} />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
