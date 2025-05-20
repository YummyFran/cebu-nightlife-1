import React from 'react'
import { Outlet } from 'react-router-dom'
import CTAButtons from '../components/CTAButtons'

const CTALayout = () => {
  return (
    <div>
        <Outlet />
        <CTAButtons />
    </div>
  )
}

export default CTALayout