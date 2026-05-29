import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home              from './pages/Home'
import SMMPage           from './pages/SMMPage'
import WebDevPage        from './pages/WebDevPage'
import GraphicDesignPage from './pages/GraphicDesignPage'
import SEOPage           from './pages/SEOPage'
import SEMPage           from './pages/SEMPage'
import VideoEditingPage    from './pages/VideoEditingPage'
import OtherServicesPage       from './pages/OtherServicesPage'
import StaticWebsitePage      from './pages/StaticWebsitePage'
import DynamicWebsitePage    from './pages/DynamicWebsitePage'
import CMSWebsitePage           from './pages/CMSWebsitePage'
import EcommerceWebsitePage      from './pages/EcommerceWebsitePage'
import EnterpriseWebsitePage     from './pages/EnterpriseWebsitePage'
import WebAppPage                from './pages/WebAppPage'
import MobileAppPage            from './pages/MobileAppPage'
import AboutUsPage               from './pages/AboutUsPage'
import ContactPage               from './pages/ContactPage'
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
        <Route path="/services/best-seo-company-thanjavur" element={<SEOPage />} />
        <Route path="/services/best-sem-company-thanjavur" element={<SEMPage />} />
        <Route path="/services/video-editing"              element={<VideoEditingPage />} />
        <Route path="/services/other-digital-marketing-services-thanjavur" element={<OtherServicesPage />} />
        <Route path="/services/static-website-development"               element={<StaticWebsitePage />} />
        <Route path="/services/dynamic-website-development"             element={<DynamicWebsitePage />} />
        <Route path="/services/cms-website-development"               element={<CMSWebsitePage />} />
        <Route path="/services/ecommerce-website-development"           element={<EcommerceWebsitePage />} />
        <Route path="/services/enterprise-website-development"         element={<EnterpriseWebsitePage />} />
        <Route path="/services/web-application-development"             element={<WebAppPage />} />
        <Route path="/services/mobile-application-development"        element={<MobileAppPage />} />
        <Route path="/about"                                           element={<AboutUsPage />}   />
        <Route path="/contact"                                         element={<ContactPage />}   />
      </Routes>
    </BrowserRouter>
  )
}
