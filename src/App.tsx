import React from "react";
import { Route, Routes } from "react-router-dom";
import AppWrapper from "./components/appWrapper/AppWrapper";
import LoginPage from "./pages/login/LoginPage";
import Settings from "./pages/settings/Settings";
import User from "./pages/user/User";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<AppWrapper />} />
      <Route
        path="settings"
        element={
          <AppWrapper>
            <Settings />
          </AppWrapper>
        }
      />
      <Route
        path="settings/users"
        element={
          <AppWrapper>
            <User />
          </AppWrapper>
        }
      />
      <Route path="category" element={<AppWrapper />} />
    </Routes>
  );
}

export default App;
