import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ReposotoriesPage from "./pages/MainPage/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories" element={<ReposotoriesPage/>} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
