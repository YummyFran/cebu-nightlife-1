import { Routes, Route, HashRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './Layouts/MainLayout'
import PoolVilla from './pages/PoolVilla'
import EscortGirl from './pages/EscortGirl'
import Golf from './pages/Golf'
import NightLife from './pages/NightLife'
import Inquiry from './pages/Inquiry'


function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='poolvilla' element={<PoolVilla />} />
            <Route path='escortgirl' element={<EscortGirl />} />
            <Route path='golf' element={<Golf />} />
            <Route path='nightlife' element={<NightLife />} />
            <Route path='inquiry' element={<Inquiry />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
