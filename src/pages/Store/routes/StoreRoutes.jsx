import { Navigate, Route, Routes } from "react-router-dom"
import { StorePage } from "../views/StorePage"

export const StoreRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<StorePage />}/>
        <Route path="/*" element={<Navigate to="/service" />}/>
    </Routes>
  )
}