import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  BookOpen,
  UserCheck,
  Heart,
  MessageCircle,
  CalendarDays,
  Building2,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  Send,
  Bot,
  TrendingUp,
} from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { useApp } from "../context/AppContext";
import { aiRecommendations, mockNGOs } from "../data/mockData";

const S = {
  /* inline shorthand styles */
};

const fa = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

function DashCard({ style, children, delay = 0 }) {
  return (
    <motion.div
      {...fa(delay)}
      className="card"
      style={{ padding: 0, ...style }}
    >
      {children}
    </motion.div>
  );
}

export default function Dashboard() {
  const { user, stories, events, chatContacts } = useApp();

  return (
    <AnimatedPage>
      <div className="page">
        {/* Welcome Banner */}
        <motion.div
          {...fa(0)}
          className="welcome-banner"
          style={{ marginBottom: 24 }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <TrendingUp size={16} color="rgba(255,255,255,0.5)" />
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}
              >
                Personalised Dashboard
              </span>
            </div>
            <h1
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "white",
                marginBottom: 6,
                letterSpacing: "-0.02em",
              }}
            >
              Welcome back, {user?.username || "Officer"} 👋
            </h1>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 12,
              }}
            >
              Anonymous ID: {user?.anonymousId || "Apex-71"}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: 99,
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.2)",
              }}
            >
              <CheckCircle2 size={13} color="#4ade80" />
              <span style={{ fontSize: 12, color: "#4ade80", fontWeight: 600 }}>
                Badge Verified — #{user?.badgeNumber}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {/* My Stories & AI Match */}
          <DashCard delay={0.06}>
            <div style={{ padding: "20px 20px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sparkles size={15} color="#92400e" />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  My Stories & AI Matching
                </span>
              </div>

              {stories[0] && (
                <div
                  style={{
                    padding: "12px",
                    borderRadius: 12,
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{stories[0].avatar}</span>
                    <div>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--text-main)",
                        }}
                      >
                        {stories[0].author}
                      </p>
                      <p style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {stories[0].timeAgo}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {stories[0].content}
                  </p>
                </div>
              )}
            </div>

            {/* AI recommendation box */}
            <div
              style={{
                margin: "0 20px 20px",
                padding: "12px 14px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #fffbeb, #fef9ec)",
                border: "1px solid #fde68a",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#92400e",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                }}
              >
                🤖 AI Recommended Connection
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 24 }}>
                    {aiRecommendations[0].avatar}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--text-main)",
                      }}
                    >
                      {aiRecommendations[0].name}
                    </p>
                    <p style={{ fontSize: 10, color: "#92400e" }}>
                      {aiRecommendations[0].reason}
                    </p>
                  </div>
                </div>
                <button
                  className="btn-navy"
                  style={{ padding: "6px 14px", fontSize: 11 }}
                >
                  Connect
                </button>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-color)",
                padding: "12px 20px",
              }}
            >
              <Link
                to="/stories"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--gold-600)",
                  textDecoration: "none",
                }}
              >
                View all stories <ArrowRight size={12} />
              </Link>
            </div>
          </DashCard>

          {/* Resources */}
          <DashCard delay={0.1}>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BookOpen size={15} color="#1e40af" />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  Resources
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {[
                  { icon: Users, label: "Therapy Groups", sub: "Near You" },
                  { icon: BookOpen, label: "Educational", sub: "Articles" },
                  { icon: UserCheck, label: "1-on-1", sub: "Therapy" },
                  { icon: Heart, label: "Support", sub: "Groups" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to="/resources"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        padding: "14px 10px",
                        borderRadius: 12,
                        border: "1.5px solid var(--input-border)",
                        background: "var(--input-bg)",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--gold-400)";
                        e.currentTarget.style.background = "#fffbeb";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--input-border)";
                        e.currentTarget.style.background = "var(--input-bg)";
                      }}
                    >
                      <item.icon
                        size={20}
                        color="var(--navy-600)"
                        style={{ margin: "0 auto 6px" }}
                      />
                      <p
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--text-main)",
                        }}
                      >
                        {item.label}
                      </p>
                      <p style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {item.sub}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  marginTop: 14,
                  paddingTop: 12,
                }}
              >
                <Link
                  to="/resources"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--gold-600)",
                    textDecoration: "none",
                  }}
                >
                  Browse all resources <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </DashCard>

          {/* Community Chat */}
          <DashCard delay={0.14}>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MessageCircle size={15} color="#166534" />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  Community Chat
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {chatContacts.slice(0, 5).map((c) => (
                  <Link
                    key={c.id}
                    to="/chat"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 10px",
                        borderRadius: 10,
                        cursor: "pointer",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "var(--input-bg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <span style={{ fontSize: 22 }}>{c.avatar}</span>
                        {c.online && (
                          <span
                            style={{
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              width: 9,
                              height: 9,
                              borderRadius: "50%",
                              background: "#22c55e",
                              border: "2px solid white",
                            }}
                          />
                        )}
                      </div>
                      <div style={{ flex: 1, overflow: "hidden" }}>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "var(--text-main)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {c.name}
                        </p>
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
                          }}
                        >
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </DashCard>

          {/* PTSD Copilot */}
          <DashCard
            delay={0.18}
            style={{ borderLeft: "4px solid var(--gold-400)" }}
          >
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #e0b040, #c9921a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Bot size={15} color="#0d1b2e" />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text-main)",
                    }}
                  >
                    PTSD Copilot
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: "var(--text-muted)",
                      marginLeft: 6,
                    }}
                  >
                    AI Chatbot
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  className="bubble-user"
                  style={{
                    fontSize: 12,
                    padding: "10px 14px",
                    borderRadius: "14px 14px 4px 14px",
                    marginLeft: 20,
                  }}
                >
                  Ask me anything about PTSD symptoms or trauma?
                </div>
                <div
                  className="bubble-bot"
                  style={{
                    fontSize: 12,
                    padding: "10px 14px",
                    marginRight: 20,
                  }}
                >
                  Hello, I can help answer questions based on UK Police
                  research.
                  <span style={{ color: "var(--text-muted)" }}>
                    {" "}
                    (Suggestions: Hypervigilance, Grounding Techniques)
                  </span>
                </div>
              </div>
              <Link to="/copilot" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: "1.5px solid var(--input-border)",
                    background: "var(--input-bg)",
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    fontSize: 12,
                  }}
                >
                  <Send size={12} /> Type a message…
                </div>
              </Link>
            </div>
          </DashCard>

          {/* Events */}
          <DashCard delay={0.22}>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarDays size={15} color="#5b21b6" />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  Events Calendar
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {events.slice(0, 3).map((ev) => (
                  <div
                    key={ev.id}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid var(--input-border)",
                      }}
                    >
                      <CalendarDays size={16} color="var(--text-muted)" />
                    </div>
                    <div style={{ flex: 1, overflow: "hidden" }}>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-main)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {ev.title.includes("—")
                          ? ev.title.split("—")[0].trim()
                          : ev.title}
                      </p>
                      <p style={{ fontSize: 10, color: "var(--text-muted)" }}>
                        {ev.date.split(",")[0]}
                      </p>
                    </div>
                    {ev.attending && (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 99,
                          background: "#dcfce7",
                          color: "#166534",
                        }}
                      >
                        GOING
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  marginTop: 14,
                  paddingTop: 12,
                }}
              >
                <Link
                  to="/events"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--gold-600)",
                    textDecoration: "none",
                  }}
                >
                  View all events <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </DashCard>

          {/* NGO */}
          <DashCard delay={0.26}>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #fee2e2, #fecaca)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Building2 size={15} color="#991b1b" />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  NGO Activities
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {mockNGOs.slice(0, 2).map((ngo) => (
                  <Link
                    key={ngo.id}
                    to="/ngo"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 12px",
                        borderRadius: 12,
                        background: "var(--input-bg)",
                        cursor: "pointer",
                        transition: "background 0.2s",
                        border: "1px solid var(--border-color)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "var(--hover-bg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "var(--input-bg)")
                      }
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: "var(--border-color)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Building2 size={14} color="var(--text-muted)" />
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "var(--text-main)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {ngo.name}
                        </p>
                        <p
                          style={{
                            fontSize: 10,
                            color: "var(--text-muted)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {ngo.activities}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--border-color)",
                  marginTop: 14,
                  paddingTop: 12,
                }}
              >
                <Link
                  to="/ngo"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--gold-600)",
                    textDecoration: "none",
                  }}
                >
                  All partners <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </DashCard>

          {/* Self-Assessment CTA — spans full width on large screens */}
          <DashCard
            delay={0.3}
            style={{
              background:
                "linear-gradient(135deg, var(--text-main) 0%, var(--navy-700) 100%)",
              gridColumn: "span 1",
            }}
          >
            <div
              style={{
                padding: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <ClipboardCheck size={18} color="#e0b040" />
                  <span
                    style={{ fontSize: 14, fontWeight: 700, color: "white" }}
                  >
                    Self-Assessment Quiz
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                    maxWidth: 260,
                  }}
                >
                  A confidential, research-based check-in. Results are private
                  and never shared with your employer.
                </p>
                <Link to="/assessment" style={{ textDecoration: "none" }}>
                  <button
                    className="btn-primary"
                    style={{ fontSize: 12, padding: "10px 18px" }}
                  >
                    <ClipboardCheck size={14} /> Take the PTSD Check
                  </button>
                </Link>
              </div>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: "rgba(201,146,26,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ClipboardCheck size={36} color="#e0b040" />
              </div>
            </div>
          </DashCard>
        </div>
      </div>
    </AnimatedPage>
  );
}
