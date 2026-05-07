import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Shield, Zap } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { chatbotResponses, suggestedQuestions } from "../data/mockData";

export default function Copilot() {
  const [msgs, setMsgs] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hello! I'm your PTSD Support Copilot, trained on UK Police mental health research.\n\nI can help you with coping strategies, understanding PTSD symptoms, and finding the right support. Everything you share here is completely private.\n\nFeel free to ask me anything, or choose a suggested question below.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text) => {
    const t = text || input.trim();
    if (!t) return;
    setInput("");
    setMsgs((p) => [
      ...p,
      {
        id: Date.now(),
        role: "user",
        text: t,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setTyping(true);
    setTimeout(() => {
      setMsgs((p) => [
        ...p,
        {
          id: Date.now() + 1,
          role: "bot",
          text: chatbotResponses[t] || chatbotResponses.default,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setTyping(false);
    }, 1600);
  };

  return (
    <AnimatedPage style={{ height: "calc(100dvh - 64px)" }}>
      <div
        className="page"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: 0,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(135deg, #e0b040, #c9921a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(201,146,26,0.3)",
            }}
          >
            <Shield size={20} color="#0d1b2e" />
          </div>
          <div>
            <h1
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "var(--text-main)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              PTSD Copilot <Zap size={14} color="var(--gold-500)" />
            </h1>
            <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
              AI assistant trained on UK Police PTSD research
            </p>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "4px 10px",
                borderRadius: 99,
                background: "#dcfce7",
                border: "1px solid #bbf7d0",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#166534" }}>
                Online
              </span>
            </span>
          </div>
        </div>

        {/* Messages */}
        <div
          className="card"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 0,
          }}
        >
          {msgs.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {m.role === "bot" && (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e0b040, #c9921a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 8,
                    flexShrink: 0,
                    alignSelf: "flex-end",
                  }}
                >
                  <Bot size={14} color="#0d1b2e" />
                </div>
              )}
              <div style={{ maxWidth: "75%" }}>
                {m.role === "bot" && (
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--gold-600)",
                      marginBottom: 4,
                    }}
                  >
                    Copilot
                  </p>
                )}
                <div
                  className={m.role === "user" ? "bubble-user" : "bubble-bot"}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {m.text}
                </div>
                <p
                  style={{
                    fontSize: 10,
                    color: "var(--text-muted)",
                    marginTop: 4,
                    textAlign: m.role === "user" ? "right" : "left",
                  }}
                >
                  {m.time}
                </p>
              </div>
            </motion.div>
          ))}
          {typing && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #e0b040, #c9921a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Bot size={14} color="#0d1b2e" />
              </div>
              <div
                className="bubble-bot"
                style={{ display: "flex", gap: 5, padding: "12px 16px" }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`dot-${i}`}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--text-muted)",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Suggested questions */}
        {msgs.length <= 2 && (
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}
          >
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 99,
                  border: "1.5px solid #fde68a",
                  background: "#fffbeb",
                  color: "#92400e",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fde68a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fffbeb";
                }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          style={{ display: "flex", gap: 10, marginTop: 12, paddingBottom: 4 }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder="Type your message…"
            className="input-field"
            style={{ flex: 1 }}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim()}
            className="btn-primary"
            style={{ flexShrink: 0, padding: "0 18px", height: 48 }}
          >
            <Send size={17} />
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
}
