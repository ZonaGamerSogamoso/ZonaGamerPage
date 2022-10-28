import { Navigate, Route, Routes } from "react-router-dom"
import { ReservationPage } from "../views/ReservationPage"

export const ReservationsRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ReservationPage />}/>
        <Route path="/*" element={<Navigate to="/reservation"/>}/>
    </Routes>
  )
}
