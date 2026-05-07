import { createContext, useContext, useState, useEffect } from "react";
import {
  mockStories,
  mockEvents,
  mockMessages,
  mockChatContacts,
} from "../data/mockData";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [stories, setStories] = useState(mockStories);
  const [events, setEvents] = useState(mockEvents);
  const [chatContacts, setChatContacts] = useState(mockChatContacts);
  const [messages, setMessages] = useState(mockMessages);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(0);

  const login = (badgeNumber, username) => {
    setUser({
      badgeNumber,
      username,
      anonymousId: `${username.replace("Officer ", "")}-${badgeNumber.slice(-2)}`,
      verified: true,
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const addStory = (content, tags) => {
    const newStory = {
      id: Date.now(),
      author: user.username,
      avatar: "👤",
      timeAgo: "Just now",
      content,
      likes: 0,
      comments: 0,
      tags: tags || [],
    };
    setStories((prev) => [newStory, ...prev]);
  };

  const likeStory = (storyId) => {
    setStories((prev) =>
      prev.map((s) => (s.id === storyId ? { ...s, likes: s.likes + 1 } : s)),
    );
  };

  const toggleEventAttend = (eventId) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === eventId
          ? {
              ...e,
              attending: !e.attending,
              attendees: e.attending ? e.attendees - 1 : e.attendees + 1,
            }
          : e,
      ),
    );
  };

  const addMessage = (contactId, content) => {
    const newMsg = {
      id: Date.now(),
      sender: "You",
      content,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
    };
    setMessages((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), newMsg],
    }));
  };

  const completeAssessment = (score) => {
    setAssessmentScore(score);
    setAssessmentComplete(true);
  };

  const value = {
    theme,
    toggleTheme,
    isAuthenticated,
    user,
    stories,
    events,
    chatContacts,
    messages,
    assessmentComplete,
    assessmentScore,
    login,
    logout,
    addStory,
    likeStory,
    toggleEventAttend,
    addMessage,
    completeAssessment,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
