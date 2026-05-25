import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home    from './pages/Home'
import SMMPage from './pages/SMMPage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter basename="/ARA-Marketing">
      <Routes>
        <Route path="/"                                element={<Home />}    />
        <Route path="/services/social-media-marketing" element={<SMMPage />} />
      </Routes>
    </BrowserRouter>
  )
}
