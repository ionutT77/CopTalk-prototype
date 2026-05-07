import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, Users, Check } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { useApp } from "../context/AppContext";

const cats = ["All", "Outdoor", "Wellness", "Gaming", "Workshop", "Social"];
const catBadge = {
  Outdoor: { bg: "#dcfce7", color: "#166534" },
  Wellness: { bg: "#ede9fe", color: "#5b21b6" },
  Gaming: { bg: "#dbeafe", color: "#1e40af" },
  Workshop: { bg: "#fef3c7", color: "#92400e" },
  Social: { bg: "#fce7f3", color: "#9d174d" },
};

export default function Events() {
  const { events, toggleEventAttend } = useApp();
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <AnimatedPage>
      <div className="page">
        <div style={{ marginBottom: 20 }}>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "var(--text-main)",
              letterSpacing: "-0.02em",
            }}
          >
            Events & Distractions
          </h1>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
            Casual activities organised by officers and NGOs
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 22,
          }}
        >
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "7px 14px",
                borderRadius: 99,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
                background: filter === c ? 'var(--text-main)' : 'var(--bg-card)',
                color: filter === c ? 'var(--bg-app)' : 'var(--text-muted)',
                boxShadow:
                  filter === c
                    ? "0 2px 8px rgba(21,38,66,0.25)"
                    : "0 1px 3px rgba(0,0,0,0.06)",
                border: filter === c ? "none" : "1px solid var(--input-border)",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {filtered.map((ev, i) => {
            const badge = catBadge[ev.category] || {
              bg: "var(--border-color)",
              color: "#475569",
            };
            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="card card-hover"
                style={{
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: 99,
                      fontSize: 10,
                      fontWeight: 700,
                      background: badge.bg,
                      color: badge.color,
                    }}
                  >
                    {ev.category}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: "var(--text-muted)",
                    }}
                  >
                    <Users size={12} /> {ev.attendees} going
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-main)",
                    marginBottom: 10,
                  }}
                >
                  {ev.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    marginBottom: 10,
                  }}
                >
                  {[
                    { icon: CalendarDays, val: ev.date },
                    { icon: Clock, val: ev.time },
                    { icon: MapPin, val: ev.location },
                  ].map(({ icon: Icon, val }, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--text-muted)",
                      }}
                    >
                      <Icon size={12} color="var(--text-muted)" /> {val}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: 14,
                  }}
                >
                  {ev.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 12,
                    borderTop: "1px solid var(--border-color)",
                  }}
                >
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    by {ev.organizer}
                  </span>
                  <button
                    onClick={() => toggleEventAttend(ev.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                      border: "none",
                      background: ev.attending ? "#dcfce7" : "var(--text-main)",
                      color: ev.attending ? "#166534" : "var(--bg-app)",
                    }}
                  >
                    {ev.attending ? (
                      <>
                        <Check size={13} /> Attending
                      </>
                    ) : (
                      "Attend"
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
}
