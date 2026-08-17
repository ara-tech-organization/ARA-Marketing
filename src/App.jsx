import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import MouseEffect from './components/common/MouseEffect'
import CursorGlow from './components/common/CursorGlow'
import FloatingSocial from './components/common/FloatingSocial'
import PromoPopup from './components/common/PromoPopup'
/* Downscaled copy of Footer.webp (420px, ~20KB) — the full-size logo is 373KB,
   far too heavy for something that has to paint on the very first frame. */
import loaderLogo from './assets/Logo-loader.webp'
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
const CareersPage         = lazy(() => import('./pages/CareersPage'))
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
      <div className="relative flex items-center justify-center
        w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] lg:w-[340px] lg:h-[340px]">

        {/* Soft glow behind the mark — wider than the ring so it bleeds outward */}
        <span className="absolute -inset-10 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.32) 0%, transparent 66%)' }} />

        {/* Static track */}
        <span className="absolute inset-0 rounded-full border-[3px] border-blue-600/20" />

        {/* Spinning arc */}
        <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-400/50 animate-spin" />

        {/* Counter-rotating inner arc */}
        <span className="absolute inset-[22px] sm:inset-[28px] rounded-full border-2 border-transparent border-b-blue-300/45 animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '2.4s' }} />

        {/* Logo — stays upright while the rings turn */}
        <img src={loaderLogo} alt="ARA Discover Marketing"
          className="relative w-[150px] sm:w-[190px] lg:w-[224px] object-contain animate-hero-enter" />
      </div>
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
          <Route path="/careers"                                         element={<CareersPage />}   />
          <Route path="/thank-you"                                       element={<ThankYouPage />}   />
          <Route path="/privacy-policy"                                  element={<PrivacyPolicyPage />}   />
          <Route path="/terms-and-conditions"                            element={<TermsConditionsPage />} />
          <Route path="*"                                                element={<NotFoundPage />}  />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
