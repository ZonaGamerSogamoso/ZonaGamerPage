import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../views/RegisterPage'

export const RegisterRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<RegisterPage />}/>
        <Route path='/*' element={<Navigate to="/register"/>}/>
    </Routes>
  )
}