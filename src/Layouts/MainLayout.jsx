import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import '../styles/blogs.css'

const MainLayout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default MainLayout