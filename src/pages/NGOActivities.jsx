import { motion } from "framer-motion";
import { Building2, Globe, Mail, ArrowRight } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { mockNGOs } from "../data/mockData";

const ngoColors = ["#1e40af", "#5b21b6", "#166534", "#92400e"];

export default function NGOActivities() {
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
            NGO Partners & Activities
          </h1>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
            Non-profit organisations supporting officer wellbeing
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {mockNGOs.map((ngo, i) => (
            <motion.div
              key={ngo.id}
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
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: ngoColors[i] || "#1e40af",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${ngoColors[i]}40`,
                  }}
                >
                  <Building2 size={24} color="white" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-main)",
                    }}
                  >
                    {ngo.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 2,
                    }}
                  >
                    {ngo.activities}
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                {ngo.description}
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  className="btn-navy"
                  style={{ fontSize: 12, padding: "8px 14px" }}
                >
                  <Globe size={13} /> Visit Website
                </button>
                <button
                  className="btn-ghost"
                  style={{ fontSize: 12, padding: "8px 14px" }}
                >
                  <Mail size={13} /> Contact
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
