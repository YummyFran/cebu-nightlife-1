import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './Layouts/MainLayout'
import PoolVilla from './pages/PoolVilla'
import EscortGirl from './pages/EscortGirl'
import Golf from './pages/Golf'
import NightLife from './pages/NightLife'
import Inquiry from './pages/Inquiry'
import React from 'react'
import CardPages from './pages/CardPages'
import CTALayout from './Layouts/CTALayout'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'

const categories = [
  {
    category: 'poolvilla',
    element: PoolVilla
  },{
    category: 'escortgirl',
    element: EscortGirl
  },{
    category: 'golf',
    element: Golf
  },{
    category: 'nightlife',
    element: NightLife
  },{
    category: 'inquiry',
    element: Inquiry
  }
]  

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            {
              categories.map((cat, i) => (
                <Route key={`${cat.slug}-slug`} path={cat.category} element={<CTALayout />}>
                  <Route index element={React.createElement(cat.element)} />
                  <Route path={':slug'} element={<CardPages />}/>
                </Route>
              ))
            }
            <Route path='*' element={<NotFound />} />

          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
