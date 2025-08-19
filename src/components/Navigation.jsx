import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/navigation.css'
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/Logo.svg"
import Pointer from "../assets/pointer.png"

const Navigation = ({ className }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const route = useLocation()

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [route.pathname])

  return (
    <div className={`navigation-bar ${className}`}>
        <nav className='nav-links'>
            <NavLink className="logo" to={'/'}>
                <div className="logo-img">
                    <img src={Logo} alt="logo" />
                </div>
                세부밤문화<span>넘버원</span>
            </NavLink>
            <NavLink to={'/poolvilla'} className={({isActive}) => isActive ? 'active-link' : ''}>세부풀빌라</NavLink>
            <NavLink to={'/escortgirl'} className={({isActive}) => isActive ? 'active-link' : ''}>세부에스코트걸</NavLink>
            <NavLink to={'/golf'} className={({isActive}) => isActive ? 'active-link' : ''}>세부골프</NavLink>
            <NavLink to={'/nightlife'} className={({isActive}) => isActive ? 'active-link' : ''}>세부밤문화정보</NavLink>
            <NavLink to={'/inquiry'} className={({isActive}) => isActive ? 'active-link' : ''}>1:1문의</NavLink>
            <div className="burger-menu" onClick={() => setIsMobileMenuOpen(true)}>
                메뉴
            </div>
            
            <nav className={`mobile-nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
                <div className="close" onClick={() => setIsMobileMenuOpen(false)}>&times;</div>
                <NavLink to={'/poolvilla'} className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className="pointer">
                        <img src={Pointer} alt="" />
                    </div>
                    세부풀빌라
                </NavLink>
                <NavLink to={'/escortgirl'} className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className="pointer">
                        <img src={Pointer} alt="" />
                    </div>
                    세부에스코트걸
                </NavLink>
                <NavLink to={'/golf'} className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className="pointer">
                        <img src={Pointer} alt="" />
                    </div>
                    세부황제골프
                </NavLink>
                <NavLink to={'/nightlife'} className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className="pointer">
                        <img src={Pointer} alt="" />
                    </div>
                    세부밤문화정보
                </NavLink>
                <NavLink to={'/inquiry'} className={({isActive}) => isActive ? 'active-link' : ''}>
                    <div className="pointer">
                        <img src={Pointer} alt="" />
                    </div>
                    1:1문의
                </NavLink>
            </nav>
        </nav>
    </div>
  )
}

export default Navigation