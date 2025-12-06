import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Thyroid from './pages/Thyroid'
import Parathyroid from './pages/Parathyroid'
import Adrenal from './pages/Adrenal'
import Pituitary from './pages/Pituitary'
import NET from './pages/NET'
import MEN from './pages/MEN'
import IHC from './pages/IHC'
import Molecular from './pages/Molecular'
import Pitfalls from './pages/Pitfalls'
import Cases from './pages/Cases'
import Assessment from './pages/Assessment'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="thyroid" element={<Thyroid />} />
        <Route path="parathyroid" element={<Parathyroid />} />
        <Route path="adrenal" element={<Adrenal />} />
        <Route path="pituitary" element={<Pituitary />} />
        <Route path="net" element={<NET />} />
        <Route path="men" element={<MEN />} />
        <Route path="ihc" element={<IHC />} />
        <Route path="molecular" element={<Molecular />} />
        <Route path="pitfalls" element={<Pitfalls />} />
        <Route path="cases" element={<Cases />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
