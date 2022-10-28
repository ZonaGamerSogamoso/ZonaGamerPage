import { Navigate, Route, Routes } from "react-router-dom"
import { ServicePage } from "../views/ServicePage"

export const ServiceRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ServicePage />}/>
        <Route path="/*" element={<Navigate to="/service" />}/>
    </Routes>
  )
}
