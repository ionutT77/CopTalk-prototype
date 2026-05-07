import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useApp } from "./context/AppContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PeerStories from "./pages/PeerStories";
import Resources from "./pages/Resources";
import Copilot from "./pages/Copilot";
import CommunityChat from "./pages/CommunityChat";
import Events from "./pages/Events";
import SelfAssessment from "./pages/SelfAssessment";
import NGOActivities from "./pages/NGOActivities";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  const { isAuthenticated } = useApp();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="stories" element={<PeerStories />} />
          <Route path="resources" element={<Resources />} />
          <Route path="copilot" element={<Copilot />} />
          <Route path="chat" element={<CommunityChat />} />
          <Route path="events" element={<Events />} />
          <Route path="assessment" element={<SelfAssessment />} />
          <Route path="ngo" element={<NGOActivities />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
