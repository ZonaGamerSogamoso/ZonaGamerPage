import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AboutRoutes } from "../pages/About/routes/AboutRoutes";
import { HomeRoutes } from "../pages/Home/routes/HomeRoutes";
import { ReservationsRoutes } from "../pages/Reservations/routes/ReservationsRoutes";
import { ServiceRoutes } from "../pages/Service/routes/ServiceRoutes";
import { AuthenticationRoutes } from "../pages/Authentication/routes/AuthenticationRoutes";
import { RegisterRoutes } from "../pages/Authentication/routes/RegisterRoutes";


import { StoreRoutes } from "../pages/Store/routes/StoreRoutes";

export const AppRoute = () => {
  return (
    <>
      <NavBar />
      <div className="container-void" />
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
        <Route path="/about/*" element={<AboutRoutes />} />
        <Route path="/reservation/*" element={<ReservationsRoutes />} />
        <Route path="/service/*" element={<ServiceRoutes />} />
        <Route path="/store/*" element={<StoreRoutes />} />

        {/* Auth Section */}
        <Route path="/login/*" element={<AuthenticationRoutes />}/>
        <Route path="/register/*" element={<RegisterRoutes />}/>
      </Routes>
    </>
  );
};
