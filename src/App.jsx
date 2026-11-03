import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Brands from './pages/Brands.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); document.getElementById('top')?.scrollIntoView?.({ block: 'start' }) }, [pathname]); return null }

export default function App() {
  return (<><ScrollTop />
    <Routes><Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:slug" element={<ServiceDetail />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="brands" element={<Brands />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route></Routes></>)
}
