import { Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import '../styles/blogs.css'

const MainLayout = () => {
  const {pathname} = useLocation()

  return (
    <div>
        <Navigation className={pathname !== "/" ? "not-home" : ""}/>
        <Outlet />
    </div>
  )
}

export default MainLayout