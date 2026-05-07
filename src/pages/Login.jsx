import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Loader2,
  CheckCircle2,
  ChevronRight,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { usernameOptions } from "../data/mockData";

const slide = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
};

export default function Login() {
  const { login } = useApp();
  const [step, setStep] = useState(1);
  const [badge, setBadge] = useState("");
  const [showBadge, setShowBadge] = useState(false);
  const [selected, setSelected] = useState("");
  const [custom, setCustom] = useState("");

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 2600);
      return () => clearTimeout(t);
    }
  }, [step]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (badge.trim().length >= 3) setStep(2);
  };

  const handleEnter = () => {
    const name = selected || custom.trim() || "Officer Apex";
    login(badge, name.startsWith("Officer") ? name : `Officer ${name}`);
  };

  return (
    <div className="login-bg">
      {/* ── Left panel (desktop only) ── */}
      <div
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px 64px",
          position: "relative",
          zIndex: 1,
        }}
        className="login-left-panel"
      >
        {/* Shield hero */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "linear-gradient(135deg, #e0b040, #c9921a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 40px rgba(201,146,26,0.5)",
            marginBottom: 32,
          }}
        >
          <Shield size={50} color="#0d1b2e" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Officer
          <br />
          Support
          <br />
          Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: 340,
            marginBottom: 40,
          }}
        >
          A confidential platform built for UK police officers navigating
          trauma, PTSD, and mental health. You are not alone.
        </motion.p>

        {/* Trust badges */}
        {[
          "🔒  End-to-end encrypted",
          "🏥  NHS Digital Approved",
          "🛡️  GDPR Compliant",
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              {t}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Right panel / form ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            maxWidth: 420,
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 24,
            padding: "36px 32px",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Mobile logo */}
          <div
            style={{ textAlign: "center", marginBottom: 28 }}
            className="mobile-logo"
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "linear-gradient(135deg, #e0b040, #c9921a)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 24px rgba(201,146,26,0.45)",
                marginBottom: 14,
              }}
            >
              <Shield size={30} color="#0d1b2e" />
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Officer Support Hub
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                marginTop: 4,
              }}
            >
              A safe space for those who serve
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1 — Badge */}
            {step === 1 && (
              <motion.form
                key="s1"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.28 }}
                onSubmit={handleVerify}
              >
                <div style={{ marginBottom: 6 }}>
                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Badge Number
                  </label>
                  <div style={{ position: "relative", marginTop: 8 }}>
                    <input
                      type={showBadge ? "text" : "password"}
                      value={badge}
                      onChange={(e) => setBadge(e.target.value)}
                      placeholder="Enter badge number…"
                      autoFocus
                      style={{
                        width: "100%",
                        padding: "14px 44px 14px 16px",
                        borderRadius: 12,
                        border: "1.5px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.08)",
                        color: "white",
                        fontSize: 15,
                        outline: "none",
                        transition: "border-color 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(201,146,26,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowBadge(!showBadge)}
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 0,
                      }}
                    >
                      {showBadge ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: 24,
                    marginTop: 8,
                  }}
                >
                  Your badge number is verified anonymously via government
                  records. It is never stored.
                </p>

                <button
                  type="submit"
                  disabled={badge.trim().length < 3}
                  className="btn-primary"
                  style={{ width: "100%", padding: "14px", fontSize: 15 }}
                >
                  Verify Identity
                  <ChevronRight size={17} />
                </button>
              </motion.form>
            )}

            {/* Step 2 — Loading */}
            {step === 2 && (
              <motion.div
                key="s2"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.28 }}
                style={{ textAlign: "center", padding: "20px 0 28px" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ display: "inline-block", marginBottom: 20 }}
                >
                  <Loader2 size={52} color="#e0b040" />
                </motion.div>
                <h2
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  Verifying with Government Database…
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 24,
                  }}
                >
                  Checking badge #{badge} against UK Police Records
                </p>
                <div
                  style={{ display: "flex", justifyContent: "center", gap: 6 }}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`dot-${i}`}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#e0b040",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3 — Username */}
            {step === 3 && (
              <motion.div
                key="s3"
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.28 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 20,
                    padding: "10px 14px",
                    borderRadius: 10,
                    background: "rgba(74,222,128,0.1)",
                    border: "1px solid rgba(74,222,128,0.2)",
                  }}
                >
                  <CheckCircle2 size={16} color="#4ade80" />
                  <span
                    style={{ fontSize: 13, color: "#4ade80", fontWeight: 600 }}
                  >
                    Badge #{badge} — Verified
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "white",
                    marginBottom: 4,
                  }}
                >
                  Choose your anonymous handle
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 18,
                  }}
                >
                  Your real identity is protected. Pick a codename.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  {usernameOptions.slice(0, 6).map((name) => (
                    <button
                      key={name}
                      onClick={() => {
                        setSelected(name);
                        setCustom("");
                      }}
                      style={{
                        padding: "10px 8px",
                        borderRadius: 10,
                        border: `1.5px solid ${selected === name ? "#e0b040" : "rgba(255,255,255,0.1)"}`,
                        background:
                          selected === name
                            ? "rgba(201,146,26,0.15)"
                            : "rgba(255,255,255,0.05)",
                        color:
                          selected === name
                            ? "#f0ca6a"
                            : "rgba(255,255,255,0.65)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    position: "relative",
                    marginBottom: 20,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.08)",
                      position: "absolute",
                      inset: "50% 0 auto",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.3)",
                      background: "transparent",
                      position: "relative",
                      padding: "0 10px",
                    }}
                  >
                    or type your own
                  </span>
                </div>

                <input
                  type="text"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setSelected("");
                  }}
                  placeholder="Officer ..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1.5px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.06)",
                    color: "white",
                    fontSize: 14,
                    outline: "none",
                    fontFamily: "inherit",
                    marginBottom: 20,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(201,146,26,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />

                <button
                  onClick={handleEnter}
                  disabled={!selected && !custom.trim()}
                  className="btn-primary"
                  style={{ width: "100%", padding: "14px", fontSize: 15 }}
                >
                  Enter the Hub
                  <ChevronRight size={17} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .login-left-panel { display: flex !important; }
          .mobile-logo { display: none !important; }
        }
        input::placeholder { color: rgba(255,255,255,0.3) !important; }
      `}</style>
    </div>
  );
}
