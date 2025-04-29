import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import AddPodcastPage from "../pages/AddPodcastPage";
import PodcastPage from "../pages/PodcastPage";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><SignupPage /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Route>
          <Route path="/addpodcast" element={<ProtectedRoute><AddPodcastPage /></ProtectedRoute>} />
          <Route path="/podcast" element={<ProtectedRoute><PodcastPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
