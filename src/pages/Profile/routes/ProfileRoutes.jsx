import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from '../views/ProfilePage'

export const ProfileRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ProfilePage />}/>
        <Route path='/*' element={<Navigate to="/profile"/>}/>
    </Routes>
  )
}