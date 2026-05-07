import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageSquare,
  PenLine,
  X,
  Sparkles,
  Send,
  Share2,
} from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { useApp } from "../context/AppContext";
import { aiRecommendations } from "../data/mockData";

export default function PeerStories() {
  const { stories, addStory, likeStory } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    addStory(
      text,
      tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    );
    setText("");
    setTags("");
    setShowModal(false);
  };

  return (
    <AnimatedPage>
      <div className="page">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {/* Feed */}
          <div style={{ flex: "1 1 480px", minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--text-main)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Peer Stories
                </h1>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginTop: 2,
                  }}
                >
                  Anonymous stories from fellow officers
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary"
                style={{ fontSize: 13 }}
              >
                <PenLine size={15} /> Share My Story
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {stories.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card card-hover"
                  style={{ padding: "20px 22px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "var(--border-color)",
                        border: "2px solid var(--input-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                      }}
                    >
                      {s.avatar}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--text-main)",
                        }}
                      >
                        {s.author}
                      </p>
                      <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
                        {s.timeAgo}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-main)",
                      lineHeight: 1.7,
                      marginBottom: 12,
                    }}
                  >
                    {s.content}
                  </p>
                  {s.tags?.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 14,
                      }}
                    >
                      {s.tags.map((t) => (
                        <span key={t} className="badge badge-navy">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      paddingTop: 12,
                      borderTop: "1px solid var(--border-color)",
                    }}
                  >
                    <button
                      onClick={() => likeStory(s.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 12,
                        color: "var(--text-muted)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        padding: 0,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ef4444")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      <Heart size={14} /> {s.likes}
                    </button>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 12,
                        color: "var(--text-muted)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        padding: 0,
                      }}
                    >
                      <MessageSquare size={14} /> {s.comments}
                    </button>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 12,
                        color: "var(--text-muted)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        padding: 0,
                        marginLeft: "auto",
                      }}
                    >
                      <Share2 size={14} /> Share
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Sidebar */}
          <div style={{ flex: "0 0 260px", minWidth: 0 }}>
            <div
              className="card"
              style={{ padding: 20, position: "sticky", top: 84 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <Sparkles size={16} color="var(--gold-500)" />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  AI Recommendations
                </span>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                Based on your recent story, you might connect well with:
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {aiRecommendations.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: "#fffbeb",
                      border: "1px solid #fde68a",
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{r.avatar}</span>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--text-main)",
                        }}
                      >
                        {r.name}
                      </p>
                      <p style={{ fontSize: 10, color: "#92400e" }}>
                        {r.reason}
                      </p>
                    </div>
                    <button
                      className="btn-navy"
                      style={{ padding: "5px 10px", fontSize: 11 }}
                    >
                      Connect
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--bg-card)",
                borderRadius: 20,
                padding: "28px 28px 24px",
                width: "100%",
                maxWidth: 500,
                boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  Share Your Story
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    background: "var(--border-color)",
                    border: "none",
                    borderRadius: 8,
                    padding: 6,
                    cursor: "pointer",
                    lineHeight: 0,
                  }}
                >
                  <X size={16} color="var(--text-muted)" />
                </button>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginBottom: 16,
                }}
              >
                Your story is shared anonymously. It may help someone going
                through something similar.
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your story here…"
                rows={5}
                className="input-field"
                style={{ resize: "none", marginBottom: 10 }}
              />
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags (comma separated, e.g. Sleep, Anxiety)"
                className="input-field"
                style={{ marginBottom: 18 }}
              />
              <div
                style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="btn-ghost"
                >
                  Cancel
                </button>
                <button
                  onClick={submit}
                  disabled={!text.trim()}
                  className="btn-primary"
                >
                  <Send size={14} /> Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
