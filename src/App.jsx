import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home              from './pages/Home'
import SMMPage           from './pages/SMMPage'
import WebDevPage        from './pages/WebDevPage'
import GraphicDesignPage from './pages/GraphicDesignPage'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/ARA-Marketing">
      <ScrollToTop />
      <Routes>
        <Route path="/"                                element={<Home />}              />
        <Route path="/services/social-media-marketing" element={<SMMPage />}           />
        <Route path="/services/website-development"    element={<WebDevPage />}        />
        <Route path="/services/graphic-design"         element={<GraphicDesignPage />} />
      </Routes>
    </BrowserRouter>
  )
}
