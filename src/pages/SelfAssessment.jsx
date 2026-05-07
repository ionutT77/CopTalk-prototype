import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  MessageCircle,
  Bot,
  BookOpen,
  Shield,
} from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { useApp } from "../context/AppContext";
import { assessmentQuestions, assessmentOptions } from "../data/mockData";

function getResult(score, total) {
  const pct = score / (total * 3);
  if (pct <= 0.25)
    return {
      level: "Low",
      emoji: "🌿",
      bg: "#dcfce7",
      border: "#bbf7d0",
      color: "#166534",
      msg: "Your responses suggest minimal PTSD symptoms. This is encouraging — continue to check in with yourself regularly. Remember that wellbeing is a journey, not a destination.",
    };
  if (pct <= 0.5)
    return {
      level: "Mild",
      emoji: "🌤️",
      bg: "#fef3c7",
      border: "#fde68a",
      color: "#92400e",
      msg: "Your responses suggest some mild PTSD symptoms. This is common among officers and nothing to be ashamed of. We'd encourage you to explore the Resources section and consider speaking with a peer or professional.",
    };
  if (pct <= 0.75)
    return {
      level: "Moderate",
      emoji: "⚡",
      bg: "#fce7f3",
      border: "#fbcfe8",
      color: "#9d174d",
      msg: "Your responses indicate moderate PTSD symptoms. Please know that seeking help is a sign of strength. We strongly recommend exploring therapy options in our Resources section and speaking with our Copilot for immediate coping strategies.",
    };
  return {
    level: "Significant",
    emoji: "🆘",
    bg: "#fee2e2",
    border: "#fecaca",
    color: "#991b1b",
    msg: "Your responses suggest significant PTSD symptoms. You are not alone, and help is available right now. Please connect with a professional through our Resources section. If you are in crisis, contact the Police Crisis Helpline immediately.",
  };
}

export default function SelfAssessment() {
  const { assessmentComplete, assessmentScore, completeAssessment } = useApp();
  const [cur, setCur] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(assessmentComplete);
  const total = assessmentQuestions.length;
  const pct = Math.round(((cur + 1) / total) * 100);

  const pick = (v) => setAnswers((p) => ({ ...p, [cur]: v }));
  const next = () => {
    if (cur < total - 1) {
      setCur((p) => p + 1);
    } else {
      const s = Object.values(answers).reduce((a, b) => a + b, 0);
      completeAssessment(s);
      setDone(true);
    }
  };

  if (done) {
    const r = getResult(assessmentScore, total);
    return (
      <AnimatedPage>
        <div className="page">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
              style={{ padding: "36px 32px", textAlign: "center" }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: r.bg,
                  border: `2px solid ${r.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: 36,
                }}
              >
                {r.emoji}
              </div>
              <h1
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--text-main)",
                  marginBottom: 6,
                }}
              >
                Your Assessment Results
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 20,
                }}
              >
                Thank you for taking this step. Your responses are completely
                confidential.
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  borderRadius: 14,
                  background: r.bg,
                  border: `1.5px solid ${r.border}`,
                  marginBottom: 24,
                }}
              >
                <p style={{ fontSize: 18, fontWeight: 800, color: r.color }}>
                  Symptom Level: {r.level}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginTop: 3,
                  }}
                >
                  Score: {assessmentScore} / {total * 3}
                </p>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-main)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                  textAlign: "left",
                }}
              >
                {r.msg}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <Link to="/resources" style={{ textDecoration: "none" }}>
                  <button
                    className="btn-navy"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <BookOpen size={15} /> Resources
                  </button>
                </Link>
                <Link to="/copilot" style={{ textDecoration: "none" }}>
                  <button
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Bot size={15} /> Copilot
                  </button>
                </Link>
                <Link to="/chat" style={{ textDecoration: "none" }}>
                  <button
                    className="btn-ghost"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <MessageCircle size={15} /> Peer Chat
                  </button>
                </Link>
                <button
                  onClick={() => {
                    setDone(false);
                    setCur(0);
                    setAnswers({});
                  }}
                  className="btn-ghost"
                  style={{ width: "100%" }}
                >
                  Retake
                </button>
              </div>
            </motion.div>
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "var(--text-muted)",
                marginTop: 16,
              }}
            >
              This is a screening tool, not a clinical diagnosis. Please consult
              a qualified professional.
            </p>
          </div>
        </div>
      </AnimatedPage>
    );
  }

  const q = assessmentQuestions[cur];
  return (
    <AnimatedPage>
      <div className="page">
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #e0b040, #c9921a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Shield size={18} color="#0d1b2e" />
              </div>
              <div>
                <h1
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  PTSD Self-Assessment
                </h1>
                <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  Confidential • Based on PCL-5 clinical screening
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--text-main)",
                }}
              >
                Question {cur + 1} of {total}
              </span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {pct}%
              </span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="card"
              style={{ padding: "28px 26px", marginBottom: 16 }}
            >
              <h2
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {q.question}
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginBottom: 22,
                  lineHeight: 1.6,
                }}
              >
                {q.subtext}
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {assessmentOptions.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => pick(o.value)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: 12,
                      border: `2px solid ${answers[cur] === o.value ? "var(--gold-400)" : "var(--input-border)"}`,
                      background:
                        answers[cur] === o.value
                          ? "#fffbeb"
                          : "var(--input-bg)",
                      color:
                        answers[cur] === o.value
                          ? "#92400e"
                          : "var(--text-main)",
                      fontSize: 14,
                      fontWeight: answers[cur] === o.value ? 700 : 500,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setCur((p) => p - 1)}
              disabled={cur === 0}
              className="btn-ghost"
              style={{ gap: 6 }}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              onClick={next}
              disabled={answers[cur] === undefined}
              className="btn-primary"
              style={{ gap: 6 }}
            >
              {cur === total - 1 ? "View Results" : "Next"}{" "}
              <ChevronRight size={16} />
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "var(--text-muted)",
              marginTop: 20,
            }}
          >
            Your responses are confidential and never shared with your employer.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
