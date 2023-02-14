import React from "react";
import { Route, Routes } from "react-router-dom";
import AppWrapper from "./components/appWrapper/AppWrapper";
import LoginPage from "./pages/login/LoginPage";
import UserPage from "./pages/user/UserPage";

function App() {
  return (
    <Routes>
      <Route path="user" element={<UserPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<AppWrapper />} />
    </Routes>
  );
}

export default App;
