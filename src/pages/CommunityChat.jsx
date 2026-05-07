import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Search } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { useApp } from "../context/AppContext";

export default function CommunityChat() {
  const { chatContacts, messages, addMessage } = useApp();
  const [active, setActive] = useState(chatContacts[0]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(true);
  const endRef = useRef(null);
  const activeMessages = messages[active?.id] || [];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeMessages]);

  const handleSend = () => {
    if (!input.trim() || !active) return;
    addMessage(active.id, input.trim());
    setInput("");
  };

  const filtered = chatContacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AnimatedPage>
      <div className="page" style={{ paddingBottom: 0 }}>
        <div
          style={{
            display: "flex",
            gap: 0,
            height: "calc(100dvh - 128px)",
            minHeight: 400,
            background: "var(--bg-card)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--input-border)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* Contacts panel */}
          <div
            style={{
              width: 280,
              borderRight: "1px solid var(--border-color)",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              ...(showList ? {} : { display: "none" }),
            }}
            className="chat-contact-panel"
          >
            <div style={{ padding: "16px 14px 10px" }}>
              <h2
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "var(--text-main)",
                  marginBottom: 10,
                }}
              >
                Messages
              </h2>
              <div style={{ position: "relative" }}>
                <Search
                  size={13}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--text-muted)",
                  }}
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search…"
                  style={{
                    width: "100%",
                    padding: "8px 10px 8px 30px",
                    borderRadius: 10,
                    border: "1.5px solid var(--input-border)",
                    background: "var(--input-bg)",
                    fontSize: 12,
                    outline: "none",
                    fontFamily: "inherit",
                    color: "var(--text-main)",
                  }}
                />
              </div>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActive(c);
                    setShowList(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    padding: "10px 14px",
                    background:
                      active?.id === c.id ? "var(--input-bg)" : "transparent",
                    borderLeft:
                      active?.id === c.id
                        ? "3px solid var(--gold-400)"
                        : "3px solid transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: "var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                      }}
                    >
                      {c.avatar}
                    </div>
                    {c.online && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 1,
                          right: 1,
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#22c55e",
                          border: "2px solid white",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--text-main)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.name}
                      </p>
                      <span
                        style={{
                          fontSize: 10,
                          color: "var(--text-muted)",
                          flexShrink: 0,
                          marginLeft: 4,
                        }}
                      >
                        {c.time}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.lastMessage}
                    </p>
                  </div>
                  {c.unread > 0 && (
                    <span
                      style={{
                        minWidth: 18,
                        height: 18,
                        borderRadius: 99,
                        background: "#ef4444",
                        color: "white",
                        fontSize: 10,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 4px",
                        flexShrink: 0,
                      }}
                    >
                      {c.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            {/* Chat header */}
            {active && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 18px",
                  borderBottom: "1px solid var(--border-color)",
                  background: "var(--input-bg)",
                }}
              >
                <button
                  onClick={() => setShowList(true)}
                  className="mobile-back-btn"
                  style={{
                    display: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    marginRight: 4,
                  }}
                >
                  ←
                </button>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {active.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--text-main)",
                    }}
                  >
                    {active.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: active.online ? "#22c55e" : "var(--text-muted)",
                    }}
                  >
                    {active.online ? "● Online" : "○ Offline"}
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {activeMessages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    justifyContent: m.isUser ? "flex-end" : "flex-start",
                  }}
                >
                  <div>
                    <div
                      className={m.isUser ? "bubble-user" : "bubble-bot"}
                      style={{ fontSize: 13 }}
                    >
                      {m.content}
                    </div>
                    <p
                      style={{
                        fontSize: 10,
                        color: "var(--text-muted)",
                        marginTop: 3,
                        textAlign: m.isUser ? "right" : "left",
                      }}
                    >
                      {m.time}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "10px 14px",
                borderTop: "1px solid var(--border-color)",
                display: "flex",
                gap: 8,
                background: "var(--bg-card)",
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type a message…"
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: "1.5px solid var(--input-border)",
                  background: "var(--input-bg)",
                  fontSize: 13,
                  outline: "none",
                  fontFamily: "inherit",
                  color: "var(--text-main)",
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="btn-primary"
                style={{ padding: "0 16px", height: 44, flexShrink: 0 }}
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .chat-contact-panel { display: flex !important; width: 100% !important; }
          .mobile-back-btn { display: block !important; }
        }
      `}</style>
    </AnimatedPage>
  );
}
