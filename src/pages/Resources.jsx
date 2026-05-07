import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  UserCheck,
  Heart,
  Phone,
  Home,
  ExternalLink,
  Building2,
  ArrowRight,
  Globe,
  Mail,
} from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { mockResources, mockNGOs } from "../data/mockData";

const iconMap = { Users, BookOpen, UserCheck, Heart, Phone, Home };

const catColors = {
  therapy: { bg: "#dbeafe", icon: "#1e40af" },
  education: { bg: "#dcfce7", icon: "#166534" },
  support: { bg: "#ede9fe", icon: "#5b21b6" },
  crisis: { bg: "#fee2e2", icon: "#991b1b" },
  family: { bg: "#fce7f3", icon: "#831843" },
};

export default function Resources() {
  const [tab, setTab] = useState("resources");

  return (
    <AnimatedPage>
      <div className="page">
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "var(--text-main)",
              letterSpacing: "-0.02em",
            }}
          >
            Resources
          </h1>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
            Professional support and educational materials
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {[
            { k: "resources", l: "All Resources" },
            { k: "ngo", l: "NGO Partners" },
          ].map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              style={{
                padding: "9px 18px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
                background: tab === t.k ? 'var(--text-main)' : 'var(--bg-card)',
                color: tab === t.k ? 'var(--bg-app)' : 'var(--text-muted)',
                boxShadow:
                  tab === t.k
                    ? "0 2px 8px rgba(21,38,66,0.25)"
                    : "0 1px 4px rgba(0,0,0,0.06)",
                border: tab === t.k ? "none" : "1px solid var(--input-border)",
              }}
            >
              {t.l}
            </button>
          ))}
        </div>

        {tab === "resources" && (
          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}
          >
            {mockResources.map((r, i) => {
              const Icon = iconMap[r.icon] || Heart;
              const col = catColors[r.category] || {
                bg: "var(--border-color)",
                icon: "#475569",
              };
              return (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="card card-hover"
                  style={{ padding: "22px" }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: col.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <Icon size={22} color={col.icon} />
                  </div>
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text-main)",
                      marginBottom: 8,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                      flex: 1,
                    }}
                  >
                    {r.description}
                  </p>
                  <button
                    className="btn-navy"
                    style={{ fontSize: 12, padding: "8px 16px" }}
                  >
                    Learn More <ExternalLink size={12} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {tab === "ngo" && (
          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {mockNGOs.map((n, i) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="card card-hover"
                style={{ padding: "24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: "var(--text-main)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Building2 size={20} color="white" />
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-main)",
                    }}
                  >
                    {n.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: 10,
                  }}
                >
                  {n.description}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                    marginBottom: 16,
                  }}
                >
                  {n.activities}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    className="btn-navy"
                    style={{ fontSize: 12, padding: "8px 14px" }}
                  >
                    <Globe size={12} /> Website
                  </button>
                  <button
                    className="btn-ghost"
                    style={{ fontSize: 12, padding: "8px 14px" }}
                  >
                    <Mail size={12} /> Contact
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}
