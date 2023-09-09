import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SystemPage from "./pages/SystemPage";
import AllCampaign from "./pages/AllCampaign";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignPage from "./pages/CampaignPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthLayout from "./components/Auth/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute onLogin={false}>
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute onLogin={false}>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/system"
          element={
            <ProtectedRoute onLogin={true}>
              <SystemPage />
            </ProtectedRoute>
          }
        />
        <Route path="/all" element={<AllCampaign />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/campaign-page/:id" element={<CampaignPage />} />
      </Routes>
    </>
  );
}

export default App;
