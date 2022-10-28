import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "../views/AboutPage";

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/*" element={<Navigate to="/about" />} />
    </Routes>
  );
};
