import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import MouseEffect from './components/common/MouseEffect'
import CursorGlow from './components/common/CursorGlow'
import FloatingSocial from './components/common/FloatingSocial'
import PromoPopup from './components/common/PromoPopup'
import './index.css'

const Home                = lazy(() => import('./pages/Home'))
const SMMPage             = lazy(() => import('./pages/SMMPage'))
const WebDevPage          = lazy(() => import('./pages/WebDevPage'))
const GraphicDesignPage   = lazy(() => import('./pages/GraphicDesignPage'))
const SEOPage             = lazy(() => import('./pages/SEOPage'))
const SEMPage             = lazy(() => import('./pages/SEMPage'))
const VideoEditingPage    = lazy(() => import('./pages/VideoEditingPage'))
const OtherServicesPage   = lazy(() => import('./pages/OtherServicesPage'))
const StaticWebsitePage   = lazy(() => import('./pages/StaticWebsitePage'))
const DynamicWebsitePage  = lazy(() => import('./pages/DynamicWebsitePage'))
const CMSWebsitePage      = lazy(() => import('./pages/CMSWebsitePage'))
const EcommerceWebsitePage   = lazy(() => import('./pages/EcommerceWebsitePage'))
const EnterpriseWebsitePage  = lazy(() => import('./pages/EnterpriseWebsitePage'))
const WebAppPage          = lazy(() => import('./pages/WebAppPage'))
const MobileAppPage       = lazy(() => import('./pages/MobileAppPage'))
const AboutUsPage         = lazy(() => import('./pages/AboutUsPage'))
const ContactPage         = lazy(() => import('./pages/ContactPage'))
const ThankYouPage        = lazy(() => import('./pages/ThankYouPage'))
const PriceDetailsPage    = lazy(() => import('./pages/PriceDetailsPage'))
const PrivacyPolicyPage   = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'))
const NotFoundPage        = lazy(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0d2244]">
      <div className="w-10 h-10 rounded-full border-2 border-blue-600/30 border-t-blue-500 animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <MouseEffect />
      <FloatingSocial />
      <PromoPopup />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                                element={<Home />}              />
          <Route path="/services/social-media-marketing" element={<SMMPage />}           />
          <Route path="/services/website-development"    element={<WebDevPage />}        />
          <Route path="/services/graphic-design"         element={<GraphicDesignPage />} />
          <Route path="/services/search-engine-optimization" element={<SEOPage />} />
          <Route path="/services/search-engine-marketing" element={<SEMPage />} />
          <Route path="/services/video-editing"              element={<VideoEditingPage />} />
          <Route path="/services/other-digital-marketing-services" element={<OtherServicesPage />} />
          <Route path="/services/static-website-development"               element={<StaticWebsitePage />} />
          <Route path="/services/dynamic-website-development"             element={<DynamicWebsitePage />} />
          <Route path="/services/cms-website-development"               element={<CMSWebsitePage />} />
          <Route path="/services/ecommerce-website-development"           element={<EcommerceWebsitePage />} />
          <Route path="/services/enterprise-website-development"         element={<EnterpriseWebsitePage />} />
          <Route path="/services/web-application-development"             element={<WebAppPage />} />
          <Route path="/services/mobile-application-development"        element={<MobileAppPage />} />
          <Route path="/about-us"                                        element={<AboutUsPage />}   />
          <Route path="/price-details"                                   element={<PriceDetailsPage />} />
          <Route path="/contact-us"                                      element={<ContactPage />}   />
          <Route path="/thank-you"                                       element={<ThankYouPage />}   />
          <Route path="/privacy-policy"                                  element={<PrivacyPolicyPage />}   />
          <Route path="/terms-and-conditions"                            element={<TermsConditionsPage />} />
          <Route path="*"                                                element={<NotFoundPage />}  />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
