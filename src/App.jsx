import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home              from './pages/Home'
import SMMPage           from './pages/SMMPage'
import WebDevPage        from './pages/WebDevPage'
import GraphicDesignPage from './pages/GraphicDesignPage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter basename="/ARA-Marketing">
      <Routes>
        <Route path="/"                                element={<Home />}              />
        <Route path="/services/social-media-marketing" element={<SMMPage />}           />
        <Route path="/services/website-development"    element={<WebDevPage />}        />
        <Route path="/services/graphic-design"         element={<GraphicDesignPage />} />
      </Routes>
    </BrowserRouter>
  )
}
