import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthenticationPage } from '../views/AuthenticationPage'

export const AuthenticationRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthenticationPage />}/>
        <Route path='/*' element={<Navigate to="/login"/>}/>
    </Routes>
  )
}